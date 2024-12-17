<?php include 'header.php' ?>
<?php $data = file_get_contents('SERVER_SECRET_DATA/TRIES_TO_LOG_IN_' . $account);?>
<p>Это список адресов, с которых зашли или пытались зайти в ваш аккаунт. Если кто-то чужой пытается вас взломать, <a href="/bad.php?val=hacker">напишите жалобу</a> и <a href='/settings.php'>поменяйте пароль</a>!</p>
<section style='width:100%; background-color:#999999'>
<pre style='font-size: 18px'>IP/пароль/время</pre>
<pre style='font-size: 18px'><?=$data?></pre>
</section>
<p>Ваш IP: <b><?=$_SERVER['REMOTE_ADDR']?></b>. Скорее всего, попытки из Вашего IP - это действительно Вы.</p>
</body>
</html>