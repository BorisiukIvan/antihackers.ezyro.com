<?php include '../header.php' ?>
<?php
   $error1 = 0;
   $error2 = 0;
   $error3 = 0;
   $error4 = 0;
   if ($_SERVER['REQUEST_METHOD'] == "POST") {
      $name = strtolower($_POST['name']);
      $alphabet = 'qwertyuiopasdfghjklzxcvbnm1234567890-_';
      for ($i = 0; $i < strlen($name); $i++) {
           if (strpos($alphabet, $name[$i]) === false) {
               $error1 = 1;
               break;
           }
      }
      if ( file_exists($name . ".php") ) $error2 = 1;
      $users = array_unique(explode(',', $account . ',' . $_POST['users']));
      $data = "['";
      if (count($users) > 5) {
          $error4 = 1;
      } else { 
          for ($user = 0; $user < count($users); $user++) {
              if (!file_exists('../@/' . $users[$user] . '/index.php')) {
                  $error3 = 1;
                  break;
              } else {
                  $data = $data . $users[$user] . "', '";
              }
          }
      }
      if ((!$error1) && (!$error2) && (!$error3) && (!$error4)) {
          $data = $data . "']";
          file_put_contents($name . '.php', '<?php $inbox_arr = ' . $data . ' ?><?php include "../header.php" ?><?php include "inbox_header.php" ?>');
          for ($user = 0; $user < count($users); $user++) {
              file_put_contents('Ainboxes_of_' . $users[$user] . '_707070', $name . "\n" . file_get_contents('Ainboxes_of_' . $users[$user] . '_707070'));
          }
          header("Location: " . $name . ".php");
          echo("<script>window.open('" . $name . ".php', '_self')</script>");
      }
   }
?>
<br><br>
<!DOCTYPE html>
<html>
<head>
<style>
* {
  box-sizing: border-box;
}

input[type=text], select, textarea, input[type=password] {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
</head>
<body>

<h2>Новая переписка</h2>
<div class="container">
  <form action="newinbox.php" method='POST'>
  <div class="row">
    <div class="col-25">
      <label for="fname">Название переписки (помогает найти её)</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="name" placeholder="Например, fish224_98" minlength=2 maxlength=15 required>
      <small style='color: red' id='condition1'>Используйте только цифры, латинские символы, подчёркивание или чёрточку</small>
      <small style='color: red' id='condition2'>Такая переписка уже существует</small>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Укажите аккаунты, которые будут иметь доступ к этой переписке через запятую (Ваш аккаунт будет добавлен автоматически)</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="users" placeholder="Например, fish224,rwanda111,iloveyou7" minlength=2 maxlength=50 required>
      <small style='color: red' id='condition3'>Один или несколько аккаунтов еще не зарегестрированы!</small>
      <small style='color: red' id='condition4'>Максимальное количество добавленных аккаунтов - 5</small>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Создать переписку">
  </div>
  </form>
</div>

<script>
if (!<?=$error1?>) {
    document.getElementById('condition1').setAttribute('hidden', 1);
}
if (!<?=$error2?>) {
    document.getElementById('condition2').setAttribute('hidden', 1);
}
if (!<?=$error3?>) {
    document.getElementById('condition3').setAttribute('hidden', 1);
}
if (!<?=$error4?>) {
    document.getElementById('condition4').setAttribute('hidden', 1);
}
</script>
</body>
</html>