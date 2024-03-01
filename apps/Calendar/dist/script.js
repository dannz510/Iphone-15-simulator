var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const months = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dir, startX, startY, startTime, offsetX, offsetY, elapsedTime;
const swipeTimeSpan = 100;
const swipeMinOffset = 100;
const swipeRestraint = 200;

const weekdays = ["", "sun", "mon", "tue", "wed", "thr", "fri", "sat"];

const MonYearTitle = (props) => /*#__PURE__*/
React.createElement("div", { className: "monthYearTitleContainer" }, /*#__PURE__*/
React.createElement("div", { className: "monthWrap" }, props.month), /*#__PURE__*/
React.createElement("div", { className: "yearWrap" }, props.year));



const WeekdayTitle = () => /*#__PURE__*/
React.createElement("div", { className: "weekdayTitleContainer" }, /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Sun"), /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Mon"), /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Tue"), /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Wed"), /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Thr"), /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Fri"), /*#__PURE__*/
React.createElement("div", { className: "weekWrap" }, "Sat"));



class DayCells extends React.Component {
  calcDayCells(month, year) {
    //number of days in current month
    let numOfDays = new Date(year, month, 0).getDate();
    //first and last weekday of current month
    let firstDay = new Date(year, month - 1, 1).getDay();
    // let lastDay = new Date(year, month, numOfDays).getDay();
    let rows = [];
    let i = 0;
    while (i++ < firstDay) {
      rows.push({
        key: `blank${i}${month}${year}`,
        className: "cell-blank",
        dayNum: "" });

    }
    let day = 1;

    while (day <= numOfDays) {
      var flexOrder = day % 7 === 0 ? weekdays[7] : weekdays[day % 7];
      const styleName = `cell ${flexOrder}`;
      const id = `${day}${month}${year}`;
      rows.push(
      {
        key: id,
        className: styleName,
        dayNum: day++ });


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
    const { month, year, dayIsClicked } = this.props;
    var currentMonthArr = this.calcDayCells(month, year);
    // var prevMonthArr = this.calcDayCells(month-1, year);
    const arr = [];
    const renderCalendar = dayIsClicked => {
      currentMonthArr.map(item => {
        var style = item.key === dayIsClicked && item.key[0] !== "b" ? "dayNum selected" : "dayNum";
        arr.push( /*#__PURE__*/
        React.createElement("div", { key: item.key, className: item.className, onClick: () => {this.handleDayClick(item.key);}, onTouch: () => {this.handleDayClick(item.key);} }, /*#__PURE__*/
        React.createElement("span", { className: style }, item.dayNum)));


      });
      return /*#__PURE__*/React.createElement("div", { className: "dayCellsContainer" }, arr);
    };
    return /*#__PURE__*/(
      React.createElement("div", { className: "calendarsWrap" },
      renderCalendar(dayIsClicked)));


  }}


class MonthControls extends React.Component {
  handleArrowClick(dir) {
    this.props.onArrowClick(dir);
  }
  render() {
    const { dir } = this.props;
    return /*#__PURE__*/React.createElement("div", { className: "arrow-wrap" }, /*#__PURE__*/
    React.createElement("div", { className: `arrow ${dir}`, onClick: () => {this.handleArrowClick(dir);} }));

  }}


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let defaultDay = today.getDate();
    let defaultMonth = today.getMonth() + 1; //getMonth() returns 0 for January
    let defaultYear = today.getFullYear();
    let defaultDayClicked = `${defaultDay}${defaultMonth}${defaultYear}`;
    this.state = {
      month: defaultMonth,
      year: defaultYear,
      dayIsClicked: defaultDayClicked,
      prevMonth: undefined };

    this.handleDayClicked = this.handleDayClicked.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
  }
  handleDayClicked(id) {
    this.setState({
      dayIsClicked: id });

  }
  handleMonthChange(dir) {
    const { month, year } = this.state;
    if (dir === "left") {
      if (month === 1) {
        this.setState({
          year: year - 1,
          month: 12,
          prevMonth: 1 });

      } else {
        this.setState({
          month: month - 1,
          prevMonth: month });

      }
    }
    if (dir === "right") {
      if (month === 12) {
        this.setState({
          year: year + 1,
          month: 1,
          prevMonth: 12 });

      } else {
        this.setState({
          month: month + 1,
          prevMonth: month });

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
        dir = offsetX < 0 ? "right" : 'left';
      }
    }
  }
  componentDidMount() {
    document.addEventListener("touchstart", function () {}, true); //avoid tap gray box on mobile devices
  }
  render() {
    const { month, year, dayIsClicked, prevMonth } = this.state;
    function monthChangeComp(prevMonth, month) {
      if (month === 12 && prevMonth === 1) {
        return "carouselDec";
      } else if (month === 1 && prevMonth === 12) {
        return "carouselInc";
      } else {
        if (month > prevMonth) {
          return "carouselInc";
        } else {
          return "carouselDec";
        }
      }
    };
    const transitionStyle = monthChangeComp(prevMonth, month);
    return /*#__PURE__*/(
      React.createElement("div", { className: "calendarContainer" }, /*#__PURE__*/
      React.createElement(MonYearTitle, { month: months[month], year: year }), /*#__PURE__*/
      React.createElement(WeekdayTitle, null), /*#__PURE__*/
      React.createElement("div", { className: "dayCellsViewPort", onTouchStart: e => this.handleSwipeEvent(e, "start"), onTouchMove: e => this.handleSwipeEvent(e, "move"), onTouchEnd: e => this.handleSwipeEvent(e, "end") }, /*#__PURE__*/
      React.createElement("div", { className: "dayCellsWrap" }, /*#__PURE__*/
      React.createElement(ReactCSSTransitionGroup, {
        className: "animOffset",
        transitionName: `${transitionStyle}`,
        transitionEnterTimeout: 300,
        transitionLeaveTimeout: 300 }, /*#__PURE__*/

      React.createElement(DayCells, { key: `${month}${year}`, month: month, year: year, dayIsClicked: dayIsClicked, onDayClicked: this.handleDayClicked })))), /*#__PURE__*/



      React.createElement(MonthControls, { dir: "left", onArrowClick: this.handleMonthChange }), /*#__PURE__*/
      React.createElement(MonthControls, { dir: "right", onArrowClick: this.handleMonthChange })));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Calendar, null)),

document.getElementById('app'));