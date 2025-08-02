function handleButtonClick(destino) {
  switch (destino) {
    case 'github':
      window.open('https://github.com/Kadu151', '_blank');
      break;
    case 'linkedin':
      window.open('https://www.linkedin.com/in/carlos-santos-74baaa199/', '_blank');
      break;
    case 'whatsapp':
      window.open('https://wa.me/5511940262766', '_blank');
      break;
      case 'barber':
      window.open('https://kadu151.github.io/barbeirodelivery/', '_blank');
      break;
      case 'e-commerce':
      window.open('https://kadu151.github.io/20twenty/', '_blank');
      break;
    case 'jobs':
      window.location.href = '/template/jobs.html';
      break;
  case 'home':
      window.location.href = '/template/index.html';
      break;
  }
}
  function mostrarMensagem(event) {
    event.preventDefault();
    const form = document.getElementById('form-contato');
    const mensagem = document.getElementById('mensagem-enviada');

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(response => {
        if (response.ok) {
          mensagem.classList.remove('hidden');
          form.reset();
        } else {
          alert('Ocorreu um erro ao enviar. Tente novamente.');
        }
      })
      .catch(error => {
        alert('Erro ao enviar o formulário. Tente mais tarde.');
      });
  }