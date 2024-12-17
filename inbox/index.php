<?php include '../header.php' ?>
<br><br>
<style>
.inbox_link {
    text-decoration: none;
    color: black;
    font-size: 32px;
}
.inbox_link:hover {
    color: blue;
}
</style>
<div style='text-align: right'><a href='newinbox.php' style='display: block'>НОВАЯ ПЕРЕПИСКА</a></div>
<div style='text-align: center'>
<i>Переписки, к которым Вы имеете доступ</i><br><br>
<?php
if (file_exists('AAunreadInbox_' . $account . '_707070')) {
    $unread = explode("\n", file_get_contents('AAunreadInbox_' . $account . '_707070'));
    for ($i = 0; $i < count($unread)-1; $i++) {
      echo("<b><a href='" . $unread[$i] . ".php' class='inbox_link'>" . $unread[$i] . "</a> (НЕПРОЧИТАННЫЕ СООБЩЕНИЯ)</b><br><br>");
    }
    echo("<hr>");
};
if (file_exists('Ainboxes_of_' . $account . '_707070')) {
    $allmsg = explode("\n", file_get_contents('Ainboxes_of_' . $account . '_707070'));
    for ($i = 0; $i < count($allmsg); $i++) {
         echo("<a href='" . $allmsg[$i] . ".php' class='inbox_link'>" . $allmsg[$i] . "</a><br><br>");
    }
} else echo("<b>У вас нету переписок</b>");
?>
</div>
<form action='/clear_notify.php' method='POST'>
<button style='height: 50px; width: 200px' type='submit'>Пометить все сообщения как прочитанные</button>
</form>