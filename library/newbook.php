<?php include 'header.php' ?>
<?php
  if ($_SERVER['REQUEST_METHOD'] == "POST") {
      $id = file_get_contents('booknumberReal') + 1;
      file_put_contents('booknumberReal', $id);
      mkdir($id);
      $title = str_replace("'", '"', htmlspecialchars($_POST['title']));
      $text = str_replace("'", '"', htmlspecialchars($_POST['text']));
      file_put_contents($id . '/index.php', '<?php $text=' . "'" . $text . "'" . '; ?> <?php include "../header.php" ?> <?php include "../header2.php" ?>');
      file_put_contents($id . '/date', date('h:i:s A'));
      file_put_contents($id . '/views', '0');
      file_put_contents($id . '/startotal', '0');
      file_put_contents($id . '/title', $title);
      $wasbooks = file_get_contents('booknumber');
      file_put_contents('booknumber',  '<a href="' . $id . '/">' . $title . '</a>' . '\n' . $wasbooks);
      echo("<script>alert('Получилось!'); window.open('booklist.php', '_self')</script>");
  }
?>
<br><br>
<center>
<section style='background-color: #999999; border-color: #aaa; border-width: 1px; width: 50%; text-align: center'>
<form action='newbook.php' method='POST'>
    Сначала, пожалуйста, напишите имя книги<br>
    <input name='title' placeholder='Напишите его здесь..'><br><br>
    Теперь напишите сам текст книги.<br>
    <textarea minlength=30 name='text' style='height: 100px; width: 500px'></textarea><br><br>
    <input type='checkbox' name='mycheckbox'> Я согласен(на) с <a href='http://antihackers.ezyro.com/rules.php'>Правилами Антихакеров</a>.<br><br>
    <button type='submit'>Загрузить книгу</button><br><br>
    <b>Код взят <a href='http://antihackers.ezyro.com/news/new.php'>отсюда</a></b>
</form>
</section>
</center>
</body>
</html>