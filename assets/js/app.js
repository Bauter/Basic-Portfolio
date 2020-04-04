$(document).ready(function(){

    // Event listener for submit button
    $("#submit").on('click', function() {
       //define the input ids to variables
       let name = $("#fullName");
       let email = $('#email');
       let message = $('#message');

        //Use an 'if' statement for form validation
        if (name.val() === '' || email.val() === '' || message.val() === '' ) {
            // Alert the user not all fields have value
            alert("Please fill out the form");
        } else {
            // Alert the user the message was successfully sent
            alert("Submission successful, thanks for reaching out!");
            
        }
    });

});