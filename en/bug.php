<?php
   if ($_SERVER['REQUEST_METHOD'] == "POST") {
      file_put_contents('BugReports', $_SERVER['REMOTE_ADDR'] . ' ' . $_SERVER['HTTP_USER_AGENT'] . ' ' . json_encode($_POST) . ' ' . $account . "\n", FILE_APPEND);
      $stat = 'We will process your data for a maximum of 18 hours. After that, we will try to fix this error.';
   } else $stat = '';
?>
<!DOCTYPE html>
<html>
<head>
<metacharset='utf-8'>
<style>
#main_div {
     width: 40%;
     border: 1px solid black;
     border-radius: 10px;
     padding: 10px;
     background-color: white;
     text-align: left;
}
textarea {
     font-size: 18px;
     width: 80%;
     height: 500px;
}
.button_submit {
     height: 50px;
     width: 30%;
     background-color: #777777;
     font-size: 24px;
}
.button_submit:hover {
     background-color: #e3d299;
}
#result {
     color: green;
     font-size: 16px;
}
</style>
</head>
<body>
<center>
<br><br>
<div id='main_div'>
<p id='result'><?=$stat?></p>
<form action='bug.php' method='POST'>
<input hidden='1' name='page' value='<?=$_GET["page"]?>'>
1. Specify the problem:
<select name='problem' required>
<option value='mistake'>Mistake(s)</option>
<option value='error'>Page not working as expected (code error)</option>
<option value='security'>Security hole</option>
</select><br><br>
2. Brief description of the problem:
<input name="short" required><br><br>
3. Full description of the problem:<br><br>
<textarea name="long" required></textarea><br><br><button type='submit' class='button_submit'>Submit</button></center>
</form>
</div>
</center>
</body>
</html>