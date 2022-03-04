setInterval(setClockRotation, 1000);

const hourHand = document.getElementById("clock-short-hand");
const minuteHand = document.getElementById("clock-long-hand");
const secondHand = document.getElementById("second-hand");



function setClockRotation(){

    let currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    hourHand.style.transform = `rotate(${hoursRatio*360}deg)`;
    minuteHand.style.transform = `rotate(${minutesRatio*360}deg)`;
    secondHand.style.transform = `rotate(${secondsRatio*360}deg)`;

}



