const navToggle = document.querySelector('.nav_toggle');
const navLinks = document.querySelectorAll('.nav_links');
// const registerClick = document.querySelector('.register');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// registerClick.addEventListener('click', () => {
//     document.body.classList.toggle('register-open');
// })


function openForm() {
    document.getElementById("#register").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("register").style.display = "none";
  }