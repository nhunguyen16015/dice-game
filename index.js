let person1 = prompt("Enter player 1 name: ");
document.getElementById("p1").innerHTML = person1;
let person2 = prompt("Enter player 2 name: ");
document.getElementById("p2").innerHTML = person2;


var button1 = document.getElementById("dice-button1");

var randomDiceImage1 = null;
var randomDiceImage2 = null;

document.querySelectorAll("img")[0].classList.add("zoom-in-and-out");
setTimeout(() => {
    document.querySelectorAll("img")[0].classList.remove("zoom-in-and-out");
}, 2000);

button1.onclick = function () {

    document.querySelectorAll("img")[0].classList.add("rotate");

    randomDiceImage1 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

    setTimeout(() => {
        document.querySelectorAll("img")[0].classList.remove("rotate");
    }
        , 500);

    setTimeout(() => {
        document.querySelectorAll("img")[1].classList.add("zoom-in-and-out");
    }
        , 500);

    setTimeout(() => {
        document.querySelectorAll("img")[1].classList.remove("zoom-in-and-out");
    }, 2000);
};

var button2 = document.getElementById("dice-button2");
button2.onclick = function () {
    document.querySelectorAll("img")[1].classList.toggle("rotate");
    randomDiceImage2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    setTimeout(() => {
        document.querySelectorAll("img")[1].classList.remove("rotate");
    }
        , 500);

    if (randomDiceImage1 > randomDiceImage2) {
        document.querySelector("h1").innerHTML = person1 + " Wins!";
    } else if (randomDiceImage1 < randomDiceImage2) {
        document.querySelector("h1").innerHTML = person2 + " Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Tie Game!";
    }

    setTimeout(() => {
        document.querySelectorAll("img")[0].classList.add("zoom-in-and-out");
    }
        , 500);
    setTimeout(() => {
        document.querySelectorAll("img")[0].classList.remove("zoom-in-and-out");
    }, 2000);

}





