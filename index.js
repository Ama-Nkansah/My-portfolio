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

$(document).ready(function(){
  $('#contact-form').on('submit',function(e){

  });

}
});

/*
$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent page reload
        const message = $('#message').val(); // Get the message value
        if (message.trim() === '') {
            alert('Please type a message!');
        } else {
            alert(`Message received: ${message}`);
            $('#message').val(''); // Clear the message area
        }
    });
});

*/ 