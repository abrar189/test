'use strict';

let formEl= document.getElementById('form');
let tableEl = document.getElementById('table');

function Dilevery(value){
  if (value<=50){
    return '2jd ';
  }else if(value> 50) {
    return 'free';
  }

}

let flowerArray=[];
function Flower(flowerName ,quantity, price, img ,dilevery){
  this.flowerName =flowerName;
  this.quantity =quantity;
  this.price = price;
  this.img='img/'+img ;
  this.dilevery= dilevery;
  flowerArray.push(this);

  settingItem ();
}
let flowerImg=['download (1).jpg','download (2).jpg','download (3).jpg','download.jpg','images.jpg'];

function getRandom(max , min){
  return Math.floor(Math.random() * (max - min) ) + min;
}

function imgrandom(){
  return Math.floor(Math.random() * flowerImg.length);
}

formEl.addEventListener('submit',handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  let flowerName = event.target.flowerName.value;
  let quantity = event.target.quantity.value;
  let price = getRandom(20,100);
  let img = imgrandom();
  let dilevery= Dilevery(price);
  new Flower(flowerName ,quantity, price, flowerImg[img],dilevery);
  render();
}
let headerEl= document.createElement('thead');
let headerArray = ['Flower Name' ,'Quantity', 'Price', 'Photo','Dilevery'];
function headerRow(){

  tableEl.appendChild(headerEl);
  for (let i = 0; i < headerArray.length; i++) {
    let headRow= document.createElement('th');
    headerEl.appendChild(headRow);
    headRow.textContent=headerArray[i];
  }
}

headerRow();
let bodyEl =document.createElement('tbody');
tableEl.appendChild(bodyEl);

function render(){
  bodyEl.textContent = '';
  for (let i = 0; i < flowerArray.length; i++) {
    let tableRow= document.createElement('tr');
    bodyEl.appendChild(tableRow);

    let dataEl =document.createElement('td');
    tableRow.appendChild(dataEl);
    dataEl.textContent= `${flowerArray[i].flowerName}`;

    let dataEl1 =document.createElement('td');
    tableRow.appendChild(dataEl1);
    dataEl1.textContent= `${flowerArray[i].quantity}`;

    let dataEl2 =document.createElement('td');
    tableRow.appendChild(dataEl2);
    dataEl2.textContent= `${flowerArray[i].price}`;

    let dataEl3 =document.createElement('img');
    tableRow.appendChild(dataEl3);
    dataEl3.setAttribute('src',flowerArray[i].img);

    let dataEl4 =document.createElement('td');
    tableRow.appendChild(dataEl4);
    dataEl4.textContent= `${flowerArray[i].dilevery}`;

  }
}

function settingItem (){
  let data = JSON.stringify(flowerArray);
  localStorage.setItem('flowerArray',data);

}

function gettingItem(){
  let stringObj= localStorage.getItem('flowerArray');
  let normalObj =JSON.parse(stringObj);

  if (normalObj!== null) {

    flowerArray=normalObj;
  }
  render();
}
gettingItem();