<?php include 'header.php' ?>
<?php
   if ($_SERVER['REQUEST_METHOD'] == 'POST') {
       file_put_contents('zayavki', json_encode($_POST) . ' ' . $account . "\n", FILE_APPEND);
       echo("<center>Заявка успешно отправлена!</center>");
   };
?>
<br>
<style>
* {
  box-sizing: border-box;
}

#regForm {
  background-color: #ffffff;
  margin: 100px auto;
  font-family: Raleway;
  padding: 40px;
  width: 70%;
  min-width: 300px;
}

h1 {
  text-align: center;  
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

button {
  background-color: #04AA6D;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
  background-color: #bbbbbb;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #04AA6D;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
</style>
<body>

<form id="regForm" action="/welcome.php" method='post'>
  <h1>Cотрудничество</h1>
  <p style='text-align: center'>Антихакеры - это молодая организация, и нам не хватает людей. Если кто-то хочет помогать другим, запишитесь!</p>
  <!-- One "tab" for each step in the form: -->
  <div class="tab">Информация о Вас (чтобы мы знали, кто Вы такой)<br><br>
    <p><input placeholder="Ваше ФИО или псевдоним.." oninput="this.className = ''" name="myname" minlength=2 maxlength=200></p>
    <p><input placeholder="Ваш возраст (не влияет на результат Вашей заявки)" oninput="this.className = ''" name="age" type="number"></p>
    <p><input placeholder="Страна проживания" oninput="this.className = ''" name="country"></p>
  </div>
  <div class="tab">В какой отделе Антихакеров Вы бы хотели работать (возможны несколько вариантов):<br><br>
    <label class="container">Новостной отдел
    <input type="checkbox" checked="checked" name='1'>
    <span class="checkmark"></span>
    </label>
    <label class="container">Спонсорский отдел
    <input type="checkbox" name='2'>
    <span class="checkmark"></span>
    </label>
    <label class="container">Художественный отдел (создание видео)
    <input type="checkbox" name='3'>
    <span class="checkmark"></span>
    </label>
    <label class="container">Армия Антихакеров
    <input type="checkbox" name='4'>
    <span class="checkmark"></span>
    </label>
    <label class="container">Отдел программистов
    <input type="checkbox" name='5'>
    <span class="checkmark"></span>
    </label>
    <label class="container">Другое
    <input type="checkbox" name='6'>
    <span class="checkmark"></span>
    </label>
  </div>
  <div class="tab">Ваша почта, чтобы мы смогли Вам ответить
    <p><input placeholder="example@gmail.com" oninput="this.className = ''" name="email" type="email"></p>
  </div>
  <div class="tab">Расскажите о себе побольше..<br><br>
    <textarea name='comments' style='width: 50%; height: 500px'></textarea>
  </div>
  <div style="overflow:auto;">
    <div style="float:right;">
      <button type="button" id="prevBtn" onclick="nextPrev(-1)">Назад</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)">Дальше</button>
    </div>
  </div>
  <!-- Circles which indicates the steps of the form: -->
  <div style="text-align:center;margin-top:40px;">
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
  </div>
</form>

<script>
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Дальше";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
</script>

</body>
</html>