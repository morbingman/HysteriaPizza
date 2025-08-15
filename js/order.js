function PizzaCheck()
{
  var pizza = document.getElementById("pizza"), pizzavalue = pizza.value;
  var pizzaelement = document.getElementById("pizzaerror");
  var pizzaerror = "";

  if (pizzavalue == "") {
    pizzaerror = "Please select a pizza.";
  }
  if (pizzaerror != "") {
    pizzaelement.innerHTML = pizzaerror;
    pizzaelement.style.display = "block";
    pizza.classList.add("is-invalid");
  }
  else {
    pizzaelement.style.display = "none";
    pizza.classList.remove("is-invalid"), pizza.classList.add("is-valid");
    return true;
  }
}
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
function MessageCheck()
{
  var message = document.getElementById("message"), messagevalue = message.value;
  var messageelement = document.getElementById("msgerror");
  var messageerror = "";

  if (messagevalue.length > 30) {
    messageerror = "Message shouldn't exceed 30 characters.";
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
function DeliDateCheck()
{
  var delidate = document.getElementById("delidate"), delidatevalue = delidate.value;
  var delidateelement = document.getElementById("delidateerror");
  var delidateerror = "";
  var datecurrent = new Date();
  var dateinput = new Date(delidatevalue);

  if (delidatevalue == '') {
    delidateerror = "Please fill out the delivery date.";
  }
  if (dateinput < datecurrent) {
    delidateerror = "Please enter a suitable date."
  }
  if (delidateerror != "") {
    delidateelement.innerHTML = delidateerror;
    delidateelement.style.display = "block";
    delidate.classList.add("is-invalid");
  }
  else {
    delidateelement.style.display = "none";
    delidate.classList.remove("is-invalid"), delidate.classList.add("is-valid");
    return true;
  }
}
function DeliAddrCheck()
{
  var deliaddr = document.getElementById("deliaddr"), deliaddrvalue = deliaddr.value;
  var deliaddrelement = document.getElementById("deliaddrerror");
  var deliaddrerror = "";

  if (deliaddrvalue == '') {
    deliaddrerror = "Please fill out the address.";
  }
  if (deliaddrvalue.length > 500) {
    deliaddrerror = "Address should not exceed 500 characters.";
  }
  if (deliaddrerror != "") {
    deliaddrelement.innerHTML = deliaddrerror;
    deliaddrelement.style.display = "inline-block";
    deliaddr.classList.add("is-invalid");
  }
  else {
    deliaddrelement.style.display = "none";
    deliaddr.classList.remove("is-invalid"), deliaddr.classList.add("is-valid");
    return true;
  }
}
function validate()
{
  if (PizzaCheck() && NameCheck() && MessageCheck() && DeliDateCheck() && DeliAddrCheck()) {
    alert("Order is successfully submited.");
  }
  else{
    PizzaCheck();
    NameCheck();
    MessageCheck();
    DeliDateCheck();
    DeliAddrCheck();
  }
}