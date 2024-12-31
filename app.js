let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-game");


let trunO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    trunO = true;
    enableBox();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (trunO) {
            box.innerText = "O";
            trunO = false;
        }
        else {
            box.innerText = "X";
            trunO = true;
            ChekWinner();
        }
        box.disabled = true;
        ChekWinner();
    });

});

const disabledBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBox();

};
const ChekWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner");
                showWinner(pos1Val);
            }
        }
    }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
