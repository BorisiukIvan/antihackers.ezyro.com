<?php
      if (!file_exists('../SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account'])) {
          header('Location: /login.php');
      } else if (explode('-', $_COOKIE['account'])[0] == "Otryzhkin777") {
          echo("Вы больше не можете писать на форуме из-за намеренного нарушения правил.");
          exit;
      } else {
          $login = explode('-', $_COOKIE['account'])[0];
          $topic = $_GET['topic'];
          $post = str_replace("\n", "<br>", htmlspecialchars($_GET['yourpost']));
          $date = date('Y-m-d H:i:s');
          $number = file_get_contents($topic . 'numberPosts');
          $previos = explode("<script src='answer.js'></script>", file_get_contents($topic . 'POSTS'))[0];
          $was_posts = file_get_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt');
          file_put_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt', $was_posts+1);
          file_put_contents($topic . 'numberPosts', $number + 1);
          file_put_contents($topic . 'lastPost', $date);
          file_put_contents($topic . 'POSTS', $previos . "<br><p class='post'>Пост №" . ($number + 1) . ". Автор: <a href='/@/" . $login . "'>" . $login . "</a> (" . $date . ")<br>" . $post . "<br></p><script src='answer.js'></script>");
          echo('<script>window.open("' . $topic .'POSTS?reload", "_self")</script>');
      };
?>