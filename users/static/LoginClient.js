ERR_BAD_CREDENTIALS = -1;
ERR_USER_EXISTS = -2;
ERR_BAD_USERNAME = -3;
ERR_BAD_PASSWORD  = -4;


function json_request(page, dictionary, success, failure) {
    $.ajax({
        type: 'POST',
        url: page,
        data: JSON.stringify(dictionary),
        contentType: "application/json",
        dataType: "json",
        success: success,
        failure: failure
    });
}

debug_flag = false;


function return_errcode_msg(msgcode) {
    if( msgcode == ERR_BAD_CREDENTIALS) {
        return ("Invalid username and password combination. Please try again! ");
    } else if( msgcode == ERR_BAD_USERNAME) {
        return ("The user name should not be empty and at most 128 characters long. Please try again!");
    } else if( msgcode == ERR_USER_EXISTS) {
        return ("This user name already exists. Please try again!");
    } else if( msgcode == ERR_BAD_PASSWORD) {
        return ("Your password needs to be at most 128 characters long. Please try again!");
    } else {
        // This case should never happen!
        if( debug_flag ) { alert('Illegal error code encountered: ' + msgcode); }
        return ("Unknown error occured: " + msgcode);
   }
}
