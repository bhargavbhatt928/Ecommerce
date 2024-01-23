$(function(){
    $("#header1").load("header1.html");
});
$(function(){
    $("#header2").load("header2.html");
})
$(function(){
    $("#carousel").load("cards.html");
})
$(function(){
    $("#footer").load("footer.html");
});
function loginpage(){
    let email = document.getElementById('logemail1').value;
    let pass = document.getElementById('logpass1').value;
    if(pass === '123456' && email == 'admin@admin.com') {
        alert("Login successful.");
    }
    else{
        alert("Incorrect email or password.");
    }
} 
