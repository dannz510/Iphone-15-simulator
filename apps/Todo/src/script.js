'use strict';

/*

  THINGS TO NOTE
		- Each task list item has a class of .task
		- When the task is being swiped right, try adding the class of .completing
		- When the task is being swiped left, try adding the class of .deleting
		- A completed task should have a class of .completed
    
    - The check and crosses are added as :before and :after pseudo-elements of the .task li so you don't need to add them
    
      GOOD LUCK!

*/

class ClearJS {
  constructor () {
    this.tasks = Array.from(document.getElementsByClassName("task"));
    
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.update = this.update.bind(this);
    
    this.startX = 0;
    this.currentX = 0;
    this.screenX = 0;
    this.targetX = 0;
    
    this.target = null;
    this.targetBCR = null;
    
    this.swiping = false;
    
    this.addEventListeners();
    requestAnimationFrame(this.update);
  }
  
  addEventListeners() {
    document.addEventListener('mousedown', this.onStart);
    document.addEventListener('mousemove', this.onMove);
    document.addEventListener('mouseup', this.onEnd);
  }
  
  onStart(evt) {
      if (this.target)
        return;
  
      if (!evt.target.classList.contains('task'))
        return;
    
      this.target = evt.target;
      this.targetBCR = this.target.getBoundingClientRect();
    
      this.startX = evt.pageX;
      this.currentX = this.startX;
    
      this.swiping = true;
    
      // console.log('start' , this.startX)
      evt.preventDefault();
  }
  
  onMove(evt) {
      if (!this.target)
        return;
      this.currentX = evt.pageX;
      //console.log('move' , this.currentX)
  }
  
  onEnd() {
      if (!this.target)
        return;

      this.targetX = 0;
      let screenX = this.currentX - this.startX;
  
      if (Math.abs(screenX) > ( this.targetBCR.width * 0.30 ) ) {
        this.targetX = (screenX > 0) ? this.targetBCR.width : -this.targetBCR.width;
      }
    
      this.swiping = false;
  }
  
  update() {
    requestAnimationFrame(this.update);
    
    if (!this.target)
      return;

    if (this.swiping) {
      this.screenX = this.currentX - this.startX;
    } else {
      this.screenX += (this.targetX - this.screenX) / 4;
    }
    
    this.target.style.transform = `translateX(${this.screenX}px)`;
    
    if ( this.screenX > this.targetBCR.width / 4 ){
        this.target.classList.add('completing');
    } else if ( this.screenX < -(this.targetBCR.width / 4) ){
        this.target.classList.add('deleting');
    } else {
        this.target.classList.remove('completing');
        this.target.classList.remove('deleting');
    } 
    
    if (this.swiping)
      return;
    
    if ( Math.abs(this.screenX) < 5 ) {
      this.reset();
    } else if ( this.screenX < -(this.targetBCR.width - 20) ) {
        if (!this.target || !this.target.parentNode)
          return;
      
        const targetIndex = this.tasks.indexOf(this.target);
        this.tasks.splice(targetIndex, 1);
      
        this.target.parentNode.removeChild(this.target);

        this.reset()
    } else if ( this.screenX > (this.targetBCR.width - 20) ) {
       if (!this.target || !this.target.parentNode)
          return;
      
        const targetIndex = this.tasks.indexOf(this.target);
        this.tasks.splice(targetIndex, 1);
      
        this.target.classList.remove('completing');
        this.target.classList.add('completed');
      
        this.tasks.push( this.target );
        this.target.parentNode.appendChild(this.target);
      
        this.reset()
    }
    
  }
  
  reset() {
    if (!this.target)
      return;
    this.target.style.transform = 'none';
    this.target = null;
  }
  
}

window.addEventListener( 'load' , () => new ClearJS() );
