/* script file to display greetings based on time of day */
function displayMessage() {

    let dt = new Date()
    let hours = dt.getHours()
    let message = dt.getHours() + ":" + dt.getMinutes() + "<br>"
    if (hours > 6 && hours < 12) {
        message += "Good morning"
        document.getElementById("greet").style.backgroundColor = 'rgb(148, 178, 191)';
    }
    else if (hours >= 12 && hours < 16) {
        message += "Good afternoon"
        document.getElementById("greet").style.backgroundColor = 'rgb(148, 178, 191)';
    }
    else if (hours >= 16 && hours < 19) {
        message += "Good evening"
        document.getElementById("greet").style.backgroundColor = 'rgb(7, 122, 153)';
    }
    else if (hours >= 19 && hours < 23) {
        message += "Good night"
        document.getElementById("greet").style.backgroundColor = 'rgb(7,122, 153)';
    }
    else {
        message += "WHY ARE YOU UP SO LATE???!!"
        document.getElementById("greet").style.backgroundColor = 'rgb(66, 71, 84)';
        document.getElementById("greet").style.color = "white";
    }
    document.getElementById("greet").innerHTML = message;
}


/* no empty form */
function validateForm() {
    let name = document.forms["enquiry"]["name"].value;
    let email = document.forms["enquiry"]["email"].value;
    let phone = document.forms["enquiry"]["phone"].value;
    let message = document.forms["enquiry"]["message"].value;

    if (name == "" || email == "" || phone == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    return true; // Form is valid
}

