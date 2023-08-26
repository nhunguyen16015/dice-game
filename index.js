let person1 = prompt("Enter player 1 name: ");
document.getElementById("p1").innerHTML = person1;
let person2 = prompt("Enter player 2 name: ");
document.getElementById("p2").innerHTML = person2;
//alert("Refresh the page to play");

var button = document.getElementById("dice-button");

button.onclick = function () {
     
    var randomDiceImage1 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);


    var randomDiceImage2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomDiceImage1 > randomDiceImage2) {
        document.querySelector("h1").innerHTML = person1 + " Wins!";
    } else if (randomDiceImage1 < randomDiceImage2) {
        document.querySelector("h1").innerHTML = person2 + " Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Tie Game!";
    }

};

// button.addEventListener("keypress", function(event){
//     event.preventDefault();
//     if (event.key === "Enter") {
        
//         button.click();
//         //alert("Enter pressed!");
//    }
// })


// alert("End game");


