<?php include 'header.php' ?>
<?php
   function import_contents($file, $onerror) {
       if (file_exists($file)) {
           return file_get_contents($file);
       } else return $onerror;
   }
   $rating = import_contents('@/' . $account . '/Rrating', 0);
   $rcount = import_contents('@/' . $account . '/Rrcount', 0);
   $rwin = import_contents('@/' . $account . '/Rrwin', 0);
   $rspent = import_contents('@/' . $account . '/Rrspent', 0);
   file_put_contents('reaglog', 'GAVE PUZZLE TO ' . $account . ' ' . time() . "\n", FILE_APPEND);
   if ($_SERVER['REQUEST_METHOD'] == "POST") {
       $t = $_POST['time'];
       file_put_contents('reaglog', json_encode($_POST) . ' ' . time() . ' ' . $account . "\n", FILE_APPEND);
       $otk = 'Зарегистрируйтесь, чтобы менять Ваш рейтинг';
       if (!$anon) {
           if ($rcount == 0) file_put_contents('reagplayers', $account . "\n", FILE_APPEND);
           $rspent = $rspent + $t;
           $rcount = $rcount + 1;
           $rwin = $rspent / $rcount;
           $newrating = $rwin;
           $otk = $newrating - $rating;
           if ($otk > 0) $otk = '+' . strval($otk); 
           $rating = $newrating;
           file_put_contents('@/' . $account . '/Rrating', $rating);
           file_put_contents('@/' . $account . '/Rrcount', $rcount);
           file_put_contents('@/' . $account . '/Rrwin', $rwin);
           file_put_contents('@/' . $account . '/Rrspent', $rspent);
       }; 
       echo("<br><br><div style='text-align: center; border-color: green;'>Поздравляем, вы нажали на кнопку всего лишь за <b>" . $t . "</b> секунд!<br>Ваш новый рейтинг: <b>" . $rating . "</b> (" . strval($otk) . ")<br></div>");
   }
?>
<style>
.waiting {
    background-color: red;
}
.clickMe {
    background-color: green;
}
</style>
<script>
function addClock() {
    document.getElementById('m3').value = (document.getElementById('m3').value - 0 + 0.01).toFixed(2);
}
function startGame() {
    document.getElementById('submit_button').removeAttribute("disabled");
    document.getElementById('submit_button').className = "clickMe";
    document.getElementById('submit_button').type = "submit";
    document.getElementById('submit_button').removeAttribute("onclick");
    intrId = setInterval(addClock, 10);
}
function load_puzzle() {
   document.getElementById('my_form').removeAttribute("hidden");
   document.getElementById('my_button').innerText = "Дождитесь, пока красная кнопка не станет зеленой и нажмите её";
   document.getElementById('my_button').setAttribute("disabled", 1);
   setTimeout(startGame, 2000 + Math.ceil(Math.random()*2000));
};
</script>
<br><br>
<p>Это измерение вашей реакции. Чем быстрее мы нажмете на зеленую кнопку, тем лучше!</p>
<br>
<center>
<form action='reaction.php' method='POST' id='my_form' hidden='1' style='display: flex'>
<input name='time' id='m3' hidden='1'>
<button type='button' id='my_button' style='width:40%; height: 144px' onclick='load_puzzle()'>НАЧАТЬ</button>
<button type='button' style='width: 50%; height: 144px' class='waiting' onclick='alert("Вы должны нажать на кнопку после того, как она станет зеленой!")' id='submit_button'>Нажми на меня</button>
</form>
</center>
<h2>Ваши показатели</h2>
Ваша реакция в среднем - <b id='rating'><?=$rating?>c</b>
<script>var intrId</script>
</body>
</html>