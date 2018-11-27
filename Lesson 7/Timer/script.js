setInterval(oClock, 1000);  
function oClock() {
   let span = document.querySelector('span');
    let date = new Date(),
        hours = date.getHours();
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        time =  hours + ":" + minutes + ":" + seconds;
        if(hours < 10) {
            hours = "0" + hours;
            time = hours + ":" + minutes + ":" + seconds;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
            time = hours + ":" + minutes + ":" + seconds;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
            time = hours + ":" + minutes + ":" + seconds;

        }
        span.textContent = time;
        return time;
        
}




