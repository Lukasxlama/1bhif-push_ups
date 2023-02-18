document.addEventListener("DOMContentLoaded", function () {
    let countValue = 0;
    const counter = document.querySelector("#counter .countValue");

    let intervalId = setInterval(function () {
        if (countValue >= 10) {
            document.getElementById("counter").innerHTML = "Julian died!<br><br>Julian ist an muskularem Kreislaufkollaps gestorben."
            document.getElementById("counter").style.color = "red";
            document.getElementById("counter").style.backgroundColor = "black";
            clearInterval(intervalId);
        } else {
            countValue++;
            counter.innerHTML = countValue;
        }
    }, 300);
});
