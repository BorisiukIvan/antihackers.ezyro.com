<?php
     $user = explode('-', $_COOKIE['account'])[0];
     if (!file_exists('../SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account'])) {
             echo('<script>window.open("/forum/?result=fail", "_self")</script>');
             exit;
     } else if ($user == "Otryzhkin777") {
             echo("Вы больше не можете писать на форуме из-за намеренного нарушения правил.");
             exit;
     } else {
             $topicname = htmlspecialchars($_GET['topicName']);
             $topicdate = date('Y-m-d H:i:s');
             $posts = 1;
             $post = str_replace("\n", "<br>", htmlspecialchars($_GET['myPost']));
             $number = file_get_contents("NUMBER_OF_TOPICS789221") + 1;
             $was_posts = file_get_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt');
             file_put_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt', $was_posts+1);
             file_put_contents("NUMBER_OF_TOPICS789221", $number);
             file_put_contents($number . 'INFO', $topicname);
             file_put_contents($number . 'creationDate', $topicdate);
             file_put_contents($number . 'numberPosts', $posts);
             file_put_contents($number . 'lastPost', $topicdate);
             $string = '<?php include "../logger.php" ?><head><meta charset="utf-8"></head><h1><a href="/forum/">' . '<|' . $topicname . '</a></h1>';
             $string = $string . "<br><p class='post'>Пост №1. Автор: <a href='/@/" . $user . "'>" . $user . "</a> (" . $topicdate . ")<br>" . $post . "<br></p><script src='answer.js'></script>";
             file_put_contents($number . 'POSTS', $string);
             echo('<script>window.open("/forum/?result=created", "_self")</script>');
     };
?>