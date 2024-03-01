var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dir, startX, startY, startTime, offsetX, offsetY, elapsedTime;
const swipeTimeSpan = 100;
const swipeMinOffset = 100;
const swipeRestraint = 200;

const weekdays = ["", "sun", "mon", "tue", "wed", "thr", "fri", "sat"];

const MonYearTitle = (props) => (
	<div className="monthYearTitleContainer">
		<div className="monthWrap">{props.month}</div>
		<div className="yearWrap">{props.year}</div>
	</div>
);

const WeekdayTitle = () => (
	<div className="weekdayTitleContainer">
		<div className="weekWrap">Sun</div>
		<div className="weekWrap">Mon</div>
		<div className="weekWrap">Tue</div>
		<div className="weekWrap">Wed</div>
		<div className="weekWrap">Thr</div>
		<div className="weekWrap">Fri</div>
		<div className="weekWrap">Sat</div>
	</div>
);

class DayCells extends React.Component {
	calcDayCells(month, year) {
		//number of days in current month
		let numOfDays = new Date(year, month, 0).getDate();
		//first and last weekday of current month
		let firstDay = new Date(year, month-1, 1).getDay();
		// let lastDay = new Date(year, month, numOfDays).getDay();
		let rows = [];
		let i = 0;
		while (i++ < firstDay) {
			rows.push({
				key: `blank${i}${month}${year}`,
				className: "cell-blank",
				dayNum: ""
			});
		}
		let day = 1;

		while (day <= numOfDays) {
			var flexOrder = (day%7 === 0) ? weekdays[7] : weekdays[day%7];
			const styleName = `cell ${flexOrder}`;
			const id = `${day}${month}${year}`;
			rows.push(
				{
					key: id,
					className: styleName,
					dayNum: day++
				}
			);
		}

		return rows;
	}
	componentWillReceiveProps(nextProps) {
		if (this.props.month !== nextProps.month) {
			console.log("month changed!");
		}
	}
	handleDayClick(id) {
		if (id[0] !== 'b') {
				this.props.onDayClicked(id);
		}
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (this.props.month !== nextProps.month);
	// }
	render() {
		const {month, year, dayIsClicked} = this.props;
		var currentMonthArr = this.calcDayCells(month, year);
		// var prevMonthArr = this.calcDayCells(month-1, year);
		const arr = [];
		const renderCalendar = (dayIsClicked) => {
			currentMonthArr.map((item) => {
				var style = (item.key === dayIsClicked && item.key[0] !== "b") ? "dayNum selected" : "dayNum";
				arr.push(
					<div key={item.key} className={item.className} onClick={()=>{this.handleDayClick(item.key)}} onTouch={()=>{this.handleDayClick(item.key)}}>
						<span className={style}>{item.dayNum}</span>
					</div>
				);
			});
			return (<div className="dayCellsContainer">{arr}</div>);
		}
		return (
			<div className="calendarsWrap">
				{renderCalendar(dayIsClicked)}
			</div>
	);
	}
}

class MonthControls extends React.Component {
	handleArrowClick(dir) {
		this.props.onArrowClick(dir);
	}
	render() {
		const {dir} = this.props;
		return (<div className="arrow-wrap">
			<div className={`arrow ${dir}`} onClick={()=>{this.handleArrowClick(dir)}}></div>
		</div>);
	}
}

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		let today = new Date();
		let defaultDay = today.getDate();
		let defaultMonth = today.getMonth()+1;	//getMonth() returns 0 for January
		let defaultYear = today.getFullYear();
		let defaultDayClicked = `${defaultDay}${defaultMonth}${defaultYear}`;
		this.state = {
			month: defaultMonth,
			year: defaultYear,
			dayIsClicked: defaultDayClicked,
			prevMonth: undefined
		}
		this.handleDayClicked = this.handleDayClicked.bind(this);
		this.handleMonthChange = this.handleMonthChange.bind(this);
	}
	handleDayClicked(id) {
		this.setState({
			dayIsClicked: id
		});
	}
	handleMonthChange(dir) {
		const {month, year} = this.state;
		if (dir === "left") {
			if (month === 1) {
				this.setState({
					year: year-1,
					month: 12,
					prevMonth: 1
				});
			} else {
				this.setState({
					month: month-1,
					prevMonth: month
				});
			}
		}
		if (dir === "right") {
			if (month === 12) {
				this.setState({
					year: year+1,
					month: 1,
					prevMonth: 12
				});
			} else {
				this.setState({
					month: month+1,
					prevMonth: month
				});
			}
		}
	}
	handleSwipeEvent(e, action) {
		const touchEventObj = e.changedTouches[0];
		if (action === "start") {
			startX = touchEventObj.screenX;
			startY = touchEventObj.screenY;
			startTime = new Date().getTime();
		} else if (action === "end") {
			elapsedTime = new Date().getTime() - startTime;
			if (elapsedTime >= swipeTimeSpan) {
				if (Math.abs(offsetX) >= swipeMinOffset && Math.abs(offsetY) <= swipeRestraint) {
					this.handleMonthChange(dir);
				}
				//top and down
				// else if (Math.abs(offsetY >= swipeMinOffset) && Math.abs(offsetX <= swipeRestraint)) {
				// 	this.handleMonthChange(dir);
				// }
				offsetX = 0;
				offsetY = 0;
			}
		} else {
			offsetX = touchEventObj.screenX - startX;
			offsetY = touchEventObj.screenY - startY;
			if (Math.abs(offsetX) > Math.abs(offsetY)) {
				dir = (offsetX < 0) ? "right" : 'left';
			}
		}
	}
	componentDidMount() {
		document.addEventListener("touchstart", function(){}, true);	//avoid tap gray box on mobile devices
	}
	render() {
		const {month, year, dayIsClicked, prevMonth} = this.state;
		function monthChangeComp(prevMonth, month) {
			if (month === 12 && prevMonth === 1) {
				return ("carouselDec");
			} else if (month === 1 && prevMonth === 12) {
				return ("carouselInc");
			} else {
				if (month > prevMonth) {
					return ("carouselInc");
				} else {
					return ("carouselDec");
				}
			}
		};
		const transitionStyle = monthChangeComp(prevMonth, month);
		return (
				<div className="calendarContainer">
					<MonYearTitle month={months[month]} year={year}/>
					<WeekdayTitle/>
					<div className="dayCellsViewPort" onTouchStart={(e) => this.handleSwipeEvent(e, "start")} onTouchMove={(e) => this.handleSwipeEvent(e, "move")} onTouchEnd={(e) => this.handleSwipeEvent(e, "end")}>
						<div className="dayCellsWrap">
							<ReactCSSTransitionGroup
								className="animOffset"
						        transitionName={`${transitionStyle}`}
						        transitionEnterTimeout={300}
						        transitionLeaveTimeout={300}
								>
								<DayCells key={`${month}${year}`} month={month} year={year} dayIsClicked={dayIsClicked} onDayClicked={this.handleDayClicked}/>
							</ReactCSSTransitionGroup>
						</div>
					</div>
					<MonthControls dir="left" onArrowClick={this.handleMonthChange}/>
					<MonthControls dir="right" onArrowClick={this.handleMonthChange}/>
				</div>
		);
	}
}

ReactDOM.render(
  <div>
	  <Calendar/>
  </div>,
  document.getElementById('app')
);
