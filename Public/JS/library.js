function login(){
    
    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;
    if(email==""){
        document.getElementById('mailError').innerHTML = "Invalid email";
        return false;
    }
    else{
        document.getElementById('mailError').innerHTML = "";
    }
    if(password==""){
        document.getElementById('pError').innerHTML = "Invalid password";
        return false;
    }
    else{
        document.getElementById('pError').innerHTML = "";
    }
    alert("Welcome");
    return true;
}


function validation(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('sname').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementsByName('gender');
    var email = document.getElementById('mail').value;
    var phone = document.getElementById('phn').value;
    var password = document.getElementById('pass').value;
    var cpassword = document.getElementById('cpass').value; 
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(firstName==""){
        document.getElementById('fnameError').innerHTML = "Enter your first name";
        
        return false;
    }
    else{
        document.getElementById('fnameError').innerHTML = "";
    }
    if(lastName==""){
        document.getElementById('snameError').innerHTML ="Enter your last name";
        
        return false;
    }
    else{
        document.getElementById('snameError').innerHTML = "";
    }
    if(dob==""){
        
        document.getElementById('dobError').innerHTML = "Enter your date of birth";
        
        return false;
    }
    else{
        document.getElementById('dobError').innerHTML = "";
    }
    if(email==""){
        document.getElementById('emailError').innerHTML = "Enter your email id";
    
        return false;
    }
    else if(email.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        document.getElementById('emailError').innerHTML = "Invalid email format";
    }
    else{
        document.getElementById('emailError').innerHTML = "";
    }
    if(phone==""){
        document.getElementById('phnError').innerHTML = "Enter your phone number";
        return false;
    }
    else if(phone.length!=10){
        document.getElementById('phnError').innerHTML = "Invalid phone number";
    }
    else{
        document.getElementById('phnError').innerHTML = "";
    }
    if(password==""){
        document.getElementById('passError').innerHTML = "Enter your password";
        document.getElementById('passError').style.color = "orange";
        return false;
    }
    else if(password.length<=6){
        document.getElementById('passError').innerHTML = "Password contain minimum 6 character";
        return false;
    }
    else if(password.search(/[0-9]/)==-1){
        document.getElementById('passError').innerHTML = "Password must contain atleast one number";
    }
    else if(password.search(/[a-z]/)==-1){
        document.getElementById('passError').innerHTML = "Password must contain atleast one lowercase letter";
    }
    else if(password.search(/[A-Z]/)==-1){
        document.getElementById('passError').innerHTML = "Password must contain atleast one uppercase letter";
    }
    else{
        document.getElementById('passError').innerHTML = "";
    }
    if(cpassword!=password){
        document.getElementById('cpassError').innerHTML = "Password incorrect";
    
        return false;
    }
    else{
        document.getElementById('cpassError').innerHTML = "";
    }
    alert("Sign in Successfully Completed")
    return true;
}

function strength(){
    var str = document.getElementById('pass').value;
    var exStrong = new RegExp("^(?=.{16,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g");
    var strong = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    var normal = new RegExp("^(?=.{12,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    var medium = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    var weak = new RegExp("^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    if(str===""){
        document.getElementById('passError').innerHTML = "";
        document.getElementById('passError').style.fontSize = ""
        document.getElementById('passError').style.backgroundColor = "";

    }
    else if(exStrong.test(str)){
        document.getElementById('passError').innerHTML = "Extra Strong";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "#00ff00";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.paddingBottom = "-10px"
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";

    }
    else if(strong.test(str)){
        document.getElementById('passError').innerHTML = "Strong";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "#00ff2a";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";
    
    }
    else if(normal.test(str)){
        document.getElementById('passError').innerHTML = "Normal";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "#0084ff";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";

    }
    else if(medium.test(str)){
        document.getElementById('passError').innerHTML = "Medium";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "orange";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";
    }
    else{
            document.getElementById('passError').innerHTML = "Weak";
            document.getElementById('passError').style.fontSize = "small"
            document.getElementById('passError').style.color = "black";
            document.getElementById('passError').style.backgroundColor = "red";
            document.getElementById('passError').style.textAlign = "center";
            document.getElementById('passError').style.width = "100%";
            document.getElementById('passError').style.borderRadius = "10px";
            document.getElementById('passError').style.height = "10px";
            document.getElementById('passError').style.height = "18px";


    }

}


function showFiles(){
    let inputField = document.getElementById('img');
    let  file = inputField.files;
    let fileReader = new FileReader;
    fileReader.readAsDataURL(file[0])
}