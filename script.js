let hourHand= document.getElementById("hrHand");
let minuteHand= document.getElementById("minHand");
let secondHand= document.getElementById("secHand");

setInterval(()=>{
    let date= new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourRotation=hours*30 + minutes/2;
    let minuteRotation=minutes*6;
    let secondRotation=seconds*6;

    hourHand.style.transform=`rotate(${hourRotation}deg)`
    minuteHand.style.transform=`rotate(${minuteRotation}deg)`
    secondHand.style.transform=`rotate(${secondRotation}deg)`
},1000)
