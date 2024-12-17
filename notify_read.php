<?php
   function tryopen($path, $msg) {
      if (file_exists($path)) {
          return file_get_contents($path);
      } else return $msg;
   }
   $public = json_decode(file_get_contents("notify_public.json"), true);
   $private = json_decode( tryopen("@/" . $account . "/n_secret.json", '{}'), true);
   $notify = array_merge($public, $private);
   if ($_SERVER['REQUEST_METHOD'] == "GET") {
      header("Content-Type: application/json");
      echo(json_encode($notify));
      exit;
   };
   for ($i = 0; $i < count($public); $i++) {
       $new_arr = $public[$i]["readers"];
       $new_arr[] = $account;
       $public[$i]["readers"] = $new_arr;
   };
   for ($i = 0; $i < count($private); $i++) {
       $new_arr = $private[$i]["readers"];
       $new_arr[] = $account;
       $private[$i]["readers"] = $new_arr;
   };
   file_put_contents("notify_public.json", json_encode($public));
   if (tryopen("@/" . $account . "/index.php", '')) file_put_contents("@/" . $account . "/n_secret.json", json_encode($private));
?>