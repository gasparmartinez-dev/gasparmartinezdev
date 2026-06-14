// FORMULARIO CON EMAILJS

emailjs.init("7LRbPuOHfX8WctwsB")   //PublicKey de mi usuario

const form = document.getElementById('formulario_contacto');

form.addEventListener('submit', async (e) => {
    
    e.preventDefault();

    try{
        await emailjs.send("contacto_portfolio", "template_hanojuj", {
            asunto: document.getElementById('inputAsunto').value,
            email: document.getElementById('inputEmail').value,
            message: document.getElementById('inputMensaje').value
        }
    );

    alert('Mensaje enviado correctamente');
    form.reset();
    } catch(error){
        alert('Error al enviar el mensaje');
    }
})