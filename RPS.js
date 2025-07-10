let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#result");
let user=document.querySelector("#yourscore");
let comp=document.querySelector("#compscore");

function getcompchoice(){
    let options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}

function wincheck(userchoice,compchoice){
    let win=true;
    if(userchoice==="rock"){
        if(compchoice==="paper"){
            win=false;
        }
        else{
            win=true;
        }
    }
    else if(userchoice==="paper"){
        if(compchoice==="scissors"){
            win=false;
        }
        else{
            win=true;
        }
    }
    else{
        if(compchoice==="rock"){
            win=false;
        }
        else{
            win=true;
        }
    }
    return win;
    
}
function playgame(userchoice){
    let compchoice=getcompchoice();
    if(userchoice===compchoice){
        msg.innerText="It's a Draw";
        msg.style.backgroundColor="rgb(119, 62, 62)";
    }
    else{
        let check=wincheck(userchoice,compchoice);
        if(check===true){
            userscore++;
            user.innerText=userscore;
            msg.innerText=`You Won. Your ${userchoice} beats ${compchoice}`;
            msg.style.backgroundColor="green";
        }
        else{
            compscore++;
            comp.innerText=compscore;
            msg.innerText=`You Lose. ${compchoice} beats your ${userchoice}`;
             msg.style.backgroundColor="red";
        }

    }
    return compchoice;
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=> {
        const userchoice=choice.getAttribute("id");
        let compchoice=playgame(userchoice);
        console.log("your choice is",userchoice);
        console.log("computer choice is ",compchoice)
    })
})