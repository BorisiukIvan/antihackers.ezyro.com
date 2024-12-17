<?php
    include "header.php";
    setcookie('lang', $_GET['code'], time() + 10 * 365 * 31 * 24 * 60 * 60, "/", $WEBSITE, 0);
    echo "<script>window.history.back()</script>";
?>