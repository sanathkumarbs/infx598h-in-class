function onClickHere(params) {
    // alert("You clicked me!");
    // this.textContent = "You Clicked Here!";
    var p = document.querySelector(".hide-show-text");
    if (p.style.display != "none") {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
}

var btnClickHere = document.querySelector(".btn-click-here");
btnClickHere.addEventListener("click", onClickHere);