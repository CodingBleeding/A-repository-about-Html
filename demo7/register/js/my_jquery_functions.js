$(document).ready(function() {
    $("#submit").click(function() {
        var data = {
            "username": $("#username").val(),
            "password": $("#password").val()
        };
    })
    $.post("url", data, function(data, status) {
        alert("Data" + data + "\nStatus" + status);
    });
});