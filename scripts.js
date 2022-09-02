const cardContainer = document.querySelector(".cards-container");

let DB = {
    m4: 
    {
    name: "M416", 
    image: "https://i.postimg.cc/02YQdfRT/M4.png",
    },  
    AK: 
    {
    name: "AKM", 
    image: "https://i.postimg.cc/zXZvgQMw/AK.png",
    },  
    Beryl: 
    {
    name: "Beryl", 
    image: "https://i.postimg.cc/7PTbb4BY/Beryl.png",
    },  
    AWM: 
    {
    name: "AWM", 
    image: "https://i.postimg.cc/SR8KPLXz/AWM.png",
    },  
    M24: 
    {
    name: "M24", 
    image: "https://i.postimg.cc/vBCBX2ms/M24.png",
    },  
    KAR: 
    {
    name: "Kar98K", 
    image: "https://i.postimg.cc/QtFCQZhm/KAR.png",
    },  
    SLR: 
    {
    name: "SLR", 
    image: "https://i.postimg.cc/0N2bNJ4L/SLR.png",
    },  
    SKS: 
    {
    name: "SKS", 
    image: "https://i.postimg.cc/xdxqN1Dq/SKS.png",
    },  
};

//Functions Section.
function objectLength(obj){return Object.keys(obj).length;}
function randomRender(obj){
    console.log("OK");
    for (let i = 0; i < 2*(objectLength(obj)); i++) {
        console.log(i);
        const singleCard = document.createElement("div");
        singleCard.classList.add("card","card-"+String(i));
        cardContainer.append(singleCard);
    }
}

randomRender(DB);

