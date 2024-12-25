let counternumber = document.getElementById("counterelement");

function increase() {
    let element = counternumber.textContent;
    let nextvalue = parseInt(element) + 1;
    if (nextvalue > 0) {
        document.getElementById("counterelement").style.color = "green";
    } else if (nextvalue < 0) {
        document.getElementById("counterelement").style.color = "red";
    } else {
        document.getElementById("counterelement").style.color = "yellow";
    }
    counternumber.textContent = nextvalue;
}

function decrease() {
    let element = counternumber.textContent;
    let nextvalue = parseInt(element) - 1;
    if (nextvalue > 0) {
        document.getElementById("counterelement").style.color = "green";
    } else if (nextvalue < 0) {
        document.getElementById("counterelement").style.color = "red";
    } else {
        document.getElementById("counterelement").style.color = "yellow";
    }
    counternumber.textContent = nextvalue;

}

function reset() {
    let resetnumber = 0
    counternumber.textContent = resetnumber;
    document.getElementById("counterelement").style.color = "yellow";


}