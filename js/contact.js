function NameCheck()
{
  var name = document.getElementById("name"), namevalue = name.value;
  var nameelement = document.getElementById("nameerror");
  var nameerror = "";

  if (namevalue == "") {
    nameerror = "Please fill out your name.";
  }
  if (namevalue.length > 100) {
    nameerror = "Your name shouldn't exceed 100 characters.";
  }
  if (nameerror != "") {
    nameelement.innerHTML = nameerror;
    nameelement.style.display = "block";
    name.classList.add("is-invalid");
  }
  else {
    nameelement.style.display = "none";
    name.classList.remove("is-invalid"), name.classList.add("is-valid");
    return true;
  }
}
function EmailCheck() 
{
  var email = document.getElementById("email"), emailvalue = email.value;
  var emailelement = document.getElementById("emailerror");
  var emailerror = "";

  if (emailvalue == "") {
    emailerror = "Please fill out your email.";
  }
  if (emailvalue.length > 100) {
    emailerror = "Your email shouldn't exceed 100 characters.";
  }
  if (emailerror != "") {
    emailelement.innerHTML = emailerror;
    emailelement.style.display = "block";
    email.classList.add("is-invalid");
  }
  else {
    emailelement.style.display = "none";
    email.classList.remove("is-invalid"), email.classList.add("is-valid");
    return true;
  }
}
function SubjectCheck()
{
  var subject = document.getElementById("subject"), subjectvalue = subject.value;
  var subjectelement = document.getElementById("subjecterror");
  var subjecterror = "";

  if (subjectvalue.length < 50) {
    if (subjectvalue == "") {
      subjecterror = "Please fill out the subject.";
    }
    else{
      subjecterror = "Subject shouldn't be shorter than 50 characters.";
    }
  }
  if (subjectvalue.length > 250) {
    subjecterror = "Subject shouldn't exceed 250 characters.";
  }
  if (subjecterror != "") {
    subjectelement.innerHTML = subjecterror;
    subjectelement.style.display = "block";
    subject.classList.add("is-invalid");
  }
  else {
    subjectelement.style.display = "none";
    subject.classList.remove("is-invalid"), subject.classList.add("is-valid");
    return true;
  }
}
function MessageCheck()
{
  var message = document.getElementById("message"), messagevalue = message.value;
  var messageelement = document.getElementById("msgerror");
  var messageerror = "";

  if (messagevalue == "") {
    messageerror = "Please fill out the message.";
  }
  if (messagevalue.length > 500) {
    messageerror = "Message shouldn't exceed 500 characters.";
  }
  if (messageerror != "") {
    messageelement.innerHTML = messageerror;
    messageelement.style.display = "block";
    message.classList.add("is-invalid");
  }
  else {
    messageelement.style.display = "none";
    message.classList.remove("is-invalid"), message.classList.add("is-valid");
    return true;
  }
}
function validate()
{
  if (NameCheck() && EmailCheck() && SubjectCheck() && MessageCheck()) {
    alert("Contact is successfully requested");
  }
  else{
    NameCheck(), EmailCheck(), SubjectCheck(), MessageCheck();
  }
}