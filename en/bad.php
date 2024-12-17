<?php
     if ($_REQUEST['val']) {
          $val = $_REQUEST['val'];
     } else $val = '';
     if ($_REQUEST['ok']) {
          $ok = 1;
     } else $ok = '';
?>
<br><br>
<center>
<div id='ok' style='border-width: 1px; border-color: #aaa; background-color: #00FF00; height: 30px;' hidden='1'>
      Your complaint has been sent! Within <em>18</em> hours you should receive a message (on this site) about the status of your complaint. <button onclick='document.getElementById("ok").hidden=1'>OK</button>
</div>
<div style='text-align: left; width: 60%; padding: 5px 0px 5px 10px; background-color: white;'>
<p style='color: #ee0000; font-size: 20px'>Attention! Please don't send useless complaints!</p>
<form action='/report.php' method='POST'>
<label for='who' style='color: black; font-size: 14px;'><b>Select what or who you want to complain about</b></label><br>
<select name='who' style='width: 90%' required='1'>
    <option value=''></option>
    <option value='hack' id='0'>To hack</option>
    <option value='spam' id='1'>Spam</option>
    <option value='scam' id='2'>Scam</option>
    <option value='cheat' id='3'>Cheater</option>
    <option value='phising' id='4'>Harmful site</option>
</select><br><br>
<label for='who2' style='color: black; font-size: 14px'><b>List names/websites of (alleged) offenders</b><br>
<input name='who2' style='width: 90%'><br><br>
<label for='body' style='color: black; font-size: 14px'><b>Describe what happened (the more specific the better)</b><br>
<textarea name='body' style='width: 90%; height: 500px; required'></textarea><br>
<p>Please describe more precisely, throw off the links. This will help us sort out the situation.</p><br>
<input name='check' type='checkbox' required='1'><span> I agree with the <a href='/rules.php'>Antihacker rules</a> and have verified my complaint. </span><br><br>
<button type='submit' id='s'>Submit a complaint</button>
</form>
</section>
</div>
</center>
<script>
    var val = '<?php echo $val?>';
    for (var i = 0; i < 4; i++) {
        if (val == document.getElementById(i).value) {
            document.getElementById(i).setAttribute('selected', 1);
            break;
        }
    }
    var ok = '<?php echo $ok?>';
    if (ok) {
        document.getElementById('ok').hidden = 0;
        document.getElementById('s').disabled = 1;
        var x = 10;
        var k = setInterval(function () {document.getElementById('s').innerText = x; x--; if (!x) {clearInterval(k); document.getElementById('s').disabled=0; document.getElementById('s').innerText = 'Submit complaint';}}, 1000);
    };
</script>
</body>
</html>