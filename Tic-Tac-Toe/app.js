let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msg= document.querySelector("#msg");
let msgContainer= document.querySelector(".msg-container");
let count=0;
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true; //Let First Player is O

resetBtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.style.backgroundColor="#ffffc7";
    }
    msgContainer.classList.add("hide");
    boxEnabled();
    count=0;
    turnO=true;
})

newGameBtn.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        box.style.backgroundColor="#ffffc7";
    }
    msgContainer.classList.add("hide");
    boxEnabled();
    count=0;
    turnO=true;
})

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //PlayerO turn
      box.innerText = "O";
      box.style.color="red";
      turnO = false;
    } else {
        //PlayerX turn
        box.style.color="black";
        box.innerText = "X";
        turnO = true;
    }
    box.disabled=true;
    checkWinner();
  });
});

const boxDisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const boxEnabled=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const showWinner=(winner,pattern)=>{
    for(let i of pattern){
        boxes[i].style.backgroundColor="#52b70e";
    }
    boxDisabled();
    msg.innerText=`Congratulations, Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    count=0;
}

const drawGame=()=>{
    boxDisabled();
    msg.innerText=`Match is Draw`;
    msgContainer.classList.remove("hide");
    count=0;
}

const checkWinner= ()=>{
    count++;
    for(let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1===pos2 && pos2===pos3 && pos1!=="" && pos2!=="" && pos3!==""){
            showWinner(pos1,pattern);
            return;
        }
    }
    if(count===9){
        drawGame();
    }
}
