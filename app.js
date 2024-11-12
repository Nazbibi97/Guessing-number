var userGuess = +prompt("Guess the number between 1 to 10")
var randNumber = Math.random()*10
var correctNum = Math.floor(randNumber)+1;
if (userGuess === correctNum){
    document.write("<h1>Guess The Number</h1>"+
        '<img src="./assets/celebratre.gif" alt="">'+"</br>"+
        "<h6>Welldone You Won! Yes the correct number is:</h6> "+ correctNum )
console.log("correct!")
}else if(userGuess === correctNum +1 || userGuess === correctNum -1){
    document.write("<h1>Guess The Number</h1>"+ '<img src="./assets/giphy.gif" alt="">'+"</br>"+
        "<h6>Almost there! .The correct number is :  </h6>"+ correctNum )
console.log("Almost there! .The correct number is :  "+ correctNum)
}else{

    document.write("<h1>Guess The Number</h1>"+
       ' <img src="./assets/SAD.gif" alt="">' +"</br>"+
        "<h6>You loose. The corect number is : </h6>"+ correctNum)
    console.log("You loose. The corect number is : " + correctNum)
}