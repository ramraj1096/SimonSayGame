let gameSeq =[];
let userSeq =[];
let highScore =[];
let btns = ["box-one","box-two","box-three","box-four"];

let gameStarted = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress" , function (){
    if (gameStarted == false){
        console.log("Game Started !");
        gameStarted = true;
        levelUp();
    }
    
});

function flashBtn(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    } , 250);
}

function userFlashBtn(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    } , 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    highScore.push(level);
    console.log(highScore);
    let randomIdx = Math.floor(Math.random()*3);
    let randColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    flashBtn(randBtn);
}

function bgColor(){
    document.body.style.backgroundColor = `red`;

    setTimeout(function (){
        document.body.style.backgroundColor = `#fff`;
    } , 250);
}

function ansCheck(idx){
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }
    else {
        h3.innerText = `Game over , Press any key to start\n Your score is ${level}\n High score : ${Math.max(...highScore)}`;
        bgColor();
        level = 0;
        gameStarted = false;
        gameSeq = [];
        userSeq = [];
        
    }
}

function btnPressed(){
    let btn = this;
    userFlashBtn(btn);

    let userBtn = btn.getAttribute("id");
    userSeq.push(userBtn);
    ansCheck(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click" , btnPressed);
}