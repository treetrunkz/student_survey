"use-strict";
    
document.getElementById('student_survey').addEventListener("submit",validate);
    
function validate(e) {
  let validFirstName = validateInput('fname','error-fname'); 
  let validLastName = validateInput('lname','error-lname');
  let validId = validateInput('SID','error-SID'); 
  let validSelect = validateSelectList('size','error-size');
  let validRadio = validateRadio('methods','error-methods');
  let validSpecial = validateInput('special','error-special');
  let validCheckbox = validateCheckBox('checkbox','error-checkbox');

    let all_correct = validFirstName && validLastName && validId && validSelect && validRadio && validSpecial && validCheckbox;
    if (all_correct === false)
	  {
	    e.preventDefault();
	  }  
    }

function validateInput(id, errorId) {
	// Get the value in the field and error field span
	let txtField = document.getElementById(id).value;
	let errField = document.getElementById(errorId);

	// Validate text field
	if(txtField === "" ) {		
    errField.className = 'error';	
    return false;	
  } else {
	  errField.className = 'hidden';
    return true;
    }
  }
	 
function validateRadio(id, errorId) {	   	 	
	// Get all of the radio buttons and the error field
	let methods = document.getElementsByName(id);
	let errMethods = document.getElementById(errorId);	    	  
	// Loop through the array
	let count = 0;
	for (let i=0; i< methods.length; i++) {		
	// If button is checked, hide error & increment count
	if (methods[i].checked === true) {		    	    
		errMethods.className = 'hidden';		    
		count++;		
	}
  }
   // If count is zero, no buttons were checked
	if (count === 0) {
		errMethods.className = 'error';		    
		return false;	   
	} else {
	return true;
  }
}

function validateSelectList(id, errorId) {
	let index = document.getElementById(id).selectedIndex;
	let errField = document.getElementById(errorId);
		
	if(index == 0){
		errField.className = 'error';
		return false;
	} else {
		errField.className = 'hidden';
		return true;
  }
}

function validateCheckBox(id, errorId) {
	let checkBox = document.getElementById(id).checked;
	let errField = document.getElementById(errorId);
		
	if(checkBox === false) {
		errField.className = 'error';
		return false;
	} else {
	  errField.className = 'hidden';
		return true;
  }
}