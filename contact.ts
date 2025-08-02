const form = document.getElementById('contactForm') as HTMLFormElement;
const formMessage = document.getElementById('formMessage') as HTMLParagraphElement;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Pega os valores dos inputs
  const name = (document.getElementById('name') as HTMLInputElement).value.trim();
  const email = (document.getElementById('email') as HTMLInputElement).value.trim();
  const message = (document.getElementById('message') as HTMLTextAreaElement).value.trim();

  // Validação simples
  if (!name || !email || !message) {
    formMessage.textContent = 'Por favor, preencha todos os campos.';
    formMessage.style.color = 'red';
    return;
  }

  // Regex básico para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Por favor, insira um email válido.';
    formMessage.style.color = 'red';
    return;
  }

  // Se tudo OK, simula envio
  formMessage.textContent = 'Enviando...';
  formMessage.style.color = 'blue';

  setTimeout(() => {
    formMessage.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
    formMessage.style.color = 'green';
    form.reset();
  }, 2000);
});

