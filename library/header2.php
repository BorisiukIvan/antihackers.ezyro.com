<?php
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        if (strpos(file_get_contents('ip'), $_SERVER['REMOTE_ADDR']) !== false) {
            http_response_code('400');
            echo("Вы уже оценили книгу!<br>");
        } else {
            file_put_contents('ip', $_SERVER['REMOTE_ADDR'] . "\n", FILE_APPEND);
            $mark = $_POST['mark'];
            if (($mark < 1) || ($mark > 5)) {
                http_response_code('400');
                echo("Некорректная оценка<br>");
            } else {
                $m = file_get_contents('views');
                file_put_contents('views', $m + 1);
                $star = file_get_contents('startotal');
                file_put_contents('startotal', $star + $mark);
            }
        };
    }
?>
<style>p { color: #333333; }</style>
<h1><?=file_get_contents('title')?></h1>
<div id='booktext'>
<?php
   $text = "<p>" . str_ireplace("\n", "</p>\n<p>", $text) . "</p>";
   $text = str_ireplace("<p>Глава ", "<h2>Глава ", $text);
   for ($i = 0; $i < count(explode($text, "\n")); $i++) {
        $n = explode($text, "\n")[$i];
        if (count(explode($text, "<h2>")) > 1) {
               $n = str_replace("</p>", "</h2>", $n);
        }
        $text = $text . $n;
   }
   echo($text);
?>
</div>
<div>
<br><br>
Понравилась книга? Оцените её!<br>
<pre style='font-size:24px'>Оценка книги: <b><?php if (!file_get_contents("views")) { echo("-"); } else echo(file_get_contents("startotal")/file_get_contents("views")) ?></b>  Оценок: <em><?=file_get_contents("views")?></em><br>
Ваша оценка: <form action="index.php" method="POST"><select name="mark"><option></option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> <button type='submit'>Oценить</button></form></pre>
</div>