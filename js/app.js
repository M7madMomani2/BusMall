'use strict';
let randomItem1;
let randomItem2;
let randomItem3;
let maximumClicks = 25;
let attempts=0;
let arrayOfItems=[];
let datavoite=[];
let datashowen=[];
let dataName=[];
let index ;
let counterlode=0;
let previousindex=[];
let container =document.getElementById('container');
let ulElDiv =document.getElementById('ulist');

let Elimg1=document.createElement('img');
Elimg1.setAttribute("id", "Elimg1");

let Elimg2=document.createElement('img');
Elimg2.setAttribute("id", "Elimg2");

let Elimg3=document.createElement('img');
Elimg3.setAttribute("id", "Elimg3");

Elimg1.addEventListener('click', handleClicking);
Elimg2.addEventListener('click', handleClicking);
Elimg3.addEventListener('click', handleClicking);

let btEl= document.createElement('button');
btEl.innerHTML = "View Results";
btEl.addEventListener('click',myFunction);


function MullItem(name , source)
{
    this.name =name;
    this.source=source;
    this.show=0;
    this.votes =0;
    arrayOfItems.push(this);
    dataName.push(name);
}

function randomItem(){
    randomItem1=randomNum();
    randomItem2=randomNum();
    randomItem3=randomNum();
    while(randomItem1===randomItem2||randomItem1===randomItem3||randomItem2===randomItem3||previousindex.includes(randomItem1)||previousindex.includes(randomItem2) ||previousindex.includes(randomItem3))
    {
        randomItem2=randomNum();
        randomItem3=randomNum();
        randomItem1=randomNum();
    }
    return [randomItem1,randomItem2,randomItem3];
}

function randomNum(){
    return Math.floor(Math.random() *arrayOfItems.length);
}

function runder (){
    index =randomItem();
    Elimg1.setAttribute('src', arrayOfItems[index[0]].source); 
    Elimg2.setAttribute('src', arrayOfItems[index[1]].source);
    Elimg3.setAttribute('src', arrayOfItems[index[2]].source);
    arrayOfItems[index[0]].show++;
    arrayOfItems[index[1]].show++;
    arrayOfItems[index[2]].show++;    
    console.log(`index1  = ${index[0]}\nindex2  = ${index[1]} \nindex3 = ${index[2]} \npreviousindex1 = ${previousindex[0]} \npreviousindex2 =  ${previousindex[1]} \npreviousindex3 = ${previousindex[2]} `)
    previousindex[0]=index[0];
    previousindex[1]=index[1];
    previousindex[2]=index[2];
    container.appendChild(Elimg1);
    container.appendChild(Elimg2);
    container.appendChild(Elimg3);
}

function handleClicking(event){
    attempts++;
    if(attempts < maximumClicks){
        if(event.target.id === 'Elimg1'){
            arrayOfItems[index[0]].votes++;
        }
        else if(event.target.id === 'Elimg2')
        {
            arrayOfItems[index[1]].votes++;
            
        }
        else{
            arrayOfItems[index[2]].votes++;
        }

        runder();
    }else{       
        container.appendChild(btEl);
        if(counterlode==0){
            for(let i = 0 ; i < arrayOfItems.length; i++){
                datavoite.push(arrayOfItems[i].votes);
                datashowen.push(arrayOfItems[i].show);        
            }

        }
        else{
            for(let i = 0 ; i < arrayOfItems.length; i++){
                datavoite[i]+=(arrayOfItems[i].votes);
                datashowen[i]+=(arrayOfItems[i].show);        
            }
        }
        
    }   
}

function myFunction(){
    savedData();
    btEl.style.visibility = "hidden";
    document.getElementById("myChart").style.border = "3px solid #2b0b1d";
    chartGo();
    let unorderdList = document.createElement('ul');
    ulElDiv.appendChild(unorderdList);
    let li;
    for(let i = 0 ; i < arrayOfItems.length; i++){
        li = document.createElement('li');
        unorderdList.appendChild(li);          
        li.textContent = `${arrayOfItems[i].name} : it has | ${datavoite[i]} Votes |${datashowen[i]} shown to user `;
    }

if(attempts>=25){
    Elimg1.removeEventListener('click', handleClicking);
    Elimg2.removeEventListener('click', handleClicking);
    Elimg3.removeEventListener('click', handleClicking);
    btEl.removeEventListener('click',myFunction)
  
}
}

function chartGo(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dataName,
        datasets: [{
            label: 'datashowen',
            backgroundColor: 'rgb(255, 99, 132,0.3)',
            borderColor: '#f1f1f1',
            data: datashowen
        },      
        {
            label: 'datavoite',
            backgroundColor: '#160415',
            borderColor: '#f1f1f1',
            data: datavoite
        }]
    },

    options: {}
});}


function savedData(){
    counterlode++;
    let counterLode1 = JSON.stringify(counterlode);
    localStorage.setItem('Clode', counterLode1);
    let data = JSON.stringify(datashowen);
    localStorage.setItem('Dshowen', data);
    let data2 = JSON.stringify(datavoite);
    localStorage.setItem('Dvoite', data2);
    console.log("save done")


  }
  function clearLocalStorage(){
    localStorage.clear();
}
  function getData(){
    let gettingData = localStorage.getItem('Dshowen');
    let gettingData2 = localStorage.getItem('Dvoite');
    let list1 = JSON.parse(gettingData);
    let list2 = JSON.parse(gettingData2);
    if(list1){
      counterlode=JSON.parse(localStorage.getItem('Clode'));
      datashowen = list1;
      datavoite=list2;
    }else{
        datashowen = [];
        datavoite=[];
        }
    }

new MullItem('GOBLIN' , 'https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/cthulhu.jpg' );
new MullItem('BAG','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/bag.jpg' );
new MullItem('BANANA','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/banana.jpg' );
new MullItem('WC','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/bathroom.jpg' );
new MullItem('SHOES','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/boots.jpg' ); 
new MullItem('MEATBALL','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/bubblegum.jpg' ); 
new MullItem('CHAIR','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/chair.jpg' ); 
new MullItem('PET-SWEEP','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/pet-sweep.jpg' ); 
new MullItem('SCISSORS','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/scissors.jpg' ); 
new MullItem('USB','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/usb.gif' ); 
new MullItem('WATER-CAN','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/water-can.jpg' ); 
new MullItem('WINE-GLASS','https://raw.githubusercontent.com/LTUC/amman-201d14/main/class-11/lab/assets/wine-glass.jpg' ); 
getData();
runder();

