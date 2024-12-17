<?php
    $PATH = "please_set_me";     // например /home/vol15_1/ezyro.com/ezyro_32563890/htdocs/, в конце должен быть слэш "/";
    $WEBSITE = "please_set_me";  // например antihackers.ezyro.com, не должно содержать http:// или https:// в начале.
?>


<?php
    function calc($a) {
        $r = 1;
        for ($i = 0; $i < 4; $i++) {
            $r = $r * $a[$i];
        }
        return $r;
    }
    function skl($a) {
        if (( ($a % 100 > 9) && ($a % 100 < 21) ) || ($a % 10 > 4)) return ' непрочитанных сообщений';
        if ($a % 10 == 1) return ' непрочитанное сообщение';
        return ' непрочитанных сообщения';
    }
    function blockIP($ip) {
        file_put_contents($PATH.".htaccess", "deny from " . $ip . "\n", FILE_APPEND);
        return;
    }
    if ($_COOKIE['_test2'] == "a4r2") {
        setcookie('_test2', '', time() - 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
        setcookie('account', '', time() - 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
        file_put_contents($PATH.'ddos', $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
        blockIP($_SERVER['REMOTE_ADDR']);
        exit;
    }
    if ($_SERVER['REMOTE_ADDR'] != '8.8.8.8') {
        file_put_contents($PATH.'SERVER_SECRET_DATA/RequestsBase', $_SERVER['HTTP_USER_AGENT'] . ' ' .$_SERVER['REMOTE_ADDR'] . ' ' . date('d.m.Y h:i:s A') . ' ' . $_SERVER["SCRIPT_NAME"] . ' ' . json_encode($_COOKIE) . "\n", FILE_APPEND);
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            file_put_contents($PATH.'SERVER_SECRET_DATA/RequestsPost', $_SERVER['HTTP_USER_AGENT'] . ' ' .$_SERVER['REMOTE_ADDR'] . ' ' . date('d.m.Y h:i:s A') . ' ' . $_SERVER["SCRIPT_NAME"] . ' ' . json_encode($_POST) . ' ' . json_encode($_COOKIE) . "\n", FILE_APPEND);
        };
    };
    if ($_COOKIE['account']) {
        if (!file_exists($PATH.'SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account'])) {
            http_response_code('500');
            file_put_contents($PATH.'ddos', $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
            setcookie('_test2', 'a4r2', time() - 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
            setcookie('account', '', time() - 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
            exit;
        } else {
            $account = explode('-', $_COOKIE['account'])[0];
            file_put_contents($PATH.'@/' . $account . '/last_login.txt', date('d.m.Y'));
            $anon = 0;
        }
    } else {
        $n = $_SERVER['REMOTE_ADDR'];
        $account = 'Guest' . calc(explode('.', $n));
        $anon = 1;
        $a = '""';
        $notify = 0;
    };
    if ($_COOKIE['lang'] == 'en') {
        include $PATH.'en/header.php';
        if (file_exists($PATH.'en' . $_SERVER['SCRIPT_NAME'])) { 
           include $PATH.'en' . $_SERVER['SCRIPT_NAME'];
           exit;
        };
    };
 //   if ($_GET['reload']) echo("<script>window.open(window.location.pathname, '_self')</script>");
?>
<html>
<head>
<meta charset='utf-8'>
<meta name="keywords" content="hacking, lichess, forum">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="БЕСПЛАТНАЯ констультация или помощь по любому поводу, который касается плохих людей в интернете!">
<meta name="google-site-verification" content="Ei2nvhlQa6lwlev8ienhTnFuY5FiRaVZmfaHVDBpKL8" />
<title>Антихакеры</title>
<link href='/ukrhack.ico' rel='icon' type='image/icon' size='32x32'>
<script>
function checkNotify() {
    var req = new XMLHttpRequest();
    req.open("GET", "/notify_read.php", false);
    req.send();
    var arr = JSON.parse(req.responseText);
    for (var i = arr.length-1; i >= 0; i--) {
        var elem = document.createElement("a");
        elem.setAttribute("href", arr[i].link);
        elem.innerHTML = '<b class="notify_b">' + arr[i].sender + '</b><br><br><span class="notify_txt">' + arr[i].text + '</span>';
        if (arr[i].readers.includes('<?=$account?>')) {
            elem.className = 'notify';
        } else {
            elem.className = 'notify new';
            document.getElementById('notify_parent').className = 'dropbtn new';
        };
        document.getElementById('notify_list').appendChild(elem);
    };
}
function clearNotify() {
    var req = new XMLHttpRequest();
    req.open("POST", "/notify_read.php", false);
    req.send();
    location.reload();
}
</script>
<style>
body {
  background-color:#cccccc;
}
header ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #38444d;
}

li.item {
  float: left;
}

a.item, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

a.item:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  max-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

.notify {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 20px;
}

.notify_b {
    font-size: 14px;
}

.new {
    background-color: orange;
}

.newF {
    background-color: green;
}

</style>
</head>
<body>
<header>
<ul>
  <li class="item"><a href="/" class="item">Главная</a></li>
  <li class="dropdown item">
    <a href="javascript:void(0)" class="dropbtn item">Игры</a>
    <div class="dropdown-content">
      <a href="/puzzle.php">Играть в шахматы</a>
      <a href="/chess.php">Решать шахматные задачи</a>
      <a href="/math/" class='newF'>Решать математические задачи</a>
      <a href="/math.php">Решать примеры</a>
      <a href='/reaction.php'>Измерить реакцию</a>
      <a href='/tictactoe.php'>Играть в крестики-нолики</a>
    </div>
  </li>
  <li class="dropdown item">
    <a href="javascript:void(0)" class="dropbtn item">Общение</a>
    <div class="dropdown-content">
      <a href="/forum/">Форум</a>
      <a href="/4at.php">Чат</a>
      <a href="/best_pl.php">Таблица лидеров</a>
      <a href='/inbox/'>Личные сообщения</a>
      <a href='/library/' class='newF'>Библиотека Антихакеров</a>
    </div>
  </li>
  <li class="dropdown item">
    <a href="javascript:void(0)" class="dropbtn item">Другое</a>
    <div class="dropdown-content">
      <a href='/changelog.php' class='newF'>Наш changelog</a>
      <a href="/pswd.php">Проверка пароля</a>
      <a href="/projects.php">Наши проекты</a>
      <a href="/rules.php">Правила сайта</a>
    </div>
  </li>
  <li class="item"><a class="item">|Последнее обновление сайта: 28.07.2024|</a></li>
  <li style="float: right" class="item"><a href='/bad.php' class="item">Жалоба</a></li>
  <li style="float: right" class="item"><a href='/bug.php?page=<?=$_SERVER["SCRIPT_NAME"]?>' class="item">Сообщить об ошибке</a></li>
  <li class="dropdown item" style="float: right">
    <a href="javascript:void(0)" class="dropbtn item"><?=$account?></a>
    <div class="dropdown-content">
      <?php
         if ($anon) {
             echo("<a href='/login.php'>Войти</a>");
             echo("<a href='/register.php'>Зарегистрироваться</a>");
         } else {
             echo("<a href='/settings.php'>Настройки</a>");
             echo("<a href='/@/" . $account . "'>Мой профиль</a>");
             echo("<a href='/log.php'>Логи аккаунта</a>");
             echo("<a href='/logout.php'>Выйти</a>");
         }
      ?>
    </div>
  </li>
  <li class="dropdown item" style="float: right">
      <a href="javascript:void(0)" class="dropbtn item" id="notify_parent">Уведомления</a>
      <div class="dropdown-content" id='notify_list'>
         <button onclick='clearNotify()' style='border-radius: 0px; width: 100%'>Пометить всё как прочитанное</button>
      </div>
  </li>
</ul>
</header>
<script>
checkNotify();
</script>