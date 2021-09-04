
const hourHand=document.querySelector('.hour');
const secondHand=document.querySelector('.second');
const minuteHand=document.querySelector('.minute');
const setClock =()=>{
    const currentDate= new Date();
    const secondsRatio=currentDate.getSeconds()/60;    
    const minutesRatio=((secondsRatio+currentDate.getMinutes())/60);    
    const hoursRatio=((minutesRatio+currentDate.getHours())/12);
    setRotation(hourHand,hoursRatio);
    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotations',rotationRatio*360);
}
setClock();
setInterval(setClock,1000);