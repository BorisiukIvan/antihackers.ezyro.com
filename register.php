<?php
    $WEBSITE = "please_set_me";
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
       $login = $_POST['login'];
       $password = $_POST['password'];
       file_put_contents('SERVER_SECRET_DATA/TRIES_TO_REGISTER', $_SERVER['REMOTE_ADDR'] . ' ' . $login . ' ' . $password . "\n", FILE_APPEND);
       $accept = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
       if ( (!file_exists("@/" . $login)) && (!str_replace($accept, '', $login)) && (!str_replace($accept, '', $password)) ) {
           if (!file_exists("SERVER_SECRET_DATA/regtries_".$_SERVER['REMOTE_ADDR'])) {
               file_put_contents("SERVER_SECRET_DATA/regtries_".$_SERVER['REMOTE_ADDR'], "1");
           } else if (intval(file_get_contents("SERVER_SECRET_DATA/regtries_".$_SERVER['REMOTE_ADDR'])) > 3) {
               echo("Вы создали слишком много аккаунтов!");
               exit;
           } else file_put_contents("SERVER_SECRET_DATA/regtries_".$_SERVER['REMOTE_ADDR'], file_get_contents("SERVER_SECRET_DATA/regtries_".$_SERVER['REMOTE_ADDR'])+1);

           setcookie('account', $login . '-' . $password, time() + 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
           if ($_POST['lang'] == 'en') {
               header("Location: /articles/new-hackers-are-on-lichess.html");
           } else if ($_POST['redirect']) {
               header("Location: " . $_POST['redirect']);
           } else header('Location: /@/' . $login . '/');
           mkdir('@/' . $login);
           file_put_contents('@/' . $login . '/index.php', '<?php $user = "' . $login . '"; $date = "' . date("d.m.Y") . '"?> <?php include "../../header.php" ?> <?php include "../account_header.php" ?>');
           if ($_POST['something']) {
              file_put_contents('@/' . $login . '/something.txt', htmlspecialchars($_POST['something']));
           } else file_put_contents('@/' . $login . '/something.txt', '');
           if ($_POST['image']) {
              file_put_contents('@/' . $login . '/image_href.txt', $_POST['image']);
           } else file_put_contents('@/' . $login . '/image_href.txt', '');
           file_put_contents('members_list', $login . "\n", FILE_APPEND);
           file_put_contents("SERVER_SECRET_DATA/LOGPASS/" . $login . '-' . $password, 'OK');
       } else {
           http_response_code(400);
           $login_status = 'Login or password containts illegal characters or this username already in use. Please use only english letters and numbers.';
       }
    } else {
        $login_status = '';
    };
?>
<?php include 'header.php'; ?>
<center><br>
<section style='border-radius: 15px; border-width: 1px; border-color: #aaa; width: 45%; background-color:#999999;'>
<form action='register.php' method='POST'>
            <input hidden=1 name='redirect' value='<?=$ref?>'>
            <label id='res' style='color:red'><?=$login_status?></label><br>
            <label for='login'>Ваш логин:</label><br>
            <input name='login' maxlength=25 required='1' style='width:80%'><br><br>
            <label for='password'>Ваш пароль:</label><br>
            <input name='password' minlength=5 maxlength=200 type='password' required='1' style='width:80%'><br><br>
            <label for='pswd-repeat'>Ваш пароль еще раз:</label><br>
            <input name='pswd-repeat' minlength=5 maxlength=200 type='password' required='1' style='width:80%'><br><br>
            <label for='where'>Откуда Вы узнали про наш сайт?</label><br>
            <input name='where' maxlength=300 style='width:80%'><br><br>
            <label for='something'>Напишите здесь кое-что про себя:</label><br>
            <textarea name='something' style='width: 80%; height: 100px'></textarea><br><br>
            <label for='image'>Вы можете загрузить фотографию:</label><br>
            <input name='image' placeholder='Введите сюда ссылку на изображение..' style='width: 80%;'><br><br>
            <button type='submit' style='padding: 10px 18px; margin-bottom: 3px; width: 45%; height: 60px'>Зарегистрироваться как обычный пользователь</button>
            <button type='button' onclick="alert('Ошибка: эта функция в разработке!'); document.getElementById('forplus').removeAttribute('hidden')" style='padding: 10px 18px; margin-bottom: 3px; width: 45%; height: 60px; background-color: #f38'>Зарегистрироваться как Антихакер<b>*</b></button><br>
            <p><b>*)</b><i>Зарегистрироваться как Антихакер</i>: больше возможностей для аккаунта, но требуется подтверждение модерации и постоянная активность аккаунта.</p>

</form>
</section>
</center>
<script>
if ('<?=$_GET['pov']?>') {
    document.getElementById('l1').removeAttribute('hidden');
    document.getElementById('l2').removeAttribute('hidden');
}
</script>
</body>
</html>