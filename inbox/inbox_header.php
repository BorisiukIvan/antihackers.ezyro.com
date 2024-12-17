<?php
   if (!$inbox_arr) exit;
   if (array_search($account, $inbox_arr, true) === false) exit;
   function tryopen($path, $msg) {
      if (file_exists($path)) {
          return file_get_contents($path);
      } else return $msg;
   }
   if ($_SERVER['REQUEST_METHOD'] == "POST") {
       file_put_contents("/home/vol16_2/ezyro.com/ezyro_32563890/htdocs" . $_SERVER['SCRIPT_NAME'], '<b>' . $account . '</b>' . ': ' . str_replace("\n", "<br>", htmlspecialchars($_POST['text'])) . '<br><br>' . "\n", FILE_APPEND);
       for ($i = 0; $i < count($inbox_arr)-1; $i++) {
           if ($inbox_arr[$i] == $account) continue;
           $private = json_decode( tryopen("../@/" . $inbox_arr[$i] . "/n_secret.json", '{}'), true);
           $current = array("type"=>"msg", "sender"=>str_replace(['/inbox/', '.php'], ['', ''], $_SERVER['SCRIPT_NAME']), "link"=>$_SERVER['SCRIPT_NAME'], "text"=>htmlspecialchars($_POST['text']), "readers"=>[]);
           $private[] = $current;
           file_put_contents("../@/".$inbox_arr[$i]."/n_secret.json", json_encode($private));
           file_put_contents("AAunreadInbox_" . $inbox_arr[$i] . "_707070", str_replace(['/inbox/', '.php'], ['', ''], $_SERVER['SCRIPT_NAME']) . "\n" . file_get_contents("AAunreadInbox_" . $inbox_arr[$i] . "_707070"));
       }
       echo("<script>window.open(location, '_self')</script>");
   }
?>
<script src='comment.js'></script>
<br><br>
<table style='width: 100%'>
<tr>
<td style='width: 40%'><a href='/inbox/' style='font-size: 40px; text-decoration: none'><</a></td><td><span style='font-size: 32px'>ПЕРЕПИСКА <small><?php echo(str_replace(['/inbox/', '.php'], ['', ''], $_SERVER['SCRIPT_NAME'])) ?></small></span></td>
</tr>
</table>
<p>Доступ имеют: <?php for ($i = 0; $i <= count($inbox_arr); $i++) echo('<b>' . $inbox_arr[$i] . '</b> ') ?> </p><br><br>