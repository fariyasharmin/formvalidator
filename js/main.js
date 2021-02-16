const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password= document.getElementById("password")
const password2= document.getElementById("password2")

//check required field
function checkRequired(inputArr) {
  inputArr.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    }else{
      showSuccess(input);
    }
  });
}

//check input length

function checkLength (input, min, max) {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at lest ${min} characters`);
    }else if(input.value.length > max) {
      showError(input, `${getFieldName(input)} must be less than${max} characters`);
    }
    else{
      showSuccess(input)
    }
  }


//get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//add eventlistener
form.addEventListener('submit', function(e){
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username,3,15);
  checkLength(password, 6 ,25);
});

// //show input error message
function showError(input,message){
  const formControl = input.parentElement;
  formControl.className='form-control error';
  const small=formControl.querySelector('small');
  small.innerText= message;
}
// //show success outline
function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className='form-control success';
}

// //evenlisteners
// form.addEventListener('submit', function(e){
//   e.preventDefault();
//   if(username.value=== '') {
//     showError(username,'username is required');
//   } else{
//     showSuccess(username)
//   }

//   if(email.value=== '') {
//     showError(email,'email is required');
//   } else if (!isValidEmail(email.value)) {
//     showError(email,'email is not valid');
//   }
//    else{
//     showSuccess(email);
//   }


//   if(password.value=== '') {
//     showError(password,'password is required');
//   } else{
//     showSuccess(password)
//   }

//   if(password2.value=== '') {
//     showError(password2,'password2 is required');
//   } else{
//     showSuccess(password2)
//   }

// });
