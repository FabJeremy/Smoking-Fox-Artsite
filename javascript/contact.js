let genderValue = male.checked ? "male" : "female"

function getGender() {
    return document.querySelector('input[name="gender"]:checked')
   }

var fields = {
    
};

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.question = document.getElementById('question');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.question, isNotEmpty);
   
    return valid;
}

class User {
    constructor(firstName, lastName, gender, email, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.email = email;
    this.question = question;
    }
}

// function sendContact (DEFINE ME){}