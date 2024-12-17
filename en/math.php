<?php
    function import_contents($file, $onerror) {
        if (file_exists($file)) {
            return file_get_contents($file);
        } else return $onerror;
    }
    $rating = import_contents('@/' . $account . '/rating', 1500);
    $rcount = import_contents('@/' . $account . '/rcount', 0);
    $rwin = import_contents('@/' . $account . '/rwin', 0);
    $rspent = import_contents('@/' . $account . '/rspent', 0);
    file_put_contents('mathlog', 'GAVE PUZZLE TO ' . $account . ' ' . time() . "\n", FILE_APPEND);
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $x = $_POST['x'];
        $y = $_POST['y'];
        $z = $_POST['z'];
        $t = $_POST['time'];
        file_put_contents('mathlog', json_encode($_POST) . ' ' . time() . ' ' . $account . "\n", FILE_APPEND);
        if ($x + $y != $z) {
            echo("Warning, " . $account . '! Frauds while solving rating examples are STRICTLY FORBIDDEN!');
            exit;
        };
        $otk = 'Sign up to change your rating';
        if (!$anon) {
            if ($rcount == 0) file_put_contents('mathplayers', $account . "\n", FILE_APPEND);
            $rspent = $rspent + $t;
            $rcount = $rcount + 1;
            $rwin = $rspent / $rcount;
            $newrating = sqrt(1 / $rwin) * 6000;
            $otk = $newrating - $rating;
            if ($otk > 0) $otk = '+' . strval($otk);
            $rating = $newrating;
            file_put_contents('@/' . $account . '/rating', $rating);
            file_put_contents('@/' . $account . '/rcount', $rcount);
            file_put_contents('@/' . $account . '/rwin', $rwin);
            file_put_contents('@/' . $account . '/rspent', $rspent);
        };
        echo("<br><br><div style='text-align: center; border-color: green;'>Congratulations, you solved the example in just <b>" . $t . "</b> seconds !<br>Your new rating: <b>" . $rating . "</b> (" . strval($otk) . ")<br></div>");
    }
?>
<style>
.num {
     font-size: 144px;
     width: 280px;
     border: 0px;
     background-color: #CCCCCC;
     color: black;
}
.sign {
     font-size: 108px;
}
</style>
<script>
function addClock() {
     document.getElementById('m3').value = (document.getElementById('m3').value - 0 + 0.1).toFixed(1);
     if (document.getElementById('m4').value == document.getElementById('m2').innerText - 0 + (document.getElementById('m1').innerText - 0)) {
          document.getElementById('submit_button').click();
          clearInterval(intrId);
     };
}
function load_puzzle() {
    document.getElementById('my_form').removeAttribute("hidden");
    document.getElementById('my_button').hidden = 1;
    document.getElementById('m1').innerText = Math.ceil(Math.random()*900)+100;
    document.getElementById('m2').innerText = Math.ceil(Math.random()*900)+100;
    document.getElementById('p1').value = document.getElementById('m1').innerText;
    document.getElementById('p2').value = document.getElementById('m2').innerText;
    document.getElementById('m3').value = 0;
    document.getElementById('m4').focus();
    intrId = setInterval(addClock, 100);
};
</script>
<br><br>
<p>Solve math problems and get on the <a href='/best_pl.php'>leader page</a>! You just need to solve the written example and write the answer in the field.</p>
<b>Attention!</b> There is a rating here (the higher the rating, the better), so any attempt at cheating is STRICTLY FORBIDDEN! In addition, the faster you solve an example, the better, and vice versa, if you solve an example very slowly, your rating will simply be taken away! Also note that until you write the CORRECT answer, nothing will happen!<br>
<br>
<center>
<form action='math.php' method='POST' id='my_form' hidden='1'> <input name='x' hidden='1' id='p1' value='' autocomplete='off '><input name='y' hidden='1' id='p2' value='' autocomplete='off'>
<span id='m1' class='num'></span> <span class='znak'>+</span> <span id='m2' class='num'></span> <span class ='znak'>=</span> <input name='z' style='font-size:144px; width: 432px' type='number' min="200" max="1998" required id='m4' value='' autofocus /> <input hidden='1' name='time' id='m3' value ='0'><button type='submit' style='width: 288px; height: 72px' hidden=1 id='submit_button'>OK</button>
</form>
<button id='my_button' style='width:80%; height: 144px' onclick='load_puzzle()'>New Example</button>
</center>
<h2>Your performance</h2>
Your rating is <b id='rating'><?=$rating?></b>; Total solved examples - <b id='rcount'><?=$rcount?></b>; Time spent on examples - <b id='rspent'><?=$rspent?>c</b>; Average speed - <b id='rwin'><?=$rwin?>c</b>;
<script>var intrId</script>
</body>
</html>