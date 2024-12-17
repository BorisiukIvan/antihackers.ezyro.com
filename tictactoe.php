<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <h1>Tic Tac Toe Game</h1>
            </div>
        </div>
        <div class="layout">
            <div class="game">
                <div class="line">
                    <div class="cell" data-item="0"></div>
                    <div class="cell" data-item="1"></div>
                    <div class="cell" data-item="2"></div>
                </div>
                <div class="line">
                    <div class="cell" data-item="3"></div>
                    <div class="cell" data-item="4"></div>
                    <div class="cell" data-item="5"></div>
                </div>
                <div class="line">
                    <div class="cell" data-item="6"></div>
                    <div class="cell" data-item="7"></div>
                    <div class="cell" data-item="8"></div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="creator">
                <p>Создатель мини-игры: <a href="https://github.com/LittleCat1643">Михаил Батурин</a></p>
            </div>
            <div class="links">
                <div class="github">
                    <a href="https://github.com/LittleCat1643/Tic-Tac-Toe-Game">Репозиторий на GitHub</a>
                </div>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>