//letiables for buttons
let start=document.querySelector(".btn1")
let stop=document.querySelector(".btn2")
let reset=document.querySelector(".btn3")

//letiables for time
let second=document.querySelector(".sec")
let minute=document.querySelector(".mins")
let hour=document.querySelector(".hrs")


//logic
let hrs=0;
let mins=0;
let sec=0;
let timeInterval=undefined;

second.textContent=sec;
minute.textContent=mins;
hour.textContent=hrs;
function changeTime(){
    if(sec<60){
    
    second.textContent=sec+1;
    sec++;
    
    }
    else{
        sec=0;
        second.textContent=sec;
       
        if(mins<60){
            minute.textContent= mins+1;
            mins++;
        }
        else{
            mins=0;
            minute.textContent=mins;
            if(hrs<24){
                hour.textContent= hrs+1;
                hrs++;
            }
            else{
                hrs=0;
                hour.textContent=hrs;}

        }
    }

}

function runTime(){
    console.log({timeInterval});
    if(!timeInterval){
        timeInterval=setInterval(changeTime,100)
    }
}
start.addEventListener('click',runTime);

function stopTime(){
    clearInterval(timeInterval);
    timeInterval = undefined;
}
stop.addEventListener('click',stopTime);



reset.addEventListener('click',clearAll)

function clearAll(){
    clearInterval(timeInterval);
    mins=0;
    sec=0;
    hrs=0;
    second.textContent=sec;
    minute.textContent=mins;
    hour.textContent=hrs;

}



if(sec>10){
let dec = sec - Math.floor(sec);
sec = sec - dec;
let sec = ("0" + sec).slice(-2) + dec.toString().substr(1);

}