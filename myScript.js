//variables for buttons
var start=document.querySelector(".btn1")
var stop=document.querySelector(".btn2")
var reset=document.querySelector(".btn3")

//variables for time
var second=document.querySelector(".sec")
var minute=document.querySelector(".mins")
var hour=document.querySelector(".hrs")


//logic
var hrs=0;
var mins=0;
var sec=0;


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

    timeInterval=setInterval(changeTime,100)
}
start.addEventListener('click',runTime);

function stopTime(){
    clearInterval(timeInterval);
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
var dec = sec - Math.floor(sec);
sec = sec - dec;
var sec = ("0" + sec).slice(-2) + dec.toString().substr(1);

}