var gender, fname, lname, dob, email, mobile, password, confirmpassword, address, accountType, isIndian, isAccepted;
var specialization = [];

function onSubmit() {
    validateControls();
}

function getControlValues() {
    document.getElementById('reg').classList.add('hidden');
    document.getElementById('profile').classList.remove('hidden');
    document.getElementById('name').innerHTML = "<span>" + fname + " " + lname +"</span>";
    document.getElementById('gend').innerHTML = "<span>" + gender +"</span>";
    document.getElementById('dateOfBirth').innerHTML = "<span>" + dob +"</span>";
    document.getElementById('emailId').innerHTML = "<span>" + email +"</span>";
    document.getElementById('number').innerHTML = "<span>" + mobile +"</span>";
    document.getElementById('addr').innerHTML = "<span>" + address +"</span>";
    document.getElementById('indian').innerHTML = "<span>" + isIndian +"</span>";
    document.getElementById('accType').innerHTML = "<span>" + accountType +"</span>";

    return true;
}

document.getElementById('submitBtn').addEventListener("click", (e) => {
    e.preventDefault();

    //FirstName
    fname = document.getElementById("firstname").value;
    if (fname == "") {
        window.alert("please enter your first name");
        fname.focus();
        return false;
    }
    //LastName
    lname = document.getElementById("lastname").value;
    if (lname == "") {
        window.alert("please enter your last name");
        lname.focus();
        return false;
    }
    //DOB
    dob = document.getElementById("dob").value;

    gender = document.getElementById("gender").value;
    address = document.getElementById("address").value;
    isIndian = document.querySelector('input[type="checkbox"][name="isIndian"]').checked;
    var types = document.getElementsByName('accountType');
    for(var i = 0; i < types.length; i++){
        if(types[i].checked){
            accountType = types[i].value;
        }
    }
    accepted = document.querySelector('input[type="checkbox"][name="isAccepted"]').checked;
    //Email
    email = document.getElementById("email").value;
    if (email == "") {
        window.alert("please enter your valid email Id");
        email.focus();
        return false;
    }
    //Mobile
    mobile = document.getElementById("mobile").value;
    if (mobile == "") {
        window.alert("please enter your 10 digits mobile no.");
        mobile.focus();
        return false;
    }
    password = document.getElementById("password").value;
    if (password == "") {
        window.alert("please enter your password");
        password.focus();
        return false;
    }
    confirmpassword = document.getElementById("confirmpassword").value;
    if (confirmpassword == "" || confirmpassword.value !== password.value) {
        window.alert("passwords do not match");
        password.focus();
        return false;
    }
    return getControlValues();
    
});
