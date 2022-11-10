let turn = "X";
let audioTurn = new Audio("ting.mp3")
//function to reset the game
reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    document.getElementsByClassName("info")[0].style.backgroundColor="";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    let turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
    document.getElementsByClassName("line")[0].style.width="0vw";

})

//function to change turns
function changeturn() {
    if (turn == "X") {
        turn = "O";
    }
    else {
        turn = "X";
    }
    return turn;
}
// winlogic

function checkwin() {
    let gameover = false;
    let wins = [
        [0, 1, 2, 2.7, -24, 0],
        [3, 4, 5, 2.7, -14, 0],
        [6, 7, 8, 2.7, -4,0],
        [0, 3, 6, -8, -14, 90],
        [1, 4, 7, 2, -14, 90],
        [2, 5, 8, 12, -14, 90],
        [0, 4, 8, 3, -14, 45],
        [2, 4, 6, 3, -14, 135]
    ]

    let boxtexts = document.getElementsByClassName('boxtext');
    wins.forEach((e) => {
        //(boxtexts[e[0]].innerText != ""): this condition is also checked as initially all boxtexts will be empty so it will say empty wins.so that should not happen
        if ((boxtexts[e[0]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText != "")) {
            gameover = true;
            document.getElementsByClassName("info")[0].style.backgroundColor="#00FF00";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.getElementsByClassName("info")[0].innerText = turn + " wins";
            document.getElementsByClassName("line")[0].style.width="25vw";
            document.getElementsByClassName("line")[0].style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
    return gameover;
}
//main logic 

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((elem) => {
    elem.addEventListener("click", () => {
        let boxtext = elem.querySelector(".boxtext");
        if (boxtext.innerHTML == "") {
            boxtext.innerHTML = turn;
            audioTurn.play()
            let gameover=checkwin();
            if(gameover==false){  
                turn = changeturn()
                document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
            }
        }
    })


})
