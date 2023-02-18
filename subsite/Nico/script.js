document.addEventListener("DOMContentLoaded", function () {
    let countValue = 0;
    const counter = document.querySelector("#counter .countValue");

    setInterval(function () {
        const shouldDecrement = Math.random() < 0.4;
        countValue = shouldDecrement ? countValue - 1 : countValue + 1;
        counter.innerHTML = countValue;
    }, 1000);
});