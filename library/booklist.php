<?php include 'header.php' ?>
<?php $list = file_get_contents('booknumber'); ?>
<html>
<p>Это список всех книг, которые есть в библиотеке. Сначала самые новые.</p>
<ul id='list'>
</ul>
<script>
var l = '<?=$list?>'.split("\n");
for (var i = 0; i < l.length-1; i++) {
    var n = document.createElement("li");
    document.getElementById('list').appendChild(n);
    n.innerHTML = l[i];
}
</script>
<p>Хотите загрузить свою книгу? <a href='newbook.php'>НЕТ ПРОБЛЕМ</a>!</p>
</html>