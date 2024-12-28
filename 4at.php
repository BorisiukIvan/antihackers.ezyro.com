<?php include 'header.php' ?>
<?php
   if ($_SERVER['REQUEST_METHOD'] == "POST") {
       if (file_exists("@/$account/index.php")) {
        file_put_contents('4atcache', '<b><a href="/@/'.$account.'/">' . $account . '</a>:</b> ' . htmlspecialchars($_POST['body']) . "<br><br>\n", FILE_APPEND);
       } else file_put_contents('4atcache', '<b>'.$account . ':</b> ' . htmlspecialchars($_POST['body']) . "<br><br>\n", FILE_APPEND);
   }
?>
<hr><center><b>Чат</b></center><br>
<div id='chat-window' style='width:50%; background-color:white; overflow: scroll; padding-left: 5px; height: 700px'><?php echo(file_get_contents('4atcache')) ?> <input autofocus id='dltme'></div>
<div id='chat-answer' style='width:50%; background-color:#DDDDDD;'><form action='4at.php#chat-answer' method='POST'><input name='body' autocomplete="off" placeholder='Напишите сообщение в онлайн чат..' maxlength=200 style='width:300px'><button type='submit'>Отправить</button></form></div>
<script>
setTimeout(function () { document.getElementById('dltme').setAttribute('hidden', 1) }, 10);
</script>
</body>
</html>
