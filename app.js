var items = document.getElementsByClassName("cell");
var movePlayer = true;
var game = true;
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
        var collecion = document.querySelectorAll(".cell:not(.active)");
        if (!this.classList.contains("active")) {
            if (movePlayer) {
                if (this.innerHTML == "") {
                    this.classList.add("active");
                    this.classList.add("active_x");
                    this.innerHTML = "x";
                }
                var result = checkMap();
				console.log(result);
                if (result.val) {
                    game = false;
                    setTimeout(function () {
                        exit(result);
                    }, 10);
                }
                movePlayer = !movePlayer;
            }
            if (game) {
                setTimeout(function () {
                    botMove();
                }, 200);
            };
        }
    });
}
function getBestMove(board) {
	if (board[4] == '') return 4;
	if ((board[0] == board[1]) && (board[2] == '')) return 2;
	if ((board[3] == board[4]) && (board[5] == '')) return 5;
	if ((board[6] == board[7]) && (board[8] == '')) return 8;
	if ((board[0] == board[4]) && (board[8] == '')) return 8;
	if ((board[6] == board[4]) && (board[2] == '')) return 2;
	if ((board[0] == board[3]) && (board[6] == '')) return 6;
	if ((board[1] == board[4]) && (board[7] == '')) return 7; 
	if ((board[2] == board[5]) && (board[8] == '')) return 8;
	var free = [];
	for (var i = 0; i < board.length; i++) {
		if (!board[i]) free.push(i);
	};
	return free[getRandomInt(free.length)];
}

function botMove() {
//    var items = document.querySelectorAll(".cell:not(.active)");
//    var step = getRandomInt(items.length);
	var items = document.querySelectorAll(".cell");
    var board = [];
    for (var i = 0; i < items.length; i++) {
        board.push(items[i].innerHTML);
    }

	var step = getBestMove(board);
    items[step].innerHTML = "0";
    items[step].classList.add("active");
    items[step].classList.add("active_o");
    var result = checkMap();
    if (result.val) {
        setTimeout(function () {
            exit(result);
        }, 1);
    }
    movePlayer = !movePlayer;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function checkMap() {
    var block = document.querySelectorAll(".cell");
    var items = [];
    for (var i = 0; i < block.length; i++) {
        items.push(block[i].innerHTML);
    }

    if (items[0] == "x" && items[1] == 'x' && items[2] == 'x' ||
        items[3] == "x" && items[4] == 'x' && items[5] == 'x' ||
        items[6] == "x" && items[7] == 'x' && items[8] == 'x' ||
        items[0] == "x" && items[3] == 'x' && items[6] == 'x' ||
        items[1] == "x" && items[4] == 'x' && items[7] == 'x' ||
        items[2] == "x" && items[5] == 'x' && items[8] == 'x' ||
        items[0] == "x" && items[4] == 'x' && items[8] == 'x' ||
        items[6] == "x" && items[4] == 'x' && items[2] == 'x')
        return { val: true, win: "Игрок" }
    if (items[0] == "0" && items[1] == '0' && items[2] == '0' ||
        items[3] == "0" && items[4] == '0' && items[5] == '0' ||
        items[6] == "0" && items[7] == '0' && items[8] == '0' ||
        items[0] == "0" && items[3] == '0' && items[6] == '0' ||
        items[1] == "0" && items[4] == '0' && items[7] == '0' ||
        items[2] == "0" && items[5] == '0' && items[8] == '0' ||
        items[0] == "0" && items[4] == '0' && items[8] == '0' ||
        items[6] == "0" && items[4] == '0' && items[2] == '0')
        return { val: true, win: "Бот" }

	if (!items.includes("")) return { val: true, win: "Никто не" }

    return { val: false }
}
function exit(obj) {
    alert(obj.win + " победил!");
    window.location.reload();
};