function clearForm()
{
    document.getElementById("form").reset();
}
window.onload = clearForm;

const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit',e=>
{
    e.preventDefault();
    if(validateInputs()){
    window.location.href ="newHome.html";
    }
});
const setError = (element,message) =>
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => 
{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email =>
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateInputs()
{
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();

    if(emailValue === '')
    {
        setError(email,'email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
        return false;
    }
    else{
        setSuccess(email);
    }

    if(passValue === '')
    {
        setError(pass,'password is required');
    }else if (passValue.length < 8 ) {
         setError(pass, 'Password must be at least 8 character.');
         return false;
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(passValue)) {
        setError(pass, 'Password must include atleast 1 letter, 1 number and 1 special character');
        return false;
    }
    else{
        setSuccess(pass);
        return true;
    }   
}