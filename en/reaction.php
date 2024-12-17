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
        $otk = 'Sign up to change your rating';
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
        echo("<br><br><div style='text-align: center; border-color: green;'>Congratulations, you clicked the button in just <b>" . $t . "</b> seconds!<br>Your new rating: <b>" . $rating . "</b> (" . strval($otk) . ")<br></div>");
    }
?>
<style>
.waiting {
     background color: red
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
    document.getElementById('my_button').innerText = "Wait until the red button turns green and click it";
    document.getElementById('my_button').setAttribute("disabled", 1);
    setTimeout(startGame, 2000 + Math.ceil(Math.random()*2000));
};
</script>
<br><br>
<p>This is a measure of your reaction. The sooner we press the green button, the better!</p>
<br>
<center>
<form action='reaction.php' method='POST' id='my_form' hidden='1' style='display: flex'>
<input name='time' id='m3' hidden='1'>
<button type='button' id='my_button' style='width:40%; height: 144px' onclick='load_puzzle()'>START</button>
<button type='button' style='width: 50%; height: 144px' class='waiting' onclick='alert("You must click on the button after it turns green!")' id='submit_button'>Click me</button>
</form>
</center>
<h2>Your performance</h2>
Your average response is <b id='rating'><?=$rating?>c</b>
<script>var intrId</script>
</body>
</html>