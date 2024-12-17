<?php include '../header.php' ?>
<?php
    $data = json_decode(file_get_contents("solutions/data.json"), true);
    $pending = json_decode(file_get_contents("pending.json"), true);
    $date = time();
    $result = [];
    if (array_key_exists($account, $pending)) {
        $date2 = $pending[$account]["time"];
        if ($date - $date2 <= 21600) {
            $id = $pending[$account]["task"];
            $info = $data[$id];
            $result["avtor"] = $info["avtor"];
            $result["rtg"] = $info["rtg"];
            $result["try"] = $info["try"];
            $result["success"] = $info["success"];
            $result["uslovie"] = $info["uslovie"];
            $result["t_given"] = 21600 - ($date - $date2);
            $result["id"] = $id + 1;
        } else {
            echo("Вы просрочили время для решения задачи. Пожалуйста, перезагрузите страницу, чтобы загрузить новую задачу.");
            unset($pending[$account]);
            file_put_contents("pending.json", json_encode($pending));
            exit;
        }
    } else {
        $task = array_rand($data, 1);
        $info = $data[$task];
        $result["avtor"] = $info["avtor"];
        $result["rtg"] = $info["rtg"];
        $result["try"] = $info["try"];
        $result["success"] = $info["success"];
        $result["uslovie"] = $info["uslovie"];
        $result["t_given"] = 21600;
        $result["id"] = $task + 1;
        $pending[$account] = ["task"=>$task, "time"=>$date];
        file_put_contents("pending.json", json_encode($pending));
    }
?>
<html>
<head>
<meta charset='utf-8'>
<title>Математика</title>
<style>
#tbl {
	width: 100%;
	font-size: 18px;
	border: 1px solid black;
}

#t2 {
	text-decoration: underline;
}

#t3 {
	color: grey;
}

</style>
<script>
function updateTime(x) {
	let sec = x%60;
	if (sec < 10) sec = "0" + sec;
	document.getElementById('sec').innerHTML = sec;
	
	let mn = Math.floor(x/60)%60;
	if (mn < 10) mn = "0" + mn;
	document.getElementById('min').innerHTML = mn;

	let h = Math.floor(x/3600);
	document.getElementById('hours').innerHTML = h;
	
	return x-1;
};

function getNewPuzzle(puzzle, id) {
	document.getElementById('t1').innerHTML = "№" + (id+1);
	document.getElementById('t2').innerHTML = puzzle["avtor"];
	document.getElementById('t3').innerHTML = puzzle["rtg"];
	document.getElementById('t4').innerHTML = puzzle["try"];
	document.getElementById('t5').innerHTML = puzzle["success"];
	document.getElementById('task').innerHTML = puzzle["uslovie"];
	setInterval(function () { x = updateTime(x); }, 1000);
	return 0;
};
</script>
</head>
<body style='background-color: #ddd'>
<br><br><br>
<div style='display: flex'>


<div style='width: 15%;'>

<table id='tbl'>
<tr><td>Задача</td><td id='t1'>(Произошла неизвестная ошибка)</td></tr>
<tr><td>Источник</td><td id='t2'>(Произошла неизвестная ошибка)</td></tr>
<tr><td>Рейтинг задачи</td><td id='t3'>(Произошла неизвестная ошибка)</td></tr>
<tr><td>Попыток решить</td><td id='t4'>(Произошла неизвестная ошибка)</td></tr>
<tr><td>Решена (кл-во раз)</td><td id='t5'>(Произошла неизвестная ошибка)</td></tr>
</table>

<br>

<div style='text-align: center; background-color: #eee'>
Ваш рейтинг:<br>
<b style='font-family: monospace; font-size: 28px'>?</b><sub><small>x ?</small></sub><br>
<small>Победа <span style='color: green'>+$$\tiny \infty$$</span> / Поражение <span style='color: red'>-$$\tiny \infty$$</span></small>
</div>

<br>

<div style='text-align: center; background-color: #eee'>
Осталось времени на решение:<br>
<span style='font-family: monospace; font-size: 28px'><b id='hours'>6</b><small>ч</small>:<b id='min'>00</b><small>мин</small>:<b id='sec'>00</b><small>сек</small></span>
</div>

</div>

<div style='width: 60%; margin-left: 10%; margin-right: 10%'>
<div style='font-size: 24px'>
<p id='task'>Произошла неизвестная ошибка</p>
</div>
<br>
<div style='text-align: left'>
<form method='POST' action='check.php'>
Ваш ответ:<br>
<input style='width: 100%; font-size: 20px; font-family: monospace' name='ans'><br><br>
Добавить решение (необязательно):<br>
<textarea style='width: 100%; height: 300px; font-size: 18px; margin-bottom: 3px' name='solution'></textarea>
<br><br>
<button name='opt' value='1' style='font-size: 18px;'>Отправить ответ</button>
<p><b>Совет:</b> Формулы в формате LaTex доступны. Для этого их надо ограничивать двумя долларами ($$) c каждой стороны.</p>
</form>

</div>

</div>

</div>
<script src="https://i.upmath.me/latex.js"></script>
<script>
let data = <?=json_encode($result)?>;
var x = <?=$result["t_given"]?>;
var id = <?=$result["id"]?>;
getNewPuzzle(data, id);
</script>
</body>
</html>
