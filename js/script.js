// Validação obrigatória do formulário e simulação de envio (sem servidor).
const formulario = document.querySelector('#formulario-contato');
const retorno = document.querySelector('#retorno-formulario');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  retorno.style.color = '#f28b82';
  if (!nome || !email || !mensagem) {
    retorno.textContent = 'Preencha todos os campos antes de enviar.';
    return;
  }
  if (!emailValido) {
    retorno.textContent = 'Digite um endereço de e-mail válido.';
    return;
  }
  retorno.style.color = '#39bd93';
  retorno.textContent = 'Mensagem enviada com sucesso! (Simulação)';
  formulario.reset();
});

// Interação adicional: alternância entre tema claro e escuro.
const botaoTema = document.querySelector('#alternar-tema');
botaoTema.addEventListener('click', () => {
  const claro = document.body.classList.toggle('tema-claro');
  botaoTema.textContent = claro ? '🌙' : '☀️';
  botaoTema.setAttribute('aria-label', claro ? 'Ativar tema escuro' : 'Ativar tema claro');
});
document.querySelector('#ano').textContent = new Date().getFullYear();
