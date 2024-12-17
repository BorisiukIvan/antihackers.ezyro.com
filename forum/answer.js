function getCookie(name) {
       if (document.cookie.search(name + "=") == -1) return 0;
       return document.cookie.split(name + "=")[1].split(";")[0];
};
var x = getCookie("account");
var elem = document.createElement("p");
if (x) elem.innerHTML = "<pre><br>Ответить в этой теме<br><br><form action='ans.php'><input hidden=1 name='topic' value=" + window.location.href.split("/forum/")[1].split("POSTS")[0] + "><textarea name='yourpost' style='width:500px; height:300px'></textarea><br><button type='submit'>Оставить пост</button></form></pre>"; else elem.innerHTML = "<pre><br>Чтобы создавать темы или оставлять сообщения в уже созданных темах, вам необходимо <a href='/login.php'>войти</a> или <a href='/register.php'>зарегистрироваться</a></pre>";
var p = document.getElementsByClassName("post").length - 1;
document.getElementsByClassName('post')[p].appendChild(elem);
if (location.search == '?reolad') {
    location.reload();
};