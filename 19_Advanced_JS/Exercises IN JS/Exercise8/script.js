function displayclock(hours, minutes, seconds, date, month, year) {
    hours = String(hours).padStart(2, '0');//to add the leading 0s
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    let clock = `<div class="clock">
                <div class="hours">${hours}</div>:
                <div class="minutes">${minutes}</div>:
                <div class="seconds">${seconds}</div>
                <div class="date">|${date}-${month}-${year}|</div>
                <div class="alarm">⏰</div>
            </div>`

    let div = document.querySelector(".container")
    div.innerHTML = clock
}

const obj = {
    hours: 14,
    minutes: 48,
    seconds: 59,
    date: 28,
    month: 6,   // June (1-based or 0-based — pick one and stay consistent -we are here taking 1 based approach that is jan is 1)
    year: 2025
}


//This uses JavaScript’s Date object to calculate how many days are in any month. so that as per the monthdays month number can be chnaged
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

setInterval(() => {
    obj["seconds"]++;
    if (obj.seconds === 60) {
        obj.seconds = 0; obj.minutes++;

    }
    if (obj["minutes"] == 60) {//similarly if min is 59
        obj.hours++;//one hour passed hour+1
        obj.minutes = 0;//and min will become 0
    }
    if (obj["hours"] == 24) {//if sec becomes 59
        obj.hours = 0; obj.date++;

    }
    const daysInMonth = getDaysInMonth(obj.month, obj.year);

    if (obj.date > daysInMonth) {
        obj.date = 1; obj.month++;

    }

    // Handle month rollover
    if (obj.month > 12) {
        obj.month = 1; obj.year++;
    }

    displayclock(obj.hours, obj.minutes, obj.seconds, obj.date, obj.month, obj.year)

}, 1000);


document.addEventListener("click", function (e) {
    if (e.target.closest(".alarm")) {//If .alarm is added to the DOM after the script runs (e.g., via JavaScript), then it won't be available when querySelector runs.✅ Fix:Use event delegation, e.g., attach the event to a static parent:
        let alarmSettings = `<input id="alarm-time" type="time" value="10:30" />`
    }
});
