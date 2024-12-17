<?php
    $val = $_REQUEST['val'];
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        file_put_contents('protect_requests_secret_code_111999', $_SERVER['REMOTE_ADDR'] . ' ' . json_encode($_POST) . "\n", FILE_APPEND);
        $status = 'Your site protection request has been submitted. Expect a response in a few hours to the specified address';
    } else $status = '';
?>
<br><br>
<p style='color:green'><?=$status?></p>
<!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
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
   min-width: 300px
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

button: hover {
   opacity: 0.8
}

#prevBtn {
   background-color: #bbbbbb;
}

/* Make circles that indicate the steps of the form: */
.step {
   height: 15px;
   width: 15px;
   margin: 02px;
   background-color: #bbbbbb;
   border: none;
   border-radius: 50%;
   display: inline-block;
   opacity: 0.5
}

.step.active {
   opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
   background-color: #04AA6D;
}

.container {
   display:block;
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
   border-radius: 50%
}

/* On mouse over, add a gray background color */
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
   display:block;
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

<form id="regForm" action="/protect.php" method='post'>
   <h1>Cooperation:</h1>
   <!-- One "tab" for each step in the form: -->
   <div class="tab">Choose what exactly will cooperate with us:<br><br>
     <label class="container">Your website
     <input type="radio" checked="checked" name="what" value='site'>
     <span class="checkmark"></span>
     </label>
     <label class="container">Your community (e.g. discord server)
     <input type="radio" name="what" value='server'>
     <span class="checkmark"></span>
     </label>
     <label class="container">You personally
     <input type="radio" name="what" value='account'>
     <span class="checkmark"></span>
     </label>
   </div>
   <div class="tab">Link to your resource (omit if you want to collaborate in person)
     <p><input placeholder="http://antihackers.ezyro.com" oninput="this.className = ''" name="link" value="---"></p>
   </div>
   <div class="tab">Your email so we can reply to you
     <p><input placeholder="example@gmail.com" oninput="this.className = ''" name="email" type="email"></p>
   </div>
   <div class="tab">How would you like to cooperate with us?<br><br>
     <label class="container">Make mutual advertising
     <input type="checkbox" checked="checked" name='showads'>
     <span class="checkmark"></span>
     </label>
     <label class="container">Install our protection on your site
     <input type="checkbox">
     <span class="checkmark"></span>
     </label>
     <label class="container">Keep our site active
     <input type="checkbox">
     <span class="checkmark"></span>
     </label>
   </div>
   <div style="overflow:auto;">
     <div style="float:right;">
       <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
       <button type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
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
     document.getElementById("nextBtn").innerHTML = "Submit";
   } else {
     document.getElementById("nextBtn").innerHTML = "Next";
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
       y[i].className += "invalid";
       // and set the current valid status to false
       valid=false;
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
</body>
</html>