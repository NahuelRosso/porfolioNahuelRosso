
  
const btn = document.getElementById('button');
const form = document.getElementById('form');
const messageContainer = document.getElementById('message-container');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_83l7m5g';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviado';
      form.reset(); // Resetea el formulario
      showMessage('Email enviado correctamente', 'success');
    })
    .catch(err => {
      btn.value = 'Enviar';
      showMessage('Hubo un error al enviar el email', 'error');
    });
});

function showMessage(message, type) {
  messageContainer.style.display = 'block';
  messageContainer.textContent = message;
  messageContainer.className = type;
  setTimeout(() => {
    messageContainer.style.display = 'none';
  }, 5000); // Oculta el mensaje después de 5 segundos
}



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