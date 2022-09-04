let DB = [
    {
    name: "M416", 
    image: "https://i.postimg.cc/ZRjDMKQr/M4.png",
    },  
    {
    name: "AKM", 
    image: "https://i.postimg.cc/mrVtWTVb/AK.png",
    },  
    {
    name: "Beryl", 
    image: "https://i.postimg.cc/XqJDS6Mt/Beryl.png",
    },  
    {
    name: "AWM", 
    image: "https://i.postimg.cc/RhkT1Cx1/AWM.png",
    },  
    {
    name: "M24", 
    image: "https://i.postimg.cc/JhVgyFJB/M24.png",
    },  
    {
    name: "Kar98K", 
    image: "https://i.postimg.cc/LXmbDZx9/KAR.png",
    },  
    {
    name: "SLR", 
    image: "https://i.postimg.cc/W4Gy076Y/SLR.png",
    },  
    {
    name: "SKS", 
    image: "https://i.postimg.cc/MpjNpwcS/SKS.png",
    },  
    {
    name: "DBS", 
    image: "https://i.postimg.cc/RhDpvp4h/DBS.png",
    },  
]
let numberOfCards = DB.length;
let isTheGameStarted = false;
let flippedCard = false;
let firstCard ;
let secondCard ;
let lockGame = false;

const cardContainer = document.querySelector(".cards-container");
const playButton = document.querySelector(".Interaction__Start");
const resetButton = document.querySelector(".Interaction__Reset");
const Song = document.querySelector(".song");
const winnerCard = document.querySelector(".Winner-Card");

// Events.
resetButton.classList.add("hiddenButton");
playButton.addEventListener("click",()=>{
    isTheGameStarted=true;
    playButton.innerText="Game in progress";
    playButton.classList.add("ButtonActive");
    console.log("Game Started");
    resetButton.addEventListener("click",()=>location.reload());
    Song.innerHTML=('<audio src="./Pubg-Audio.mp3" autoplay></audio>')});



//CODE FLOW.
winnerCard.classList.add("hiddenCard");
let randomCards = randomArray(DB);
Render(randomCards);
//CODE FLOW.


//Functions Section.
function Render(obj){
    for (let i = 0; i < obj.length ; i++) {
        const singleCard = document.createElement("div");
        singleCard.classList.add("Card","Card-"+String(i+1),`${obj[i].name}`);
        singleCard.addEventListener("click",flipCard);

        const singleCardFront = document.createElement("img");
        singleCardFront.classList.add("Front-face");
        singleCardFront.setAttribute("src","https://i.postimg.cc/BQQR7FRM/Pubg-logo-v3.png");
        singleCardFront.setAttribute("alt","PUBG-logo");
        
        const singleCardBack = document.createElement("img");
        singleCardBack.classList.add("Back-face");
        singleCardBack.setAttribute("src",`${obj[i].image}`);
        singleCardBack.setAttribute("alt",`${obj[i].name}`);

        singleCard.append(singleCardFront,singleCardBack);
        cardContainer.append(singleCard);
    }
}

function randomArray(Array) {
    Array = Array.concat(Array);
    let Index = [];
    for (let i = 0; i < Array.length; i++) {
        Index.push(i);
    }
    Index.sort(()=>Math.random()-0.5);
    let randomArray =[];
    for (let j = 0; j < Index.length; j++) {
        randomArray.push(Array[Index[j]]);
    }
    return randomArray;
}

let matchCounter = 0;
function flipCard() {
    if (lockGame) {console.log("juego bloqueado");return;}
    if (isTheGameStarted) {
        this.classList.add("flipCard");
        if (!flippedCard) {
            firstCard = this;
            flippedCard = true;
            return;
        }else{
            secondCard = this;
            flippedCard = false;
            if (firstCard.classList[2]===secondCard.classList[2] && firstCard.classList[1]!==secondCard.classList[1]) {
                console.log("They are match");
                firstCard.removeEventListener("click",flipCard);
                secondCard.removeEventListener("click",flipCard);
                matchCounter++;
                if (matchCounter===numberOfCards) {
                    matchCounter=0;
                    setTimeout((()=>{
                        winnerCard.classList.remove("hiddenCard");
                        playButton.classList.remove("ButtonActive");
                        playButton.classList.add("hiddenButton");
                        resetButton.classList.remove("hiddenButton");
                    }),800);
                }
            }
            else{
                lockGame = true;
                setTimeout((()=>{
                    firstCard.classList.remove("flipCard"); 
                    secondCard.classList.remove("flipCard");    
                    lockGame = false;
                }),1000);
            }
        }
    }
}




