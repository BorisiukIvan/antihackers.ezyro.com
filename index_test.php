<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
       section.block {
           width: 75%;
           height: 400px;
           background-color: white;
           padding: 20px;
           text-align: left;
           display: flex;
           font-family: 'Open Sans', sans-serif;
       }
       section.block:hover {
           background-color: #dddddd;
       }
       .j {
           width: 45%;
           margin-left: 2%;
           margin-right: 2%;
           margin-top: 5px;
           margin-bottom: 5px;
       }
       .flexarea {
           display: flex;
       }
       li, p {
           line-height: 1.5;
       }
    </style>    
</head>
<body>
    <center>
    <br><br>
    <main>
        <section class="block">
            <section class="j">
                 <h2>У ВАС ЕСТЬ ПРАВО НА БЕЗОПАСНОСТЬ!</h2>
                 <p>У каждого человека есть право на безопасность в интернете. И за это право <b>не нужно платить</b>!</p>
                 <div class="flexarea">
                     <ul class="j">
                         <li><a href='/scripts/1.php?domain={%D0%92%D0%B0%D1%88%D0%94%D0%BE%D0%BC%D0%B5%D0%BD}&refUrl={%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B0,%20%D0%BA%D1%83%D0%B4%D0%B0%20%D0%B1%D1%83%D0%B4%D0%B5%D1%82%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%20%D0%BF%D1%80%D0%B8%20%D0%BF%D0%BE%D1%81%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B8%20%D1%84%D0%B8%D1%88%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0}%22'>Защита от фишинга</a></li>
                         <li><a href='/bad.php'>Защита от DDoS-атак</a></li>
                         <li><a href='/articles/hack-protect/'>Статьи по защите от хакеров</a></li>
                         <li><a href='/bad.php'>Помощь если Вас взламывают / взломали</a></li>
                     </ul>
                     <ul class="j">
                         <li><a href='/pswd.php'>Проверка пароля</a></li>
                         <li><a href='#email_us'>Консультация ПО ЛЮБОМУ ВОПРОСУ</a></li>
                         <li><a href='/forum/'>Также есть форум и чат</a></li>
                         <li><a href='/protect.php'>Мы готовы сотрудничать СО ВСЕМИ!</a></li>
                     </ul>
                 </div>
            </section>
            <section class="j">
                 <h2>Кто мы такие?</h2>
                 <p>Мы - организация под названием "Антихакеры", которая существует с 11 сентября 2022 года. Мы верим, что интернет должен быть безопасным и полезным для любого человека, независимо от того, есть ли у него деньги, чтобы заплатить за это. Если у Вас есть любые вопросы, Вы можете обратится к нам в любое время суток!</p>
            </section>
        </section>
    </main>
    </center>
</body>
</html>
