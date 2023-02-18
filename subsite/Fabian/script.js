document.addEventListener("DOMContentLoaded", function () {
    let countValue = 0;
    const counter = document.querySelector("#counter .countValue");

    setInterval(function () {
        countValue++;
        counter.innerHTML = countValue;
    }, 100);
});