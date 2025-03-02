<?php include '../header.php' ?>
<html>
<head>
<title>Форум</title>
<meta charset="utf-8">
<script>
function sendRequest(page) {
       var req = new XMLHttpRequest;
       req.open("GET", page, false);
       req.send();
       if (req.status == 200) return req.responseText; else return req.status;
};
</script>
<style>
#forum-posts { 
    width: 100%;
}
</style>
</head>
<body><br>
<span hidden=1 id='topicSuccess' style='color:green'>Получилось!<br></span>
<span hidden=1 id='topicFail' style='color:red'>Что-то пошло не так..<br></span>
<table width="100%">
<tr>
<td><p style="font-size:35px;"><span style="color:blue">Темы</span></p></td>
<td></td>
</tr>
</table>
<table id='table1'><tr><td><button id='newtopic' title='Доступно только зарегистрированным пользователям!' disabled=1 onclick='document.getElementById("newTopicForm").hidden=0'>Новая Тема</button></td><td></tr></table>
<form hidden=1 action="create_new_topic.php" method='POST' id='newTopicForm'><br>
<label for='topicName'>Имя темы:</label><br>
<input id='topicName' maxlength=60 name='topicName' required><br>
<label for='myPost'>Ваш пост:</label><br>
<textarea id='myPost' maxlength=5000 name='myPost' style="height:300px; width:600px" required></textarea><br>
<input type='checkbox' id='myCheckbox' name='myCheckbox' required>
<label for='myCheckbox'>В наших <a href='/rules.php'>правилах</a> запрещен флуд, а также повторять несколько сообщений сразу или постить слишком быстро. Я даю честное слово, что мой пост не содержит этих нарушений</label><br>
<button type='sumbit'>Опубликовать мой пост на форуме</button>
</form>
<table id="forum-posts" style="width: 100%">
<tr><td>Название</td><td>Дата создания</td><td>Дата последнего поста</td><td>Кол-во постов</td></tr>
<?php
    $_DATA = json_decode(file_get_contents("data.json"), true);
    foreach ($_DATA as $k => $v) {
         echo('<tr><td><a href="' . $k . 'POSTS">' . $v["name"] . '</a></td><td>' . $v["creation"] . '</td><td>' . $v["lastPost"] . '</td><td>' . $v["posts"] . "</td></tr>");
    };
/*
    $topics = file_get_contents("NUMBER_OF_TOPICS789221");
    echo("<table id='forum-posts'>");
    echo("<tr><td>Название</td><td>Дата создания</td><td>Дата последнего поста</td><td>Кол-во постов</td></tr>");
    for ($n = $topics; $n > $topics - 10; $n--) {
        if (!file_exists($n . 'INFO')) break;
        $link = $n . "POSTS";
        echo('<tr><td><a href="' . $link . '">' . file_get_contents($n . 'INFO') . '</a></td><td>' . file_get_contents($n . 'creationDate') . '</td><td>' . file_get_contents($n . 'lastPost') . '</td><td>' . file_get_contents($n . 'numberPosts') . "</td></tr>");
    };
    echo("</table>");
    echo("<input id='computerId' hidden=1 value='" . rand() * 79 ."'>");
    echo("<span hidden=1 id='topics'>" . strval(intval($topics) - 10) . "</span>");
*/
?>
</table>
<script>
document.getElementById('table1').style.width = '100%';
if (location.search.split("result=").length > 1) {
    var result = location.search.split("result=")[1].split("&")[0];
    if (result == 'success') {
        document.getElementById("topicSuccess").hidden = 0;
    } else if (result == 'fail') {
        document.getElementById('topicFail').hidden = 0;
    };
};
if (!<?=$anon?>) {
    document.getElementById('newtopic').disabled = 0;
    document.getElementById('newtopic').title = '';
};   
</script>
</body>
</html>