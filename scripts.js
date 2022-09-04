let DB = [
    {
    name: "M416", 
    image: "https://i.postimg.cc/k52fgCVG/M4.png",
    },  
    {
    name: "AKM", 
    image: "https://i.postimg.cc/Jz6p80zS/AK.png",
    },  
    {
    name: "Beryl", 
    image: "https://i.postimg.cc/prHZCns5/Beryl.png",
    },  
    {
    name: "AWM", 
    image: "https://i.postimg.cc/yYTffv41/AWM.png",
    },  
    {
    name: "M24", 
    image: "https://i.postimg.cc/pT8CKBJt/M24.png",
    },  
    {
    name: "Kar98K", 
    image: "https://i.postimg.cc/t4CB8Wph/KAR.png",
    },  
    {
    name: "SLR", 
    image: "https://i.postimg.cc/gjsvKtw1/SLR.png",
    },  
    {
    name: "SKS", 
    image: "https://i.postimg.cc/KYCQKWLN/SKS.png",
    },  
    {
    name: "DBS", 
    image: "https://i.postimg.cc/0j0CB24W/DBS.png",
    },  
]
const totalMinutes = 1;
let time = totalMinutes*60 -10;
let numberOfCards = DB.length;
let isTheGameStarted = false;
let stopCountDown = false;
let flippedCard = false;
let firstCard ;
let secondCard ;
let lockGame = false;
let musicPlayed = true;

const cardContainer = document.querySelector(".cards-container");
const playButton = document.querySelector(".Interaction__Start");
const resetButton = document.querySelector(".Interaction__Reset");
const Song = document.querySelector(".song");
const winnerCard = document.querySelector(".Winner-Card");
const loserCard = document.querySelector(".Loser-Card");
const countDown = document.getElementById("countDown");

// Events.
resetButton.classList.add("hiddenButton");
countDown.classList.add("hiddenButton");
playButton.addEventListener("click",()=>{
    isTheGameStarted=true;
    playButton.classList.add("hiddenButton");
    playButton.classList.add("ButtonActive");
    countDown.classList.remove("hiddenButton");
    console.log("Game Started");
    resetButton.addEventListener("click",()=>location.reload());
    if (musicPlayed) {
        Song.innerHTML=('<audio src="./Pubg-Audio.mp3" autoplay></audio>');
        musicPlayed = false;
    }
    setInterval(startCountDown,1000);
    function startCountDown() {
        if (!stopCountDown) {            
            let Minutes = Math.floor(time/60);
            let Seconds = time%60;
            Minutes = (Minutes<10)? "0" + Minutes : Minutes;
            Seconds = (Seconds<10)? "0" + Seconds : Seconds;
            countDown.innerHTML=`${Minutes}:${Seconds}`;
            time--;
            if (time<0) {
                stopCountDown=true;
                console.log("LOSER");
                lockGame = true;
                loserCard.classList.remove("hiddenCard");
                playButton.classList.remove("ButtonActive");
                playButton.classList.add("hiddenButton");
                resetButton.classList.remove("hiddenButton");
                countDown.classList.add("stoppedCount");
            }
        }
    }});

//CODE FLOW.
winnerCard.classList.add("hiddenCard");
loserCard.classList.add("hiddenCard");
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
                firstCard.removeEventListener("click",flipCard);
                secondCard.removeEventListener("click",flipCard);
                matchCounter++;
                if (matchCounter===numberOfCards && time>0) {
                    matchCounter=0;
                    stopCountDown=true;
                    setTimeout((()=>{
                        winnerCard.classList.remove("hiddenCard");
                        playButton.classList.remove("ButtonActive");
                        playButton.classList.add("hiddenButton");
                        resetButton.classList.remove("hiddenButton");
                        countDown.classList.add("stoppedCount");
                    }),800);
                }
                // else if (matchCounter===numberOfCards && time>0) {    
                // }{
                //     console.log("LOSER");
                //     lockGame = true;
                //     loserCard.classList.remove("hiddenCard");
                //     playButton.classList.remove("ButtonActive");
                //     playButton.classList.add("hiddenButton");
                //     resetButton.classList.remove("hiddenButton");
                // }
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




