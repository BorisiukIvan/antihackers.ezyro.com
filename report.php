<?php
  file_put_contents('RequestsBase', $_SERVER['HTTP_USER_AGENT'] . ' ' .$_SERVER['REMOTE_ADDR'] . ' ' . $_SERVER['REQUEST_TIME'] . ' ' . $_SERVER["SCRIPT_NAME"] . "\n", FILE_APPEND);
  if ($_SERVER['REQUEST_METHOD'] == "GET") {
      http_response_code('302');
      header("Location: /bad.php");
  } else {
      file_put_contents('reports_secret_code', $_SERVER['REMOTE_ADDR'] . ' ' . $_SERVER['HTTP_USER_AGENT'] . ' ' . $_SERVER['REQUEST_TIME'] . ' !WHO:' . $_POST['who'] . '; !NAME:' . $_POST['name'] . '; !BODY:' . $_POST['body'] . "\n", FILE_APPEND);
      http_response_code('303');
      header("Location: /bad.php?ok=1");
  }
?>