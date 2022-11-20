
var randomnumber1=Math.random()*6;
randomnumber1=Math.floor(randomnumber1)+1;
var randomimagesrc1="images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomimagesrc1);
console.log(randomnumber1);

var randomnumber2=Math.random()*6;
randomnumber2=Math.floor(randomnumber2)+1;
var randomimagesrc2="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomimagesrc2);
console.log(randomnumber2);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent="Player 2 Wins🚩";
}
else{
    document.querySelector("h1").textContent="Game Draw!!";
}