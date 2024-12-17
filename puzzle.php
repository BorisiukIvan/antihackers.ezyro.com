<?php include 'header.php' ?>
<head>
<meta name='description' content='Play chess for free on 4 servers!'>
<meta name='keywords' content='chess'>
<script>
function changeServer() {
    var servers = ['https://play.chessbase.com', 'https://chess-samara.ru/embed/game/?fontFamily=Arial&bodyBgColor=&bgColor1=&bgColor2=', 'http://chesster.ru?embed=http://antihackers.ezyro.com', 'https://chess.org'];
    document.getElementById('server' + server).hidden = 1;
    server = ( server+1 ) % servers.length;
    document.getElementById('server' + server).hidden = 0;
    document.getElementById('server' + server).src = servers[server];
    document.getElementById('srv').innerHTML = servers[server].split("//")[1].split("/")[0].split("?")[0];
    return 0;
}
</script>
<style>
iframe {
    width: 80%;
    height: 75%;
}
</style>
</head>
<hr>
<center>
<iframe id='server0' src="https://play.chessbase.com"></iframe>
<iframe id='server1' name="cswindow" src="" border="0" style="border: none;" hidden=1></iframe>
<iframe id='server2' src='' class='lichess-iframe' allowtransparency='true' frameBorder='0' title='Lichess free online chess' hidden='1'></iframe>
<iframe id='server3' src="" frameborder="0" style="border: none; padding: 0; margin:0" hidden=1><p>Your browser does not support iframes.</p></iframe><br>
<p id='p'>Выбран сервер: <b id='srv'>play.chessbase.com</b></p>
<button onclick='changeServer()' style='width: 50%; height: 40px; background-color: blue; color: white; text-align: center'>Поменять сервер (4 сервера доступно)</button>
</center>
<script>var server = 0;</script>