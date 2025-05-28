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
const nums=[{
        num:1,
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
function cuentaAtras10Seg() {
    clearTimeout(timer);
    timer = setTimeout(createCard, 10000);
}
function addAleatory(arr) {
    return arr[Math.floor(Math.random() *arr.length)];
}
function cambiarEstilo() {
    if (isSecondStyle) {
        card.style.fontSize ="7rem";
        mid.style.paddingBottom= "0rem";
        mid.innerHTML = cardN.num;
        isSecondStyle=false;
    } else {
        card.style.fontSize ="27.59rem";
        mid.style.paddingBottom= "3.5rem";
        mid.innerHTML = cardN.estiloB[cardS.indice];
        isSecondStyle=true
    }
}
document.getElementsByClassName('Inp')[0].addEventListener('change',(e)=>{
    console.log('Width: '+e.target.value);
});
document.getElementsByClassName('Inp')[1].addEventListener('change',(e)=>{
    console.log('Height: '+e.target.value);
});
createCard();