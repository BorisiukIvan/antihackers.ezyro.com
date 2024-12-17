<?php include 'header.php'; ?>
<?php
if ($anon) {
    echo("<br><form action='index.php' method='POST'><input hidden='hidden' name='translate' value='translate this website please!!!'>Don't speaking russian? Click <button type='submit'>here</button> for vote for translating this website! Link on <a href='/en/'>English version</a> (only general pages avaivble)</form><br>");
};
?>
<style>
.big-button {
    text-align: center;
    padding: 32px 32px 32px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: #EEEEEE;
    cursor: pointer;
    height: 150px;
}
.big-button:hover {
    background-color: #BBBBBB;
}
.desc {
    font-size: 28px;
}
.desc:hover {
    color: blue;
}
.wh {
    font-size: 12px;
    cursor: help;
}
.hello {
    font-size: 32px;
    text-align: center;
}
.form-div {
    text-align: center;
    width: 60%;
}
.form-input {
    width: 100%;
    height: 50px;
    border-bottom: 4px solid;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    font-size: 18px;
}
.form-input:focus {
    border-left: none;
    border-right: none;
    border-top: none;
    border-bottom: 4px solid blue;
}
.my-textarea {
    width: 100%;
    height: 500px;
    font-size: 18px;
}
.submit-button {
    width: 300px;
    height: 50px;
    background-color: #00AF00;
}
.submit-button:hover {
    background-color: #009900;
}
.my-footer {
    text-align: center;
    font-size: 16px;
}
.user {
    font-size: 24px;
}
.three_td {
    text-align: center;
}
p {
    font-size: 17px;
}
summary {
    text-decoration: underline;
    font-size: 25px;
    color: blue;
    cursor: pointer;
}
</style>
<br><br>
<div class='hello'>Здравствуйте, чем можем помочь?</div><br>
<table width='100%'>
   <tr>
     <td style='width: 33%'>
        <div class='big-button' onclick='window.open("/bad.php", "_self")'>
            <p class='desc'>НАПИСАТЬ ЗАЯВЛЕНИЕ</p>
            <p class='wh'>Нажмите, если Вас взломали, Ваш сайт атакуют, Вы нашли мошенников, взломали Вашего знакомого, Вы нашли читера..</p>
        </div>
     </td>
     <td style='width: 33%'>
        <div class='big-button' onclick='window.open("/articles/hack-protect/", "_self")'>
            <p class='desc'>КАК ЗАЩИТИТЬСЯ ОТ ХАКЕРОВ?</p>
            <p class='wh'>Немного статей о том, как правильно обезопасить себя в интернете</p>
        </div>
     </td>
     <td style='width: 33%; text-align: right'>
        <div class='big-button' onclick='alert("API пока что находится в стадии разработки!")'>
            <p class='desc'>Antihackers API</p>
            <p class='wh'>API для лучшего взаимодействия с нашей организацией</p>
        </div>
     </td>
   </tr>
   <tr>
     <td style='width: 33%'>
        <div class='big-button' onclick='window.open("/welcome.php", "_self")'>
            <p class='desc'>ПОДАТЬСЯ К НАМ НА РАБОТУ</p>
            <p class='wh'>Если Вы хотите помогать другим - это прекрасно!</p>
        </div>
     </td>
     <td style='width: 33%;'>
        <div class='big-button' onclick='window.open("/register.php", "_self")'>
            <p class='desc'>ЗАРЕГИСТРИРОВАТЬСЯ</p>
            <p class='wh'>Общайтесь в чате, на форуме, в личных сообщениях, развивайте свой мозг примерами и играйте в шахматы онлайн!</p>
        </div>
     </td>
     <td style='width: 33%'>
        <div class='big-button' onclick='window.open("/projects.php", "_self")'>
            <p class='desc'>НАШИ ПРОЕКТЫ</p>
            <p class='wh'>Например библиотека, шахматный бот и так далее</p>
        </div>
     </td>
   </tr>
