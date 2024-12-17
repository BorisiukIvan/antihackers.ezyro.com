<?php $data = file_get_contents('SERVER_SECRET_DATA/TRIES_TO_LOG_IN_' . $account);?>
<p>This is a list of addresses that have logged in or attempted to log into your account. If someone else is trying to hack you, <a href="/bad.php?val=hacker">file a complaint</a> and <a href='/settings.php'>change your password</a>!< /p>
<section style='width:100%; background-color:#999999'>
<pre style='font-size: 18px'>IP/password/time</pre>
<pre style='font-size: 18px'><?=$data?></pre>
</section>
<p>Your IP: <b><?=$_SERVER['REMOTE_ADDR']?></b>. Most likely, attempts from your IP are really you.</p>
</body>
</html>