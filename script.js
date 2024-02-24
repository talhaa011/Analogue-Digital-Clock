let hours = document.querySelector('#hour');
let minutes = document.querySelector('#min');
let seconds = document.querySelector('#sec');

let displayTime = () => {
    let date = new Date();

    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrsRotation = 30 * hrs + min / 2;
    let minRotation = 6 * min;
    let secRotation = 6 * sec;

    hours.style.transform = `rotate(${hrsRotation}deg)`;
    minutes.style.transform = `rotate(${minRotation}deg)`;
    seconds.style.transform = `rotate(${secRotation}deg)`;
}
setInterval(displayTime, 1000);