

$(document).ready(function () {

});

function GetPath(name) {
    var urlpath = "";
    var environ = window.location.host;
    if (environ.indexOf("localhost") != -1 || environ.indexOf("cfmdev1") != -1) {
        urlpath = "/" + name;
    }
    else {
        urlpath = "/online_part_order/" + name;
        //urlpath = name;
    }
    return urlpath;
}

function Login() {
    var userModel = {
        "UserName": $('#usrname').val(),
        "Password": $('#psw').val(),
        "RememberMe": false
    }
    $.ajax({
        beforeSend: function () {
            //ShowLoadingImg(true, 'dvLoading');
        },
        complete: function () {
            //ShowLoadingImg(false, 'dvLoading');
        },
        url: "Account/test",
        //url: "Home/test",
        type: "POST",
        contentType: 'application/html; charset=utf-8',
        dataType: "json",
        data: { s: "s"},
        //data: { UserName: username, Password: password },
        //data: JSON.stringify(userModel),
        async: false,
        cache: false,
        success: function (data) {

        },
        error: function (data) {

        }
    });
}