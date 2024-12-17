<?php include '../header.php' ?>
<?php
    if (!file_exists('forum_posts.txt')) {
        file_put_contents('forum_posts.txt', '0');
    };
    if (!file_exists('status.txt')) {
        file_put_contents('status.txt', '0');
    };
    if (!file_exists('last_login.txt')) {
        file_put_contents('last_login.txt', $date);
    };
    if (!file_exists('rating')) {
        file_put_contents('rating', '1500');
    };
    if (!file_exists('awards')) {
        file_put_contents('awards', '');
    };
    if (!file_exists('Rrating')) {
        file_put_contents('Rrating', '');
    }
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
small, i {
	display: block;
}
h1, small {
	text-align: center;
}
i {
	text-align: right;
	font-size: 11px;
}
.awards {
	font-family: monospace;
	color: red;
}
</style>
</head>
<body>
<br>
<div style='display: flex'>
<div style='width: 220px; padding-right: 50px'>
<h1>Результаты</h1>
<p style='text-align: center'>ПРИМЕРЫ</p>
<small><?=file_get_contents("rating")?></small>
<br><br>
<p style='text-align: center'>РЕАКЦИЯ</p>
<small><?=file_get_contents("Rrating")?>сек.</small><br><br>
</div>

<div>
<h1 style='color: green'><?=$user?><span class='awards'>
<?php
$level = file_get_contents("status.txt");
if ($level) {
    echo("Ур. $level;");
}
echo(file_get_contents("awards"))
?>
</span></h1>
</div>

<div style='position: fixed; left: 270px; top: 140px; display: flex'>
<img src='img' style='width: 384px; height: 192px'>
<div style='padding-left: 100px'>
<p><i style='font-size: 15px'><?=file_get_contents('something.txt')?></i></p>
<p>Регистрация: <b><?=$date?></b></p>
<p>Был онлайн: <b><?=file_get_contents("last_login.txt")?></b></p>
<p><b><?=file_get_contents("forum_posts.txt")?></b> форумных постов</p>
<br><br>
<center>
<?php
if ($user == $account) {
       echo("<a href='/settings.php'>Редактировать профиль</a>");
} else {
    echo("<a href='inbox/newinbox.php'>Написать сообщение</a>");
};
?>
</center>

</div>
</div>

</body>
</html>