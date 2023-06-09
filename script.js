// Selecionar elementos do DOM
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.navbar');

// Adicionar evento de clique ao botão de alternar o menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Fechar o menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
});

// Rolar suavemente para a seção correspondente
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const text = ["Desenvolvedor Web", "Engenheiro de Software", "Professor de Robótica","Técnico de Smartphones"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".multiple-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
})();
