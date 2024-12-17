<!DOCTYPE HTML>
<html>
<head>
<style>
#chessboard {
    width: 800px;
    height: 800px;
    display: '';
}
.chess-square {
    float: left;
    width: 100px;
    height: 100px;
    background-color: #fff;
}
.brook {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/br.png");
}
.bking {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/bk.png");
}
.bknight {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/bn.png");
}
.bpawn {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/bp.png");
}
.bqueen {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/bq.png");
}
.bbishop {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/bb.png");
}
.wking {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/wk.png");
}
.wqueen {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/wq.png");
}
.wrook {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/wr.png");
}
.wbishop {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/wb.png");
}
.wknight {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/wn.png");
}
.wpawn {
    background-image: url("https://www.chess.com/chess-themes/pieces/neo/150/wp.png");
}
.piece {
     background-size: 100%;
     cursor: grab;
     overflow: hidden;
     will-change: transform;
}
#hint {
     background-color: white;
     border: 1px solid;
     border-radius: 5px;
     width: 600px;
     height: 200px;
     text-align: center;
     font-size: 24px;
}
#next_puzzle {
     background-color: #f3ee77;
     width: 600px;
     height: 200px;
     font-size: 24px;
}
</style>
<script>
function calcColor(sq) {
     var alphabet = 'abcdefgh';
     var j = alphabet.indexOf(sq[0]);
     var i = 8 - sq[1];
  // console log(i, j);
     if ( (i+j) % 2 == 1) {
        return 'green';
     } else return 'yellow';
}
function raiseError(err) {
     document.getElementById('notes').removeAttribute('hidden');
     document.getElementById('notes').innerHTML = "<span style='color: red'>" + err + "</span>";
}
function raiseSuccess(msg) {
     document.getElementById('notes').removeAttribute('hidden');
     document.getElementById('notes').innerHTML = "<span style='color: green'>" + msg + "</span>";
}
function checkMove(move) {
      var piece_arr = {
         "K" : "wking",
         "Q" : "wqueen",
         "R" : "wrook",
         "B" : "wbishop",
         "N" : "wknight",
         "P" : "wpawn",
         "q" : "bqueen",
         "r" : "brook",
         "b" : "bbishop",
         "n" : "bknight",
         "p" : "bpawn",
         "k" : "bking"

     };
     if (solution[x_puzzle_len].slice(0, 4) != move) {
         raiseError('Invalid move');
         return 0;
     };
     if (x_puzzle_len > 0) {
         var m = solution[x_puzzle_len - 1];
         document.getElementById('sq_' + m[0] + m[1]).style.backgroundColor = calcColor(m[0] + m[1]);
         document.getElementById('sq_' + m[2] + m[3]).style.backgroundColor = calcColor(m[2] + m[3]);
     }
     var s2 = document.getElementById('sq_' + move[2] + move[3]);
     var s1 = document.getElementById('sq_' + move[0] + move[1]);
     varp = '';
     if (solution[x_puzzle_len].length == 5) {
         p = solution[x_puzzle_len][4];
         guess = prompt('What piece do you want to promote the pawn to?').toUpperCase();
         if (p != guess) {
             raiseError('Invalid move');
             return 0;
         };
// console.log(s2.className, s1.className, s1.className.split('piece ')[1], piece_arr[p])
         s2.className = "chess-square piece " + piece_arr[p];
         console.log(s2.className);
     } else s2.className = s1.className;
     s1.className = 'chess-square';
     x_puzzle_len++;
     if (x_puzzle_len >= solution.length) {
         s2.style.backgroundColor = "blue";
         s1.style.backgroundColor = "blue";
         raiseSuccess('You solved the problem!');
         return 1;
     } else raiseSuccess('This is the right move, keep going!');
     m = solution[x_puzzle_len];
     var s2 = document.getElementById('sq_' + m[2] + m[3]);
     var s1 = document.getElementById('sq_' + m[0] + m[1]);
     varp = '';
     if (m.length == 5) {
         p = m[4];
         s2.className = "chess-square piece " + piece_arr[p];
     } else s2.className = s1.className;
     s1.className = 'chess-square';
     s2.style.backgroundColor = 'blue';
     s1.style.backgroundColor = 'blue';
     x_puzzle_len++;
     return 1;

}
function makeMove(sq) {
    if(!buffer) {
        console.log(sq);
        if (document.getElementById('sq_' + sq).className == 'chess-square') {
            raiseError('Moves can only be made with pieces');
            return;
        };
        buffer=sq;
        document.getElementById('sq_' + sq).style.backgroundColor = 'red';
        return;
    } else if (buffer == sq) {
        document.getElementById('sq_' + buffer).style.backgroundColor = calcColor(buffer);
        buffer = '';
        return;
    };
    var s1 = document.getElementById('sq_' + buffer);
    var s2 = document.getElementById('sq_' + sq);
    s1.style.backgroundColor = calcColor(buffer);
    checkMove(buffer + sq);
    buffer = '';
    return;
}
function setPosition(fen) {
     var line = 8;
     var file = 0;
     var piece_arr = {
         "K" : "wking",
         "Q" : "wqueen",
         "R" : "wrook",
         "B" : "wbishop",
         "N" : "wknight",
         "P" : "wpawn",
         "q" : "bqueen",
         "r" : "brook",
         "b" : "bbishop",
         "n" : "bknight",
         "p" : "bpawn",
         "k" : "bking"

     };
     var alphabet = 'abcdefgh';
     for (var i = 0; i < fen.length; i++) {
         if (fen[i] == '/') continue;
         if (fen[i] == ' ') break;
         if (fen[i] - 0 == fen[i]) {
             let n = fen[i] - 0;
             line = line - (Math.floor((file + n)/8));
             file = (file + n) % 8;
         } else {
             let id = 'sq_' + alphabet[file] + line;
             document.getElementById(id).className = 'chess-square piece ' + piece_arr[fen[i]];
             line = line - (Math.floor((file + 1)/8));
             file = (file + 1) % 8;
         };
     }
}
function createBoard() {
    var alphabet = 'abcdefgh';
    var chessboard = document.getElementById('chessboard');
    for (var i = 0; i < 8; i++) {
       for (var j = 0; j < 8; j++) {
          var chessSquare = document.createElement('div');
          chessSquare.className = 'chess-square';
          if ((i + j) % 2 == 1) {
             chessSquare.style.backgroundColor = 'green';
          } else {
             chessSquare.style.backgroundColor = 'yellow';
          }
          chessSquare.setAttribute('id', 'sq_' + alphabet[j] + (8 - i));
          chessSquare.setAttribute('onclick', 'makeMove("' + alphabet[j] + (8 - i) + '")');
          chessboard.appendChild(chessSquare);
       }
    }
}
function resetBoard() {
     var alphabet = 'abcdefgh';
     for (var i = 0; i < 64; i++) {
         let id = 'sq_' + alphabet[i%8] + (8 - Math.floor(i/8));
         document.getElementById(id).className = 'chess-square';
         document.getElementById(id).style.backgroundColor = calcColor(alphabet[i%8] + (8 - Math.floor(i/8)));
     };
     buffer = '';
     x_puzzle_len = 0;
}
function loadAllPuzzles() {
     var req = new XMLHttpRequest();
     req.open("GET", "/puzzles.json", false);
     req.send();
     arr = JSON.parse(req.responseText);
}
const removeObj = (arr, id) => {
    const requiredIndex = arr.findIndex(el => {
       return el.id === String(id);
    });
    if(requiredIndex === -1){
       return false;
    };
    return !!arr.splice(requiredIndex, 1);
};
function loadNextPuzzle() {
     resetBoard();
     if (arr.length == 0) {
         alert("Congratulations! You have solved all available problems! Come back tomorrow for new ones!");
         return;
     }
     console.log(arr);
     var puzzle = arr[Math.floor(Math.random() * arr.length)];
     solution = puzzle.solution;
     document.getElementById("number").innerText = puzzle.id;
     document.getElementById("goal").innerText = puzzle.goal;
     setPosition(puzzle.position);
     removeObj(arr, puzzle.id);
}
</script>
</head>
<body>
<br><br>

<div style='display: flex'>

<div id="chessboard"></div>
<div style='padding-left: 10%'>
<p style='font-size: 18px'>Task #<b id='number'></b></p>
<div style='height: 100px'></div>
<button id='next_puzzle' onclick='loadNextPuzzle()'>Load new puzzle</button>
<div style='height: 100px'></div>
<div id='hint'>
<br>
<p style='font-size: 20px'>Goal: <b id='goal'></b></span>
<div id='notes' style='font-size: 24px' hidden></div>
</div>
</div>

</div>

<script>
    var solution, buffer, x_puzzle_len, arr;
    x_puzzle_len = 0;
    createBoard();
    loadAllPuzzles();
    loadNextPuzzle();
</script>

</body>
</html>