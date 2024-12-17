<?php
    if ($_GET['size']) {
        $size = $_GET['size'];
        setcookie('size', $size, time() + 10 * 365 * 31 * 24 * 60, "/", 'antihackers.ezyro.com', 0);
    } else if ($_COOKIE['size']) {
        $size = $_COOKIE['size'];
    } else $size = 15;
?>
<html>
<head>
<meta charset='utf-8'>
<title>Электронная библиотека Антихакеров</title>
<link href='http://antihackers.ezyro.com/ukrhack.ico' rel='icon' type='image/icon' size='32x32'>
<style>
p {
    font-size:<?=$size?>px;
}
h1 {
    font-size:<?=$size*2?>px;
    text-align: center;
}
h2 {
    font-size:<?=$size*1.5?>px;
    color: #888800;
}
header {
    text-align: center;
    width: 100%;
}
</style>
</head>
<body>
<header><a href='/library/'>Вернуться на главную</a> <a href='http://antihackers.ezyro.com'>Вернуться на самую главную</a> <a href='/library/booklist.php'>Список книг</a> Размер шрифта: <select name='size' id='s' onchange='window.open(window.location.pathname + "?size=" + document.getElementById("s").value, "_self")'><option>8</option><option>10</option><option>11</option><option>12</option><option>15</option><option>18</option><option>20</option><option>24</option></select></button></header>
<script>
for (var i = 0; i < document.getElementsByTagName("option").length; i++) {
    if (document.getElementsByTagName("option")[i].innerText == <?=$size?>) document.getElementsByTagName("option")[i].selected=1;
}
</script>