function validate(){
    var pwd=document.getElementById("pwd");
    var pwdtext=document.getElementById("pwdtext");
    var email=document.getElementById("email");
    var emailtext=document.getElementById("emailtext")
    var emailregex=/^\w+([\.-]\w+)*@\w+([\.-]\w+)*(\.[a-z]{2,3})+(.[a-z]{2,3})?$/;
    var pwdregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[^a-zA-Z0-9]).{8,}$/;
    // var phoneregex=/^\(?(\d{3})\)?[-. ]?(\d{3})[.- ]?(\d{4})$/;
    function emailid(){
        if(email.value.match(emailregex)){
            return true;
        }
        else{
            return false
        }
    }
    function pwdid(){
        if(pwd.value.match(pwdregex)){
            return true;
        }
        else{
            return false;
        }
    }
    if(emailid()===false && pwdid()===false){
        emailtext.innerHTML="Invalid email";
        emailtext.style.color='red';
        email.style.border="2px solid red";
        pwdtext.innerHTML="Invalid password ";
        pwdtext.style.color='red';
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwdid()==-false && emailid()===true ){
        emailtext.innerHTML="Valid email";
        emailtext.style.color='green';
        email.style.border="2px solid green";
        pwdtext.innerHTML="Invalid password ";
        pwdtext.style.color='red';
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwdid()===true && emailid()===false ){
        emailtext.innerHTML="Inalid email";
        emailtext.style.color='red';
        email.style.border="2px solid red";
        pwdtext.innerHTML="Valid password ";
        pwdtext.style.color='green';
        pwd.style.border="2px solid green";
        return false;}

    else{
        return true
    }
    }
