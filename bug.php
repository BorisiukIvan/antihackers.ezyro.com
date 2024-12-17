<?php include 'header.php' ?>
<?php
  if ($_SERVER['REQUEST_METHOD'] == "POST") {
     file_put_contents('BugReports', $_SERVER['REMOTE_ADDR'] . ' ' . $_SERVER['HTTP_USER_AGENT'] . ' ' . json_encode($_POST) . ' ' . $account . "\n", FILE_APPEND);
     $stat = 'Мы обработаем ваши данные максимум за 18 часов. После этого мы будем стараться исправить эту ошибку.';
  } else $stat = '';
?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<style>
#main_div {
    width: 40%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    background-color: white;
    text-align: left;
}
textarea {
    font-size: 18px;
    width: 80%;
    height: 500px;
}
.button_submit {
    height: 50px;
    width: 30%;
    background-color: #777777;
    font-size: 24px;
}
.button_submit:hover {
    background-color: #e3d299;
}
#result {
    color: green;
    font-size: 16px;
}
</style>
</head>
<body>
<center>
<br><br>
<div id='main_div'>
<p id='result'><?=$stat?></p>
<form action='bug.php' method='POST'>
<input hidden='1' name='page' value='<?=$_GET["page"]?>'>
1. Укажите проблему:
<select name='problem' required>
<option value='mistake'>Опечатка (опечатки)</option>
<option value='error'>Страница работает не так, как ожидалось (ошибка в коде)</option>
<option value='security'>Дыра в безопасности</option>
</select><br><br>
2. Краткое описание проблемы:
<input name="short" required><br><br>
3. Полное описание проблемы:<br><br>
<textarea name="long" required></textarea><br><br><button type='submit' class='button_submit'>Отправить</button></center>
</form>
</div>
</center>
</body>
</html>