const cardContainer = document.querySelector(".cards-container");

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

//Functions Section.

function Render(obj){
    console.log("OK");
    for (let i = 0; i < obj.length ; i++) {
        console.log(i);
        const singleCard = document.createElement("div");
        singleCard.classList.add("card","card-"+String(i+1));
        singleCard.style.backgroundImage=`url(${obj[i].image})`;
        // singleCard.innerText=(obj[i].name);
        cardContainer.append(singleCard);
    }
}

function randomArray(Array) {
    Array = Array.concat(Array);
    let Index = [];
    for (let i = 0; i < Array.length; i++) {
        Index.push(i);
    }
    console.log(Index);
    Index.sort(()=>Math.random()-0.5);
    console.log(Index);
    let randomArray =[];
    for (let j = 0; j < Index.length; j++) {
        randomArray.push(Array[Index[j]]);
    }
    console.log(randomArray);
    return randomArray;
}

let randomCards = randomArray(DB);
Render(randomCards);



