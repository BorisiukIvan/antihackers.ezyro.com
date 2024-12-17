<?php if ($_SERVER['REQUEST_METHOD'] != "POST") exit; include '../header.php'; ?>
<?php
    $pending = json_decode(file_get_contents("pending.json"),true);
    if (!array_key_exists($account, $pending)) exit;

    $scs = 0;
    $c = json_decode(file_get_contents("solutions/data.json"),true);
    $id = $pending[$account]["task"];
    $data = $c[$id];
    $data["try"] = $data["try"] + 1;
    $data["tried_by"][] = $account;

    $result["time"] = time() - $pending[$account]["time"];
    $result["id"] = $id;
    $result["avtor"] = $data["avtor"];
    $result["uslovie"] = $data["uslovie"];
    $result["try"] = $data["try"];
    $result["ans"] = $data["ans"];

    if (time() - $pending[$account]["time"] > 21600) {
        $result["msg"] = "На задачу было потрачено больше времени, чем мы отвели для Вас. Поэтому Ваш ответ не засчитывается :(";
    } else {
        if ($data["ans"] == $_POST["ans"]) {
            $data["success"] = $data["success"] + 1;
            $result["msg"] = "Поздравляем, задача решена верно!";
            $scs = 1;
        } else {
            $result["msg"] = "К сожалению, ответ неправильный :(";
        }
    }
    $result["success"] = $data["success"];
    $result["rtg"] = $data["rtg"];

    unset($pending[$account]);
    $c[$id] = $data;
    file_put_contents("solutions/data.json", json_encode($c));
    file_put_contents("pending.json", json_encode($pending));    
?>
<html>
<head>
<title>Задача №<?=$result["id"]?></title>
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
#task {
    font-size: 24px;
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
</script>
</head>
<body style='background-color: #ddd'>
<br><br><br>
<div style='display: flex'>


<div style='width: 15%;'>

<table id='tbl'>
<tr><td>Задача</td><td id='t1'>№<?=$result["id"]?></td></tr>
<tr><td>Источник</td><td id='t2'><?=$result["avtor"]?></td></tr>
<tr><td>Рейтинг задачи</td><td id='t3'><?=$result["rtg"]?></td></tr>
<tr><td>Попыток решить</td><td id='t4'><?=$result["try"]?></td></tr>
<tr><td>Решена (кл-во раз)</td><td id='t5'><?=$result["success"]?></td></tr>
</table>

<br>

<div style='text-align: center; background-color: #eee'>
Ваш рейтинг:<br>
<b style='font-family: monospace; font-size: 28px'>?</b><sub><small>x ?</small></sub><br>
<small>(<?php if ($scs) echo("<span style='color: green'>+</span>$$\infty$$"); else echo("<span style='color: red'>-</span>$$\infty$$"); ?>)</small>
</div>

<br>

<div style='text-align: center; background-color: #eee'>
Потрачено времени:<br>
<span style='font-family: monospace; font-size: 28px'><b id='hours'>6</b><small>ч</small>:<b id='min'>00</b><small>мин</small>:<b id='sec'>00</b><small>сек</small></span>
</div>

</div>

<div style='width: 60%; margin-left: 10%; margin-right: 10%'>
<div>
<p id='task'><?=$result["uslovie"]?></p>
</div>
<br><br>
<div style='text-align: left'>
<form>
Ответ:<br>
<input style='width: 100%; font-size: 20px; font-family: monospace; color: green' value='<?=$result["ans"]?>' disabled='1'><br><br>
Официальное решение задачи (если есть):<br>
<textarea style='width: 100%; height: 300px; font-size: 18px; margin-bottom: 3px' disabled='1'></textarea>
<br><br>
<table style='width: 100%'>
<tr><td><button onclick='window.open("/math/","_self")' type='button' style='font-size: 18px;'>Перейти к следующей задаче</button></td><td><button onclick='window.open("/","_self")' type='button' style='font-size: 18px;'>На главную</button></td></tr></table><br><br>
</form>

</div>

</div>

</div>
<script src="https://i.upmath.me/latex.js"></script>
<script>
alert("<?=$result['msg']?>");
var x = <?=$result["time"]?>;
updateTime(x);
</script>
</body>
</html>