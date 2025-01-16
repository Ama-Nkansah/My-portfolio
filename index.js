const sideBar = document.getElementById("sidebar");
const hamburgerButton = document.getElementById("hamburger-button");
const closeButton = document.getElementById("close-button");
const navBar = document.getElementById("nav");
const logo1 = document.getElementById("logo");



$("#hamburger-button").click(function(){
  sideBar.classList.remove("hidden");
  sideBar.classList.add("flex");
  navBar.classList.add("pt-0","pr-0");
  logo1.classList.add("p-4");
  hamburgerButton.classList.remove("inline-flex");
  hamburgerButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  closeButton.classList.add("flex");
});

$("#close-button").click(function(){
sideBar.classList.add("hidden");
hamburgerButton.classList.remove("hidden");
hamburgerButton.classList.add("inline-flex","pr-10");
});

//when the whole page is loaded this should happen
$(document).ready(function(){
  //go to the contact form and perform the function when submit is trigerred

  $('#contact-form').on('submit',function(e){
    e.preventDefault(); //prevent page reload when the submit is trigerred and i can do what i want next 
    console.log('Submit triggered');
    
    const name = $('#name').val(); // Get the name value
    const email = $('#email').val(); // Get the email value
    const message = $('#message').val(); // Get the message value

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields!');
    }  else {
      alert(`Name: ${name}, Email: ${email}, Message: ${message}`);
      $('#name').val(''); // Clear the name field
      $('#email').val(''); // Clear the email field
      $('#message').val(''); // Clear the message field
  }

  });
});



