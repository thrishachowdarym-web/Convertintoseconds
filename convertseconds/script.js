let hoursInputEl = document.getElementById("hoursInput");
let minutesInputEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");


convertBtnEl.addEventListener("click", function() {
    let h=hoursInputEl.value ;
    let m=minutesInputEl.value;
    if (h=== "") {
        errorMsgEl.textContent = "Please enter a valid number of hours";
        timeInSecondsEl.textContent = "";
    } else if (m=== "") {
        errorMsgEl.textContent = "Please enter a valid number of minutes";
        timeInSecondsEl.textContent = "";
    } else {
        errorMsgEl.textContent = "";
        let timeInSeconds=(parseInt(h)*3600)+(parseInt(m)*60)+"s";
        timeInSecondsEl.classList.add("seconds");
        timeInSecondsEl.textContent=timeInSeconds;
    }
});