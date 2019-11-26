'use strict'

let setAlarm = (time, callback) => {
    return function() {
      let getTime = new Date;
      let hours = getTime.getHours();
      let minutes = getTime.getMinutes();
      
      if (hours < 10) {
        hours = "0" + hours;
      } 
      
      if (minutes < 10) {
        minutes = "0" + minutes
      }

      let nowTime = hours + ":" + minutes;
      
      if (nowTime === time) {
        callback()
      }
    }
}

function setDailyRhythm(wakeUpTime, bedTime) {
        let goodMorning = () => alert("Доброе утро, Вася");
        let goodNight = () => alert("Спокойной ночи, Вася!");
       
        setInterval(setAlarm(wakeUpTime, goodMorning), 1000);
        setInterval(setAlarm(bedTime, goodNight), 1000);
}

setDailyRhythm("20:37", "20:38");