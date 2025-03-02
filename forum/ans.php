<?php
      if (!file_exists('../SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account'])) {
          header('Location: /login.php');
      } else {
          $login = explode('-', $_COOKIE['account'])[0];
          $topic = $_GET['topic'];
          $post = str_replace("\n", "<br>", htmlspecialchars($_GET['yourpost']));
          $date = date('Y-m-d H:i:s');
          $_DATA = json_decode(file_get_contents("data.json"), true);
          $previos = explode("<script src='answer.js'></script>", file_get_contents($topic . 'POSTS'))[0];
          $was_posts = file_get_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt');
          file_put_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt', $was_posts+1);
          $_CHANGE = $_DATA[$topic];
          $_CHANGE["posts"] += 1;
          $_CHANGE["lastPost"] = $date;
          file_put_contents($topic . 'POSTS', $previos . "<br><p class='post'>Пост №" . ($_CHANGE["posts"]) . ". Автор: <a href='/@/" . $login . "'>" . $login . "</a> (" . $date . ")<br>" . $post . "<br></p><script src='answer.js'></script>");
          unset($_DATA[$topic]);
          $_DATA = array($topic => $_CHANGE) + $_DATA;
          file_put_contents("data.json", json_encode((object) $_DATA, JSON_PRETTY_PRINT));
          echo('<script>window.open("' . $topic .'POSTS?reload", "_self")</script>');
      };
?>