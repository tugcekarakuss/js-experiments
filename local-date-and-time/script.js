function calculateTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12;

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;

    document.querySelector(".time").textContent = `${hour}:${minute} ${ampm}`;
}
function calculateDate() {
    var date = new Date();
    const dayNumber = date.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var dayOfMonth = date.getDate()
    function getOrdinal(n) {
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    const monthNumber = date.getMonth()
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    document.querySelector(".date").innerHTML = `${days[dayNumber]} ${dayOfMonth}${getOrdinal(dayOfMonth)} ${months[monthNumber]}`

}
setInterval(calculateTime, 1000);
calculateTime();
calculateDate()
setInterval(calculateDate, 60 * 1000);

