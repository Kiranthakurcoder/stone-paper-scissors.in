let userscore=0;
let compscore=0;
let drwaasocore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const drwaascorepara = document.querySelector("#drwaa-score");


const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
       userscore++;
       userscorepara.innerText=userscore;
        console.log("you win")
        msg.innerText=`You Win!! You ${userchoice} bets ${computerchoice}`
        

    }else
    {
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose")
        msg.innerText=`You Loss ${computerchoice} bets ${userchoice}`
    };
}



const drwaa=()=>{
    drwaasocore++;
    drwaascorepara.innerText=drwaasocore;

    console.log("the is game drwaa")
    msg.innerText="Game Is Draw"
}




const gencompchoice = () =>{
    const options=["rock","paper","sicior"];
    const randidx = Math.floor(Math.random() *3 );
    return options[randidx];

}


const playgame = (userchoice) =>{
    console.log("user coice val=",userchoice)
    const computerchoice= gencompchoice();
    console.log("computer choice=", computerchoice);

    if(userchoice === computerchoice){
        drwaa();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper" ? false:true;
        }else if(userchoice === "paper"){
            userwin = computerchoice === "sicior" ? false:true;
        }else{
            userwin = computerchoice === "rock" ? false:true;
        }
        showwinner(userwin,userchoice,computerchoice)
    }
}
        
choices.forEach((choice) => {
choice.addEventListener( "click", () => {
const userchoice=choice.getAttribute("id")
playgame(userchoice);

})


})