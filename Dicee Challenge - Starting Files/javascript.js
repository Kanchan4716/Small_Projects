
var randomnumber1=Math.random();
randomnumber1=Math.floor( randomnumber1*6) + 1;

var randomNumber2=Math.random();
randomNumber2=Math.floor( randomNumber2*6) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomnumber1 + ".png");
//document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomnumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player1 wins!";
}else if(randomnumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player2 wins!"
}else{
    document.querySelector("h1").innerHTML="🚩 draw!"
}


