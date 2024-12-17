<html>
<head>
<meta charset='utf-8'>
<meta name="keywords" content="hacking, lichess, forum">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="FREE consultation or help for anything that concerns bad people on the internet!">
<meta name="google-site-verification" content="Ei2nvhlQa6lwlev8ienhTnFuY5FiRaVZmfaHVDBpKL8" />
<title>Anti-Hackers</title>
<link href='/ukrhack.ico' rel='icon' type='image/icon' size='32x32'>
<script>
function checkNotify() {
     var req = new XMLHttpRequest();
     req.open("GET", "/notify_read.php", false);
     req.send();
     var arr = JSON.parse(req.responseText);
     for (var i = 0; i < arr.length; i++) {
         var elem = document.createElement("a");
         elem.setAttribute("href", arr[i].link);
         elem.innerHTML = '<b class="notify_b">' + arr[i].sender + '</b><br><br><span class="notify_txt">' + arr[i].text + '</span>';
         if (arr[i].readers.includes('<?=$account?>')) {
             elem.className = 'notify';
         } else {
             elem.className = 'notify new';
             document.getElementById('notify_parent').className = 'dropbtn new';
         };
         document.getElementById('notify_list').appendChild(elem);
     };
}
function clearNotify() {
     var req = new XMLHttpRequest();
     req.open("POST", "/notify_read.php", false);
     req.send();
     location.reload();
}
</script>
<style>
body {
   background-color:#cccccc;
}
header ul {
   list-style-type: none;
   margin: 0;
   padding: 0;
   overflow: hidden;
   background-color: #38444d;
}

li.item {
   float: left;
}

a.item, .dropbtn {
   display: inline-block;
   color: white;
   text-align: center;
   padding: 14px 16px;
   text-decoration: none;
}

a.item:hover, .dropdown:hover .dropbtn {
   background-color: red;
}

li.dropdown {
   display: inline-block;
}

.dropdown-content {
   display: none;
   position: absolute;
   background-color: #f9f9f9;
   min-width: 160px;
   max-width: 300px;
   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
   z-index: 1;
}

.dropdown-content a {
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display:block;
   text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
   display:block;
}

.notify {
     border-top: 1px solid black;
     border-bottom: 1px solid black;
     padding: 20px
}

.notify_b {
     font-size: 14px;
}

.new {
     background-color: orange;
}

.timer {
     position: fixed;
     text-align: center;
     display: inline-block;
     padding: 14px 16px;
     color:white;
     font-size: 18px;
}
</style>
</head>
<body>
<header>
<ul>
   <li class="item"><a href="/" class="item">Home</a></li>
   <li class="dropdown item">
     <a href="javascript:void(0)" class="dropbtn item">Important</a>
     <div class="dropdown-content">
       <a href="/bad.php">Complaint</a>
       <a href="/articles/">Our blog</a>
       <a href="/docs/">Our Documents</a>
       <a href="/welcome.php">Become an anti-hacker</a>
       <a href="/protect.php">Cooperation</a>
     </div>
   </li>
   <li class="dropdown item">
    <a href="javascript:void(0)" class="dropbtn item">Language</a>
    <div class="dropdown-content">
      <a href="/setlang.php?code=en">English</a>
      <a href="/setlang.php?code=ru">Русский</a>
    </div>
  </li>
   <li class="dropdown item">
     <a href="javascript:void(0)" class="dropbtn item">Games</a>
     <div class="dropdown-content">
       <a href="/puzzle.php">Play Chess</a>
       <a href="/chess.php">Solve chess problems</a>
       <a href="/math.php">Solve Examples</a>
       <a href='/reaction.php'>Measure reaction</a>
     </div>
   </li>
   <li class="dropdown item">
     <a href="javascript:void(0)" class="dropbtn item">Communication</a>
     <div class="dropdown-content">
       <a href="/forum/">Forum</a>
       <a href="/4at.php">Chat</a>
       <a href="/best_pl.php">Leaderboard</a>
       <a href='/inbox/'>Private Messages</a>
     </div>
   </li>
   <li class="dropdown item">
     <a href="javascript:void(0)" class="dropbtn item">Other</a>
     <div class="dropdown-content">
       <a href="/pswd.php">Check password</a>
       <a href="/projects.php">Our projects</a>
       <a href="/rules.php">Site Rules</a>
       <a href="/admin_login.php">Login as administrator</a>
     </div>
   </li>
   <li class="item"><a class="item">Last update: 04/10/2023</a></li>
   <li style="float: right" class="item"><a href='/bug.php?page=<?=$_SERVER["SCRIPT_NAME"]?>' class="item">Report a bug</a></li>
   <li class="dropdown item" style="float: right">
     <a href="javascript:void(0)" class="dropbtn item"><?=$account?></a>
     <div class="dropdown-content">
       <?php
          if ($anon) {
              echo("<a href='/login.php'>Login</a>");
              echo("<a href='/register.php'>Register</a>");
          } else {
              echo("<a href='/settings.php'>Settings</a>");
              echo("<a href='/@/" . $account . "'>My profile</a>");
              echo("<a href='/log.php'>Account logs</a>");
              echo("<a href='/logout.php'>Logout</a>");
          }
       ?>
     </div>
   </li>
   <li class="dropdown item" style="float: right">
       <a href="javascript:void(0)" class="dropbtn item" id="notify_parent">Notifications</a>
       <div class="dropdown-content" id='notify_list'>
          <button onclick='clearNotify()' style='border-radius: 0px; width: 100%'>Mark All as Read</button>
       </div>
   </li>
</ul>
</header>
<script>
checkNotify();
</script>