</table>
<hr>
<section style='width: 100%'>
<details>
<summary>Кто такие Антихакеры?</summary>
<p>Антихакеры - это организация, которая защищает интернет от мошенников, хакеров, читеров и другого даркнета. Антихакеры были созданы 11 сентября 2022 года, и они продолжают развиватся. <a href='/about-us.php'>Прочитать больше</a></p>
</details>
<details>
<summary>Какие услуги мы предоставляем?</summary>
<ol>
<li>Мы предлагаем Вам поддержку, если с Вами что-то случится в интернете (взломали аккаунт, пытались взломать аккаунт, рейд вашего сайта и так далее). Чтобы написать нам заявление, <a href='/bad.php'>нажмите здесь</a></li>
<li>У нас есть разные статьи, где мы объясняем, как защитится от хакеров (будут потом)</li>
<li>Готовы проконсултироваться с Вами по почте по ЛЮБОМУ вопросу, который касается интернета!</li>
<li>Дополнительная защита Вашего сайта от рейда и взлома.</li>
<li>БАН читеров. Чтобы написать нам заявление, <a href='/bad.php'>нажмите здесь</a></li>
</ol>
</details>
<details>
<summary>Какая цена за наши услуги?</summary>
<p><b>Все наши услуги абсолютно бесплатны</b>. Мы искренне верим в то, у всех людей есть право на безопасность в интернете, независимо от того, есть ли у них деньги, или нет. Если Вы хотите задонатить, мы предлагаем Вам <a href='https://www.44.ua/ru/news/3501116/kak-vy-mozete-pomoc-ukraine-i-armii-dengami-vo-vrema-vojny-top-oficialnyh-blagotvoritelnyh-programm'>список проверенных организаций, которые помогают Украине, на которые можно перевести деньги.</a></p>
</section>
<details>
<summary>Наша команда</summary>
<div class='antihacker'>
<table style='width: 100%'>
    <tr>
        <td class='three_td' onclick="window.open('/@/fish224', '_self')">
            <img src='/ukrhack.ico'><br>
            <p class='user'>Иван Борисюк</p>
            <p>Страна: <b>Украина/Швейцария</b></p>
            <center>
            <p class='about'>Создатель Антихакеров и этого сайта, лидер организации. Родился в Киеве, Украина, но с начала войны переехал в Швейцарию.</p>
            </center>
        </td>
        <td class='three_td' onclick="window.open('/@/Eror404', '_self')">
            <img src='/ukrhack.ico'><br>
            <p class='user'>Eror404</p>
            <p>Страна: <b>россия</b></p>
            <center>
            <p class='about'>Антихакер, ищет фишинговые веб-сайты и сообщает мне.</p>
            </center>
        </td>
    </tr>
</table>
</details>
<details>
<summary>Предоставляем ли мы услуги взлома?</summary>
<p><b>Нет</b>. Мы не взламываем про так, ради денег - напротив, мы боремся с хакерами и их плохими делами. Однако если у Вас есть очень важная причина взломать кого-то, мы предлагаем Вам написать нам по форме ниже и мы очень постараемся решить эту проблему.<p>
</details>
<details>
<summary>Вопросы о сотрудничестве</summary>
<p><i>Мы всегда хотим сотрудничать с Вашим сайтом</i>. Чтобы начать сотрудничать с нами, опять-таки, напишите нам по форме ниже.</p>
</details>
<hr>
<div class='hello'>Если Ваша проблема еще не решена, напишите нам!</div>
<center>
<div class='form-div'><br><br>
<form action='/index.php' method='POST'>
<input class='form-input' type='text' name='myname' placeholder='Ваше имя (необязательно)'><br><br>
<input class='form-input' type='email' name='email' placeholder='Ваша почта' required><br><br>
<textarea class='my-textarea' name='body' placeholder='Текст вашего сообщения'></textarea><br><br>
<button class='submit-button' type='submit'>Отправить</button>
</form>
</div>
</center>
<br><br><br><br><br><br>
<footer class='my-footer'>2022-2023 © Антихакеры. Спасибо <a href='https://w3schools.com'>w3schools</a> за материалы по CSS и <a href='https://profreehost.com'>ProFreeHost</a> за бесплатный хостинг</footer></footer>
</body>
</html>