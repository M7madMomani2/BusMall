'use strict';
let randomItem1;
let randomItem2;
let randomItem3;
let maximumClicks = 25;
let attempts=0;
let arrayOfItems=[];
let container =document.getElementById('container');

let Elimg1=document.createElement('img');
Elimg1.setAttribute("id", "Elimg1");

let Elimg2=document.createElement('img');
Elimg2.setAttribute("id", "Elimg2");

let Elimg3=document.createElement('img');
Elimg3.setAttribute("id", "Elimg3");

Elimg1.addEventListener('click', handleClicking);
Elimg2.addEventListener('click', handleClicking);
Elimg3.addEventListener('click', handleClicking);

let index ;

function MullItem(name , source)
{
    this.name =name;
    this.source=source;
    this.show=0;
    this.votes =0;
    arrayOfItems.push(this);

}

function runder (){
    index =randomItem();
    Elimg1.setAttribute('src', arrayOfItems[index[0]].source); 
    arrayOfItems[index[0]].show++;
    Elimg2.setAttribute('src', arrayOfItems[index[1]].source);
    arrayOfItems[index[1]].show++;
    Elimg3.setAttribute('src', arrayOfItems[index[2]].source);
    arrayOfItems[index[2]].show++;
    container.appendChild(Elimg1);
    container.appendChild(Elimg2);
    container.appendChild(Elimg3);
}

function randomItem(){
    randomItem1=randomNum();
    randomItem2=randomNum();
    randomItem3=randomNum();
    while(randomItem1===randomItem2||randomItem1===randomItem3)
    {
        randomItem1=randomNum();
    }
    while(randomItem2===randomItem1||randomItem2===randomItem3)
    {
        randomItem2=randomNum();
    }
    console.log(`rand1 ${randomItem1} :rand2 ${randomItem2} :rand3 ${randomItem3} : `)
    return [randomItem1,randomItem2,randomItem3];
}


function randomNum(){
    return Math.floor(Math.random() *arrayOfItems.length);
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
        console.log(arrayOfItems);
    }else{

        let unorderdList = document.createElement('ul');
        container.appendChild(unorderdList);
        let li;
        for(let i = 0 ; i < arrayOfItems.length; i++){
            li = document.createElement('li');
            unorderdList.appendChild(li);          
            li.textContent = `${arrayOfItems[i].name} : it has | ${arrayOfItems[i].votes} Votes |${arrayOfItems[i].show} shown to user `;
        }
        Elimg1.removeEventListener('click', handleClicking);
        Elimg2.removeEventListener('click', handleClicking);
        Elimg3.removeEventListener('click', handleClicking);  
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

runder();