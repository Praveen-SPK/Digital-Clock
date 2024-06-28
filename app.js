let dateItem = document.getElementById('date');
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

setInterval(() => {
    let SysDate = new Date();
    let date = `${pad(SysDate.getDate())} - ${pad(SysDate.getMonth())} - ${SysDate.getFullYear()} `;
    let hour = SysDate.getHours();
    let min = SysDate.getMinutes();
    let sec = SysDate.getSeconds();
    let noon = 'AM';

    if (hour > 12 && min >= 1) {
        noon = "PM";
        if (hour > 12) {
            hour -= 12;
        }
    }

    function pad(num) {
        if (num < 10) {
            num = "0" + num;
            return num;
        }
        return num;
    }
    dateItem.innerHTML=`${date}`;
    hours.innerHTML=`${pad(hour)}`
    mins.innerHTML=`${pad(min)}`
    secs.innerHTML=`${pad(sec)}`
    ampm.innerHTML=`${noon}`
    

}, 1000);

