<?php
   if ($_COOKIE['account']) {
         if (!file_exists("/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/LOGPASS/" . $_COOKIE['account'])) {
             http_response_code('500');
             file_put_contents('/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/ddos', $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
             echo("<h1>500 Interval Server Error</h1>");
             exit;
         } else {
             $account = explode('-', $_COOKIE['account'])[0];
         }
     } else {
        http_response_code('403');
        header("Location: /register.php");
        exit;
   };
   $changestatus = '';
   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
       $image = $_POST['image'];
       $opis = $_POST['body'];
       file_put_contents('@/' . $account . '/image_href.txt', $image);
       file_put_contents('@/' . $account . '/something.txt', $opis);
       $password = $_POST['pswd'];
       $accept = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'q ', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N ', 'M'];
       $changestatus = '<span style="color:green">Your settings have been successfully saved!</span>';
       if (!str_replace($accept, '', $password)) {
            unlink('SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account']);
            file_put_contents('SERVER_SECRET_DATA/LOGPASS/' . $account . '-' . $password, 'OK');
            setcookie('account', $account . '-' . $password, time() + 10 * 365 * 31 * 24 * 60 * 60, "/", 'antihackers.ezyro.com', 0);
            echo('Your settings were successfully saved; Please reload the page');
            exit;
       } else $changestatus = '<span style="color:red">Failed to change password: use only numbers, underscores and English letters</span>';
   }
   $password = explode('-', $_COOKIE['account'])[1];
  
   $image = file_get_contents('@/' . $account . '/image_href.txt');
   $opis = file_get_contents('@/' . $account . '/something.txt');
?>
<?php include 'header.php' ?>
<br><br>
<center>
<section style='width: 50%; background-color: #999999'>
<p><?=$changestatus?></p>
<form action='settings.php' method='POST'>
    Your password:<br>
    <input name='pswd' value='<?=$password?>' minlength=5 maxlength=200 required='1' style='width:80%; text-align: center'><br><br>
    Your photo:<br>
    <input name='image' value='<?=$image?>' placeholder='Just paste the link to your photo here' style='width:80%'><br><br>
    Your description:<br>
    <textarea name='body' style='width:80%; height: 100px'><?=$opis?></textarea><br><br>
    <button type='submit'>Save Changes</button>
</form>
</section>
</center>
</body>
</html>