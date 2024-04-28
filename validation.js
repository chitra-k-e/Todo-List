function clearForm()
{
    document.getElementById("form").reset();
}
window.onload = clearForm;

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const no = document.getElementById('no');
const age = document.getElementById('age');
const list = document.getElementById('list');

form.addEventListener('submit',e=>
{
    e.preventDefault();
    if(validateInputs()){
    window.location.href ="Ex-3.html";
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
    const nameValue = name1.value.trim();
    const emailValue = email.value.trim();
    const passValue = pass.value.trim();
    const ageValue = age.value.trim();
    const noValue = no.value.trim();
    const listValue = list.value.trim();

    if(nameValue === '')
    {
        setError(name1,'name is required');
    }else if (!/^[A-Za-z]+$/.test(nameValue)) 
    {
        setError(name1, 'Name should contain only letters');
    }
    else{
        setSuccess(name1);
    }

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
    }

    if(ageValue === '')
    {
        setError(age,'age is required');
    } else if (/^[A-Za-z]+$/.test(ageValue)) {
                 setError(age, 'Age should not contain letters');
             }else if(age.value < 18)
         {
           setError(age,'Age should be above 18.')
     }else{
        setSuccess(age);
    }

    if(noValue === '')
    {
        setError(no,'phone number is required');
        
    }else if (/^[A-Za-z]+$/.test(noValue)) {
                setError(no, 'Phone number should not contain any letters');
                return false;
        } else if (noValue.length !== 10) {
                setError(no, 'Please provide a valid 10-digit phone number');
                return false;
        }else{
        setSuccess(no);
    }

    if(listValue == 0)
    {
        setError(list,'Choose anything');
        return false;
    }else{
        setSuccess(list);
        return true;
    }



}