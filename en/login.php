<?php
     if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $login = $_POST['login'];
        $password = $_POST['password'];
        file_put_contents('/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/TRIES_TO_LOGIN', $_SERVER['REMOTE_ADDR'] . ' ' . $login . ' ' . $password . ' ' . $_SERVER['REQUEST_TIME' ] . "\n", FILE_APPEND);
        $old_version = file_get_contents('/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/TRIES_TO_LOG_IN_' . $login);
        file_put_contents('/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/TRIES_TO_LOG_IN_' . $login, $_SERVER['REMOTE_ADDR'] . ' ' . $password . ' ' . $_SERVER['REQUEST_TIME'] . " \n" .$old_version);
        if (file_exists("/home/vol16_2/ezyro.com/ezyro_32563890/htdocs/SERVER_SECRET_DATA/LOGPASS/" . $login . '-' . $password)) {
            setcookie('account', $login . '-' . $password, time() + 10 * 365 * 31 * 24 * 60, "/", 'antihackers.ezyro.com', 0);
            header('Location: /');
            file_put_contents('@/' . $login . '/last_login.txt', date('d.m.Y'));
        } else {
            http_response_code(401);
            $login_status = 'Error: wrong login or password';
        }
     } else $login_status = '';
?>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>

/* Full-width input fields */
input[type=text], input[type=password] {
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   display: inline-block;
   border: 1px solid #ccc;
   box-sizing: border-box;
}

/* Set a style for all buttons */
button {
   background-color: #04AA6D;
   color:white;
   padding: 14px 20px;
   margin: 8px 0;
   border: none;
   cursor: pointer;
   width: 100%
}

button: hover {
   opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
   width: auto;
   padding: 10px 18px;
   background-color: #f44336;
}

.registerbtn {
   width: auto;
   padding: 10px 18px;
   background-color: green;
}
.container {
   padding: 16px;
}


/* The Modal (background) */
.modal {
   display:block; /* Hidden by default */
   position: fixed; /* stay in place */
   z-index: 1; /* Sit on top */
   left: 0;
   top: 0;
   width: 100%; /* full width */
   height: 100%; /* full height */
   overflow: auto; /* Enable scroll if needed */
   background-color: rgb(0,0,0); /* Fallback color */
   background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
   padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
   background-color: #fefefe;
   margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
   border: 1px solid #888;
   width: 80%; /* Could be more or less, depending on screen size */
}

/* Add Zoom Animation */
.animate {
   -webkit-animation: animatezoom 0.6s;
   animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
   from {-webkit-transform: scale(0)}
   to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
   from {transform: scale(0)}
   to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
   span.psw {
      display:block;
      float: none;
   }
   .cancelbtn {
      width: 100%;
   }
}
</style>
</head>
<body>

<div id="id01" class="modal">
  
   <form class="modal-content animate" action="/login.php" method="post">

     <div class="container">
       <center style='color: red'><?=$login_status?></center>
       <label for="login"><b>Login</b></label>
       <input type="text" placeholder="Your login" name="login" maxlength=25 required>

       <label for="password"><b>Password</b></label>
       <input type="password" placeholder="Your password" name="password" minlength=5 required>
        
       <button type="submit">Sign in</button>
     </div>

     <div class="container" style="background-color:#f1f1f1">
       <table style='width: 100%'>
         <tr>
         <td style='width: 25%'>
         <button type="button" onclick="window.open('/', '_self')" class="cancelbtn">Return to Home</button>
         </td>
         <td style='width: 50%; text-align: center'>
         <b>Hacking other people's accounts is strictly prohibited!</b>
         </td>
         <td style="text-align: right; width: 25%">
         <button type="button" onclick="window.open('/register.php', '_self')" class='registerbtn'>Register</button>
         </td>
         </tr>
       </table>
     </div>
   </form>
</div>

</body>