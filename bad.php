<?php
    if ($_REQUEST['val']) {
         $val = $_REQUEST['val'];
    } else $val = '';
    if ($_REQUEST['ok']) {
         $ok = 1;
    } else $ok = '';
?>
<?php include 'header.php'; ?>
<br><br>
<center>
<div id='ok' style='border-width: 1px; border-color: #aaa; background-color: #00FF00; height: 30px;' hidden='1'>
     Ваша жалоба отправлена! В течение <em>18</em> часов вам должно прийти сообщение (на этом сайте), о статусе вашей жалобы. <button onclick='document.getElementById("ok").hidden=1'>OK</button>
</div>
<div style='text-align: left; width: 60%; padding: 5px 0px 5px 10px; background-color: white;'>
<p style='color: #ee0000; font-size: 20px'>Внимание! Пожалуйста, не посылайте бессмысленных жалоб!</p>
<form action='/report.php' method='POST'>
<label for='who' style='color: black; font-size: 14px;'><b>Выберите, на что или на кого вы хотите пожаловатся</b></label><br>
<select name='who' style='width: 90%' required='1'>
   <option value=''></option>
   <option value='hack' id='0'>на взлом</option>
   <option value='spam' id='1'>спам</option>
   <option value='scam' id='2'>мошенничество</option>
   <option value='cheat' id='3'>читер</option>
   <option value='phising' id='4'>Вредный сайт</option>
</select><br><br>
<label for='who2' style='color: black; font-size: 14px'><b>Перечислите имена / сайты (предполагаемых) нарушителей</b><br>
<input name='who2' style='width: 90%'><br><br>
<label for='body' style='color: black; font-size: 14px'><b>Опишите, что случилось (чем точнее, тем лучше)</b><br>
<textarea name='body' style='width: 90%; height: 500px; required'></textarea><br>
<p>Просьба описать поточнее, скинуть ссылки. Это поможет нам разобратся в ситуации.</p><br>
<input name='check' type='checkbox' required='1'><span> Я соглашаюсь с <a href='/rules.php'>правилами Антихакеров</a> и проверил(-а) свою жалобу.</span><br><br>
<button type='submit' id='s'>Отправить жалобу</button>
</form>
</section>
</div>
</center>
<script>
   var val = '<?=$val?>';
   for (var i = 0; i < 4; i++) {
       if (val == document.getElementById(i).value) {
           document.getElementById(i).setAttribute('selected', 1);
           break;
       }
   }
   var ok = '<?=$ok?>';
   if (ok) {
       document.getElementById('ok').hidden = 0;
       document.getElementById('s').disabled = 1;
       var x = 10;
       var k = setInterval(function () {document.getElementById('s').innerText = x; x--; if (!x) {clearInterval(k); document.getElementById('s').disabled=0; document.getElementById('s').innerText = 'Отправить жалобу';}}, 1000);
   };
</script>
</body>
</html>