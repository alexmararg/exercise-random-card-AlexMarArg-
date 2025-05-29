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

const spa=document.querySelector(".space");
const cardB=document.getElementsByClassName("cardBox");
const rooCss=document.querySelector(':root');
const card=document.getElementById("card");
const upp=document.querySelector(".upperCard");
const mid=document.querySelector(".middleCard");
const und=document.querySelector(".underCard");
let timer= setTimeout(createCard, 10000);
let temp=0;
let cardS, cardN;
function createCard() {
    hoverCard();
    setTimeout(()=>{
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
    }, 200);
}
function cuentaAtras10Seg() {//Temporizador de 10 segundos 
    clearTimeout(timer);
    clearInterval(temp);
    let num=9;
    temp= setInterval(()=>{document.querySelector(".temp").innerHTML=num;num--;},1000);
    timer = setTimeout(createCard, 10000);
}
function addAleatory(arr) {
    return arr[Math.floor(Math.random() *arr.length)];
}
function hoverCard() {
    document.querySelector(".front").style.transform="rotateY(-180deg)";
    document.querySelector(".back").style.transform="rotateY(0deg)";
    setTimeout(()=>{
        document.querySelector(".front").style.transform="rotateY(0deg)";
        document.querySelector(".back").style.transform="rotateY(-180deg)";
        document.querySelector(".front").style.transform="";
        document.querySelector(".back").style.transform="";
    }, 600);
}
function cambiarEstilo() {
    hoverCard();
    setTimeout(()=>{
        /*spa.style.width="";
        spa.style.height="";
        cardB[0].style.height="25rem";
        cardB[1].style.height="25rem";*/
        //spa.parentElement.style.width="";
        cardB[0].style.width="16.8rem";
        cardB[1].style.width="16.8rem";
        spa.style.paddingLeft="";
        rooCss.style.setProperty("--widChange", "8.5rem");
        rooCss.style.setProperty("--heiChange", "25rem");
        if (isSecondStyle) {
            card.style.fontSize ="7rem";
            mid.style.paddingBottom= "0rem";
            document.getElementsByClassName('Inp')[0].value = "";
            document.getElementsByClassName('Inp')[1].value = "";
            mid.innerHTML = cardN.num;

            isSecondStyle=false;
        } else {
            rooCss.style.setProperty("--widChange", "8.5rem");
            rooCss.style.setProperty("--heiChange", "25rem");
            card.style.fontSize ="27.59rem";
            mid.style.paddingBottom= "3.5rem";
            mid.innerHTML = cardN.estiloB[cardS.indice];
            document.getElementsByClassName('Inp')[0].value = "";
            document.getElementsByClassName('Inp')[1].value = "";
            isSecondStyle=true
        }
    }, 200);
}
document.getElementsByClassName('Inp')[0].addEventListener('change',(e)=>{
    let firWid = cardB[0].style.width;
    //spa.parentElement.style.width=e.target.value;
    rooCss.style.setProperty("--widChange", e.target.value);
    spa.style.paddingLeft= e.target.value;
    cardB[0].style.width= e.target.value;
    cardB[1].style.width= e.target.value;
    if(firWid!==cardB[0].style.width){
        alert("😡¡¡¡ME HAS DESMONTADO TODO EL ESTILO DE LA CARTA!!! 🤯 Con lo que me ha costado todo este css 😭");
        document.getElementsByClassName('Inp')[0].value = "";
    }else{
        alert("No se ha cambiado el width. Prueba ha meter con una sintaxis similar a 13rem");
        cardB[0].style.width="16.8rem";
        cardB[1].style.width="16.8rem";
        spa.style.paddingLeft="";
        rooCss.style.setProperty("--widChange", "8.5rem");
        document.getElementsByClassName('Inp')[0].value = "";
    }
});
document.getElementsByClassName('Inp')[1].addEventListener('change',(e)=>{
    let firHei =  cardB[0].style.height; //getComputedStyle(rooCss).getPropertyValue("--heiChange");
    cardB[0].style.height= e.target.value;
    /*rooCss.style.setProperty("--heiChange", e.target.value);
    if(firHei!==getComputedStyle(rooCss).getPropertyValue("--heiChange")){*/
    if(firHei!==cardB[0].style.height){
         cardB[0].style.height= "";
        rooCss.style.setProperty("--heiChange", e.target.value);
        alert("😡¡¡¡ME HAS DESMONTADO TODO EL ETILO DE LA CARTA!!! 🤯 Con lo que me ha costado todo este css 😭");
        document.getElementsByClassName('Inp')[1].value = "";
    }else{
        cardB[0].style.height= "";
        rooCss.style.setProperty("--heiChange", "25rem");
        alert("No se ha cambiado el height. Prueba ha meter con una sintaxis similar a 23rem");
        document.getElementsByClassName('Inp')[1].value = "";
    }
});
createCard();