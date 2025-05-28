const symbols =[{
        ico:'♠',
        color: '#252525',
        indice: 0
    },{
        ico:'♣',
        color: '#252525',
        indice: 1
    },{
        ico:'♥',
        color: '#e44145',
        indice: 2
    },{
        ico:'♦',
        color: '#e44145',
        indice: 3
}];
const nums=[{/*Iconos sacados de https://es.piliapp.com/symbol/card-suit/*/
        num:'A',
        estiloB:['🂡','🃑','🂱','🃁']
    },{
        num:2,
        estiloB:['🂢','🃒','🂲','🃂']
    },{
        num:3,
        estiloB:['🂣','🃓','🂳','🃃']
    },{
        num:4,
        estiloB:['🂤','🃔','🂴','🃄']
    },{
        num:5,
        estiloB:['🂥','🃕','🂵','🃅']
    },{
        num:6,
        estiloB:['🂦','🃖','🂶','🃆']
    },{
        num:7,
        estiloB:['🂧','🃗','🂷','🃇']
    },{
        num:8,
        estiloB:['🂨','🃘','🂸','🃈']
    },{
        num:9,
        estiloB:['🂩','🃙','🂹','🃉']
    },{
        num:10,
        estiloB:['🂪','🃚','🂺','🃊']
    },{
        num:'J',
        estiloB:['🂫','🃛','🂻','🃋']
    },{
        num:'Q',
        estiloB:['🂭','🃝','🂽','🃍']
    },{
        num:'K',
        estiloB:['🂮','🃞','🂾','🃎']
}]
let isSecondStyle=false;

const cardB=document.getElementsByClassName("cardBox")[0];
const card=document.getElementById("card");
const upp=document.querySelector(".upperCard");
const mid=document.querySelector(".middleCard");
const und=document.querySelector(".underCard");
let timer=setTimeout(createCard, 10000);
let cardS;
let cardN;
function createCard() {
    cardS =addAleatory(symbols);
    cardN =addAleatory(nums);
    card.style.color=cardS.color;
    upp.innerHTML = cardS.ico;
    und.innerHTML = cardS.ico;
    if (!isSecondStyle) {
        mid.innerHTML = cardN.num;
    } else {
        mid.innerHTML = cardN.estiloB[cardS.indice];
    }
    cuentaAtras10Seg();
}
function cuentaAtras10Seg() {//Temporizador de 10 segundos 
    clearTimeout(timer);
    timer = setTimeout(createCard, 10000);
}
function addAleatory(arr) {
    return arr[Math.floor(Math.random() *arr.length)];
}
function cambiarEstilo() {
    if (isSecondStyle) {
        cardB.style.width="16.8rem";
        cardB.style.height="25rem";
        card.style.fontSize ="7rem";
        mid.style.paddingBottom= "0rem";
        document.getElementsByClassName('Inp')[0].innerHTML="";
        document.getElementsByClassName('Inp')[1].innerHTML="";
        mid.innerHTML = cardN.num;

        isSecondStyle=false;
    } else {
        cardB.style.width="16.8rem";
        cardB.style.height="25rem";
        card.style.fontSize ="27.59rem";
        mid.style.paddingBottom= "3.5rem";
        mid.innerHTML = cardN.estiloB[cardS.indice];
        document.getElementsByClassName('Inp')[0].innerHTML="";
        document.getElementsByClassName('Inp')[1].innerHTML="";
        isSecondStyle=true
    }
}
document.getElementsByClassName('Inp')[0].addEventListener('change',(e)=>{
    console.log('Width: '+e.target.value);
    let firWid =cardB.style.width;
    cardB.style.width= e.target.value;
    if(firWid!==cardB.style.width){
        alert("😡¡¡¡ME HAS DESMONTADO TODO EL ETILO DE LA CARTA!!! 🤯 Con lo que me ha costado todo este css 😭");
    }
});
document.getElementsByClassName('Inp')[1].addEventListener('change',(e)=>{
    console.log('Height: '+e.target.value);
    let firHei=cardB.style.height;
    cardB.style.height= e.target.value;
    if(firHei!==cardB.style.height){
        alert("😡¡¡¡ME HAS DESMONTADO TODO EL ETILO DE LA CARTA!!! 🤯 Con lo que me ha costado todo este css 😭");
    }
});
createCard();