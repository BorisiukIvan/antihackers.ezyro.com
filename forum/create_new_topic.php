<?php
     if ($_SERVER['REQUEST_METHOD'] != 'POST') exit;
     $user = explode('-', $_COOKIE['account'])[0];
     if (!file_exists('../SERVER_SECRET_DATA/LOGPASS/' . $_COOKIE['account'])) {
             echo('<script>window.open("/forum/?result=fail", "_self")</script>');
             exit;
     } else if ($user == "Otryzhkin777") {
             echo("Вы больше не можете писать на форуме из-за намеренного нарушения правил.");
             exit;
     } else {
             $topicname = htmlspecialchars($_REQUEST['topicName']);
             $topicdate = date('Y-m-d H:i:s');
             $post = str_replace("\n", "<br>", htmlspecialchars($_REQUEST['myPost']));
             $number = file_get_contents("NUMBER_OF_TOPICS789221") + 1;
             $was_posts = file_get_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt');
             file_put_contents('../@/' . explode('-', $_COOKIE['account'])[0] . '/forum_posts.txt', $was_posts+1);
             file_put_contents("NUMBER_OF_TOPICS789221", $number);
             $_TOPIC = array();
             $_TOPIC["name"] = $topicname;
             $_TOPIC["creation"] = $topicdate;
             $_TOPIC["posts"] = 1;
             $_TOPIC["lastPost"] = $topicdate;
             $string = '<?php include "../logger.php" ?><head><meta charset="utf-8"></head><h1><a href="/forum/">' . '<|' . $topicname . '</a></h1>';
             $string = $string . "<br><p class='post'>Пост №1. Автор: <a href='/@/" . $user . "'>" . $user . "</a> (" . $topicdate . ")<br>" . $post . "<br></p><script src='answer.js'></script>";
             file_put_contents($number . 'POSTS', $string);
             $_DATA = json_decode(file_get_contents("data.json"), true);
             $_DATA = array($number => $_TOPIC) + $_DATA;
             file_put_contents("data.json", json_encode( (object) $_DATA, JSON_PRETTY_PRINT));
             echo('<script>window.open("/forum/?result=created", "_self")</script>');
     };
?>