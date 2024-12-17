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
span, i {
	display: block;
}
h1, span {
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
<p style='text-align: center'><b>ПРИМЕРЫ</b></p>
<span><?=round(file_get_contents("rating"), 3)?></span>
<br><br>
<p style='text-align: center'><b>РЕАКЦИЯ</b></p>
<span><?php if (file_get_contents("Rrating")) echo(round(file_get_contents("Rrating"), 3) . " сек."); else echo("Нет данных") ?></span><br><br>
</div>

<div>
<h1 style='color: green'><?=$user?><b class='awards'>
<?php
$level = file_get_contents("status.txt");
if ($level) {
    echo("Ур. $level; ");
}
echo(file_get_contents("awards"))
?>
</b></h1>
</div>

<div style='position: fixed; left: 270px; top: 140px; display: flex'>
<img src='<?=file_get_contents("image_href.txt")?>' style='width: 384px; height: 192px'>
<div style='display: block'>
<p style='width: 50%;'><pre style='padding-left: 50px; font-size: 15px'><?php echo(htmlspecialchars(file_get_contents("something.txt"))) ?></pre></p>
<div style='padding-left: 100px'>
<p>Регистрация: <b><?=$date?></b></p>
<p>Был онлайн: <b><?=file_get_contents("last_login.txt")?></b></p>
<p><b><?=file_get_contents("forum_posts.txt")?></b> форумных постов</p>
<br><br>
</div>
</div>
</div>

<center>
<?php
if ($user == $account) {
       echo("<button style='margin-bottom: 50px'><a href='/settings.php'>Редактировать профиль</a></button>");
} else {
    echo("<button style='margin-bottom: 50px'><a href='/inbox/newinbox.php'>Написать сообщение</a></button>");
};
?>
</center>

</body>
</html>