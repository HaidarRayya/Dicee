function randomNumber(){
    var randomNumber1=Math.floor(Math.random() * 6);
    return randomNumber1;
}
var imgaes=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var player1=randomNumber();
var player2=randomNumber();

document.querySelector("img.img1").setAttribute("src",imgaes[player1]);
document.querySelector("img.img2").setAttribute("src",imgaes[player2]);
 if(player1>player2){
     document.querySelector("h1").textContent="player1 won";
 }else if(player2>player1){
    document.querySelector("h1").textContent="player2 won";

 }else{
    document.querySelector("h1").textContent="Drwo";
 }