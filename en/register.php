<?php
     if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $login = $_POST['login'];
        $password = $_POST['password'];
        file_put_contents('/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/TRIES_TO_REGISTER', $_SERVER['REMOTE_ADDR'] . ' ' . $login . ' ' . $password . "\n", FILE_APPEND);
        $accept = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '_', 'q ', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm ', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N ', 'M'];
        if ( (!file_exists("@/" . $login)) && (!str_replace($accept, '', $login)) && (!str_replace($accept, '', $password)) ) {
            setcookie('account', $login . '-' . $password, time() + 10 * 365 * 31 * 24 * 60 * 60, "/", 'antihackers.ezyro.com', 0);
            if ($_POST['lang'] == 'en') {
                header("Location: /articles/new-hackers-are-on-lichess.html");
            } else if ($_POST['redirect']) {
                header("Location: " . $_POST['redirect']);
            } else header('Location: /@/' . $login . '/');
            mkdir('@/' . $login);
            file_put_contents('@/' . $login . '/index.php', '<?php $user = "' . $login . '"; $date = "' . date("d.m.Y") . '"?> <?php include "../../header.php" ?> <?php include "../account_header.php" ?>');
            if ($_POST['something']) {
               file_put_contents('@/' . $login . '/something.txt', $_POST['something']);
            } else file_put_contents('@/' . $login . '/something.txt', '');
            if ($_POST['image']) {
               file_put_contents('@/' . $login . '/image_href.txt', $_POST['image']);
            } else file_put_contents('@/' . $login . '/image_href.txt', '');
            file_put_contents('members_list', $login . "\n", FILE_APPEND);
            file_put_contents("/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/LOGPASS/" . $login . '-' . $password, 'OK');
        } else {
            http_response_code(400);
            $login_status = 'Login or password containts illegal characters or this username already in use. Please use only english letters and numbers.';
        }
     } else {
         $login_status = '';
     };
?>
<?php include 'header.php'; ?>
<br><br>
<section style='border-radius: 15px; border-width: 1px; border-color: #aaa; width: 45% background-color:#999999;'>
<form action='register.php' method='POST'>
             <input hidden=1 name='redirect' value='<?=$ref?>'>
             <label id='res' style='color:red'><?=$login_status?></label><br>
             <label for='login'>Your login:</label><br>
             <input name='login' maxlength=25 required='1' style='width:80%'><br><br>
             <label for='password'>Your password:</label><br>
             <input name='password' minlength=5 maxlength=200 type='password' required='1' style='width:80%'><br><br>
             <label for='pswd-repeat'>Your password again:</label><br>
             <input name='pswd-repeat' minlength=5 maxlength=200 type='password' required='1' style='width:80%'><br><br>
             <label for='something'>Write something about yourself here:</label><br>
             <textarea name='something' style='width: 80%; height: 100px'></textarea><br><br>
             <label for='image'>You can upload a photo:</label><br>
             <input name='image' placeholder='Enter image link here..' style='width: 80%;'><br><br>
             <p><b>Attention!</b> Accounts that have an obscene description or account name may be blocked!</p>
             <button type='submit' style='background-color: green; padding: 10px 18px; width: auto'>Register</button><br>
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