<?php
   if ($_SERVER['REQUEST_METHOD'] == "POST") {
       if ($account == "Guest46-253-186-4") $account = '<IP hidden>';
       file_put_contents('4atcache', '<b>' . $account . ':</b> ' . htmlspecialchars($_POST['body']) . "<br><br>\n", FILE_APPEND);
       file_put_contents('4atLastMsg', htmlspecialchars($_POST['body']));
   }
?>
<hr><center><b>Chat</b></center><br>
<div id='chat-window' style='width:50%; background-color:white; overflow: scroll; height: 700px'><?php echo(file_get_contents('4atcache') . "<input autofocus id='dltme'>") ?></div>
<div id='chat-answer' style='width:50%; background-color:#DDDDDD;'><form action='4at.php#chat-answer' method='POST'><input name='body' placeholder='Write a message to the online chat..' maxlength=200 style='width:300px'><button type='submit'>Send</button></form></div>
<script>
setTimeout(function () { document.getElementById('dltme').setAttribute('hidden', 1) }, 10);
</script>
</body>
</html>