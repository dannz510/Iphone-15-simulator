//get all elements from collapsible class
let coll = document.getElementsByClassName("MenuButtons");
//i variable for loop
let i;
//forloop through each element in collapsible
for (i = 0; i < coll.length; i++) {
  //click event for Menu Buttons
  coll[i].addEventListener("click", function () {
    //Gets the content in the Html
    let content = this.nextElementSibling;
    //Sets Height to Content Height
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

let futureDay = new Date("Sep 1, 2024 1:0:1").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = futureDay - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);