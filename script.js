const btnCont=document.querySelector(".btn-container");
const time=document.querySelector(".para");
let seconds=0;
let minutes=0;
let hours=0;
let timerId;
function displayTime(hours,minutes,seconds){
    time.innerText=`${hours > 9? `${hours}`:`0${hours}`}:${minutes > 9 ? `${minutes}`:`0${minutes}`}:${seconds > 9 ? `${seconds}`:`0${seconds}`}`;
}
function handleFunction(event){
    const button=event.target.name;
    if(button=='start'){
        timerId=setInterval(()=>{
            seconds++;
            if(seconds > 59){
                minutes++;
                seconds=0;
                if(minutes > 59){
                    hours++;
                    minutes=0;
                }
            }
            displayTime(hours,minutes,seconds);
        },1000);
    }
    if(button=='stop'){
        clearInterval(timerId);

    }
    if(button=='reset'){
        clearInterval(timerId);
        hours=0;
        minutes=0;
        seconds=0;
        displayTime(0,0,0);
    }
}

btnCont.addEventListener("click",handleFunction);