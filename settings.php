<?php
  $WEBSITE = "please_set_me";
  if ($_COOKIE['account']) {
        if (!file_exists("SERVER_SECRET_DATA/LOGPASS/" . $_COOKIE['account'])) {
            http_response_code('500');
            file_put_contents('ddos', $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
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
      file_put_contents('@/' . $account . '/something.txt', htmlspecialchars($opis));
      $password = $_POST['pswd'];
      $accept = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
      $changestatus = '<span style="color:green">Ваши настройки успешно сохранены!</span>';
      if (!str_replace($accept, '', $password)) {
           unlink('SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account']);
           file_put_contents('SERVER_SECRET_DATA/LOGPASS/' . $account . '-' . $password, 'OK');
           setcookie('account', $account . '-' . $password, time() + 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
           echo('Ваши настройки были успешно сохранены; Перезагрузите страницу');
           exit;
      } else $changestatus = '<span style="color:red">Не удалось изменить пароль: используйте только цифры, подчёркивание и английские буквы</span>';
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
   Ваш пароль:<br>
   <input name='pswd' value='<?=$password?>' minlength=5 maxlength=200 required='1' style='width:80%; text-align: center'><br><br>
   Ваше фото:<br>
   <input name='image' value='<?=$image?>' placeholder='Просто вставьте сюда ссылку на ваше фото' style='width:80%'><br><br>
   Ваше описание:<br>
   <textarea name='body' style='width:80%; height: 100px'><?=$opis?></textarea><br><br>
   <button type='submit'>Сохранить изменения</button>
</form>
</section>
</center>
</body>
</html>