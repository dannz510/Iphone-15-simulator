function runClock() {
  const now = new Date();
  const hour = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();
  const ms = now.getMilliseconds();

  const clock = document.querySelector(".clock");
  const hourHand = clock.querySelector(".hour");
  const minuteHand = clock.querySelector(".minute");
  const secondHand = clock.querySelector(".second");

  const hourRotation = 30 * hour + 0.5 * min;
  const minRotation = 6 * min + 0.1 * sec;
  const secRotation = 6 * sec + 0.006 * ms;
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minRotation}deg)`;
  secondHand.style.transform = `rotate(${secRotation}deg)`;

  requestAnimationFrame(runClock);
}

runClock();



const text = document.querySelector(".p-one");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5.4}deg)">${char}</span>`
  )
  .join("");

const textTwo = document.querySelector(".p-two");
textTwo.innerHTML = textTwo.innerText
  .split("")
  .map(
    (charc, l) => `<span style="transform:rotate(${l * 5}deg)">${charc}</span>`
  )
  .join("");

setTimeout(function () {
  document.getElementById("five").innerHTML = "4°";
}, 5000);

document.getElementById("bb").addEventListener("mouseover", mouseOver);
document.getElementById("bb").addEventListener("mouseout", mouseOut);
function mouseOver() {
  document.getElementById("aa").style.backgroundColor = "transparent";
}

function mouseOut() {
  document.getElementById("aa").style.backgroundColor = "black";
}