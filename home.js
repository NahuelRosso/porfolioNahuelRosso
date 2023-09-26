
  
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_83l7m5g';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


const proyectos = document.querySelectorAll('.proyecto');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-button');

proyectos.forEach((proyecto) => {
    proyecto.addEventListener('click', () => {
        const imagenProyecto = proyecto.querySelector('img');
        const imagenPopup = popup.querySelector('img');
        imagenPopup.src = imagenProyecto.src;
        popup.style.display = 'block';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
function toggleDetails(element) {
  element.classList.toggle("active");
}