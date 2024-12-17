<?php
   header("Content-Type: text/javascript");
   header("Cache-Control: no-cache");
   $domain = $_GET['domain'];
   $refer = $_GET['refUrl'];
   file_put_contents('../SERVER_SECRET_DATA/SCRIPT_LOG', $_SERVER['REMOTE_ADDR'] . ' ' . $_SERVER['Origin'] . ' ' . $domain . ' ' . $refer . "\n", FILE_APPEND);
   echo("var domain = $domain; var domainReal = document.domain; if (domainReal != domain) { var req = new XMLHttpRequest(); req.open('POST', 'http://aps1.c1.biz/report-site.php', false); req.send(JSON.stringify({'site' : domain, 'fake' : domainReal}))); window.open('http://' + domain + '/$refer', '_self') }; }");
?>