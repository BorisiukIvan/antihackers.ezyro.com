<?php include 'logger.php' ?>
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color:white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #38444d;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  max-width: 400px;
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
</style>
<script>
function checkNotify() {
    var req = new XMLHttpRequest();
    req.open("GET", "/notify_read.php", false);
    req.send();
    var arr = JSON.parse(req.responseText);
    for (var i = 0; i < arr.length; i++) {
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
</head>
<body>

<ul>
  <li><a href="/">Главная</a></li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Важное</a>
    <div class="dropdown-content">
      <a href="/bad.php">Жалоба</a>
      <a href="/news.php">Новости</a>
      <a href="/articles/">Наш блог</a>
      <a href="/docs/">Наши документы</a>
      <a href="/welcome.php">Стать антихакером</a>
      <a href="/protect.php">Сотрудничество</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Игры</a>
    <div class="dropdown-content">
      <a href="/puzzle.php">Играть в шахматы</a>
      <a href="/chess.php">Решать шахматные задачи</a>
      <a href="/math.php">Решать примеры</a>
      <a href='/reaction.php'>Измерить реакцию</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Общение</a>
    <div class="dropdown-content">
      <a href="/forum/">Форум</a>
      <a href="/4at.php">Чат</a>
      <a href="/best_pl.php">Таблица лидеров</a>
      <a href='/inbox/'>Личные сообщения</a>
    </div>
  </li>
  <li class="dropdown">
    <a href="javascript:void(0)" class="dropbtn">Другое</a>
    <div class="dropdown-content">
      <a href="/pswd.php">Проверка пароля</a>
      <a href="/projects.php">Наши проекты</a>
      <a href="/rules.php">Правила сайта</a>
      <a href="/admin_login.php">Войти как администратор</a>
    </div>
  </li>
  <li style="float: right"><a href='/bug.php?page=<?=$_SERVER["SCRIPT_NAME"]?>'>Сообщить об ошибке</a></li>
  <li class="dropdown" style="float: right">
    <a href="javascript:void(0)" class="dropbtn"><?=$account?></a>
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
  <li class="dropdown" style="float: right">
      <a href="javascript:void(0)" class="dropbtn" id='notify_parent'>Уведомления</a>
      <div class="dropdown-content" id='notify_list'>
         <button onclick='clearNotify()' style='border-radius: 0px'>Пометить всё как прочитанное</button>
      </div>
  </li>

</ul>

<h3>Dropdown Menu inside a Navigation Bar</h3>
<p>Hover over the "Dropdown" link to see the dropdown menu.</p>

<script>
checkNotify();
</script>
</body>
</html>

