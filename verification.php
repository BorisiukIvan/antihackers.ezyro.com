<?php include 'header.php' ?>
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo("Ваша заявка будет обработана в течении нескольких часов..");
}
?>
<br>
<h1>Верификация</h1>
<form action='/verification.php' method='POST'>
Ваш дискорд: <input name='name'>#<input name='tag' type='num' maxlength=4 minlength=4><br><br>
Страна: <input name='country'><br><br>
Кое-что от себя:<br> <textarea name='body' style='width: 500px; height: 300px'></textarea><br>
<button type='submit'>OK</button>
</form>