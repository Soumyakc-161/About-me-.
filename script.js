function ValidateEmail(email)
{
var mailformat = /^w+([.-]?w+)@w+([.-]?w+)(.w{2,3})+$/;
if(email.value.match(mailformat))
{
alert("You have entered a valid email address!");    //The pop up alert for a valid email address
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
document.form1.email.focus();
return false;
}
}