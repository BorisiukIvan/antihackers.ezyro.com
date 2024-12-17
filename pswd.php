<?php include 'header.php'?>
<html>
<head>
<style>
.center-div {
    font-size: 24px;
}
.check2 {
    text-align: center;
    width: 40%;
}
.pswd {
    width: 60%;
    font-size: 18px;
    height: 50px;
}
.check-button {
    background-color: blue;
    width: 200px;
    height: 50px;
}
.red {
    background-color: red;
}
.yellow {
    background-color: yellow;
}
.green {
    background-color: green;
}
#div2 {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
<script>
function howManyChiffres(password) {
    var a = [];
    for (let i = 0; i < password.length; i++) {
        if (!a.includes(password[i])) a.push(password[i]);
    }
    return a.length;
}
function strength(password) {
    var funnyPswds = {
        "123456" : 0.1,
        "123456789" : 0.11,
        "12345678" : 0.2,
        "1234567890" : 0.2,
        "12345" : 0.2,
        "1234" : 0.2,
        "1234567" : 0.3
    };
    if (funnyPswds[password]) return funnyPswds[password];
    if (password - 0 == password) {
       var n = howManyChiffres(password);
       if (n == 1) {
           if (password.length < 12) return 0.5;
           return password.length/20;  
       };
       if (n == 2) {
           if (password.length < 9) return 1;
           return password.length/10;
       };
       if ((n == 3) && (password.length > 5)) {
           return password.length/2;
       }
    }
    return howManyChiffres(password)*password.length;
}
function sendReq(x) {
    var req = new XMLHttpRequest;
    req.open("GET", "/pswd.php?pswd=" + x, false);
    req.send();
    return;
}
function checkPswd(password) {
    sendReq(password);
    var x = strength(password);
    document.getElementById('result').removeAttribute('hidden');
    document.getElementById('number').innerText = x;
    if (x < 2) {
        document.getElementById("div2").className = 'red';
        document.getElementById("description").innerText = 'Этот пароль очень легко подобрать';
        return;
    };
    if (x < 50) {
        document.getElementById("div2").className = 'yellow';
        document.getElementById("description").innerText = 'Этот пароль сложно подобрать';
        return;
    };
    document.getElementById("div2").className = "green";
    document.getElementById("description").innerText = 'Этот пароль невозможно подобрать!';
    return;
}
</script>
</head>
<body>
<br>
<center>

<p class='center-div'>Проверка пароля от Антихакеров</p><br><br>


<div class='check2' id='check2'>
     <input class='pswd' id='pswd' placeholder='Введите сюда пароль'>
     <button onclick='checkPswd(document.getElementById("pswd").value)' class='check-button'>Проверить пароль</button><br><br>
     <div id='div2'>
        <b id='result' hidden='1'>Результат: <span id='number'></span></b>
        <p id='description'></p>
     </div>
</div>

</center>

</body>
</html>