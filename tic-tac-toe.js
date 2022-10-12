"use strict";

var board;
var playerO = "O";
var playerX = "X";
var currentplayer = playerX;
var game_end = false;

window.onload = function(){
    newGame();
}

function newGame(){
    board = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ];

    for (var i=0; i<3; i++){
        for (var m=0; m<3; m++) {
            var tile = document.createElement("div");
            tile.id = i.toString() + "-" + m.toString();
            tile.classList.add("tile");
            if (i==0 || i==1 || i==2){
                tile.classList.add("square");
            }
            if (m==0 || m==1 || m==2){
                tile.classList.add("square");
            }
            tile.addEventListener("click", getTile);
            document.getElementById("board").append(tile);
        }
    }

}

function getTile(){
    if (game_end){
        return;
    }

    var ntile = this.id.split("-");
    var i = parseInt(ntile[0]) ;
    var m = parseInt(ntile[1]);

    if(board[i][m] != ' '){
        return;
    }

    board[i][m] = currentplayer;
    this.innerHTML = currentplayer;

    if(currentplayer == playerX){
        currentplayer = playerO;
    }
    else{
        currentplayer = playerX;
    }
    checkWin();
}

for(var i=0; i<3; i++){
    var site = border[i];
   site.addEventListener('mouseover', function(e) {
       e.target.classList.add('hover');
     });
     
     site.addEventListener('mouseout', function(e) {
       e.target.classList.remove('hover');
     });  
} 

function changeplayer(){
    currentplayer = (currentplayer == playerX) ? playerO : playerX;
    return currentplayer;
}
function checkWin(){
    for (var i=0; i<3; i++){
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' '){
            for(var w=0; w<3; w++){
                var tile = document.getElementById(i.toString() + "-" + w.toString());
                var win = document.getElementById("status");
                win.classList.add("you-won");
                win.innerHTML = `Congatulations! ${changeplayer()} is Winner!`;
            }
            game_end= true;
            return;
        }
    }

    for (var m=0; m<3; m++){
        if (board[0][m] == board[1][m] && board[1][m] == board[2][m] && board[0][m]!= ' '){
            for(var w=0; w<3; w++){
                var tile = document.getElementById(i.toString() + "-" + w.toString());
                var win = document.getElementById("status");
                win.classList.add("you-won");
                win.innerHTML = `Congatulations! ${changeplayer()} is Winner!`;
            }
            game_end= true;
            return;
        }
    }    

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0]!= ' '){
        for(var w=0; w<3; w++){
            var tile = document.getElementById(i.toString() + "-" + w.toString());
            var win = document.getElementById("status");
            win.classList.add("you-won");
            win.innerHTML = `Congatulations! ${changeplayer()} is Winner!`;
        }
        game_end= true;
        return;
    }

    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2]!= ' '){
        var tile= document.getElementById("0-2");
        var win = document.getElementById("status");
        win.classList.add("you-won");
        win.innerHTML = `Congatulations! ${changeplayer()} is Winner!`;

        tile = document.getElementById("1-1");
        var win = document.getElementById("status");
        win.classList.add("you-won");
        win.innerHTML = `Congatulations! ${changeplayer()} is Winner!`;

        tile = document.getElementById("2-0");
        var win = document.getElementById("status");
        win.classList.add("you-won");
        win.innerHTML = `Congatulations! ${changeplayer()} is Winner!`;

        game_end= true;
        return;
    }
}

var restart = document.getElementsByClassName("btn");
restart.addEventListener("click", reset);

function reset(){
    for(var i=0; i<board.length; i++){
        board[i].innerHTML='';
        board[i].classList.remove("X");
        board[i].classList.remove("O");
    }
}