// script.js
const text = ["Bienvenido a mi página", "Desarrollador Full Stack", "Disfruta de la experiencia"];
let index = 1;
let charIndex = 1;
let currentText = '';
let isDeleting = false;
const typingSpeed = 50;
const deletingSpeed = 75;
const pauseBetween = 1000;
const keepChars = 1;
const finishedColor = '#ffffff'; // Blanco en hexadecimal
const initialColor = '#3498db';  // Azul personalizado en hexadecimal

function type() {
  const typedTextElement = document.getElementById("typed-text");

  // Si está borrando
  if (isDeleting) {
    currentText = text[index].substring(0, Math.max(keepChars, charIndex--));
    typedTextElement.style.color = initialColor; // Mientras borra, color azul
  } 
  // Si está escribiendo
  else {
    currentText = text[index].substring(0, charIndex++);
    typedTextElement.style.color = initialColor; // Mientras escribe, color azul
  }

  typedTextElement.textContent = currentText;

  // Cuando termina de escribir
  if (!isDeleting && charIndex === text[index].length) {
    setTimeout(() => {
      isDeleting = true;
      typedTextElement.style.color = finishedColor; // Cambia a blanco al completar
    }, pauseBetween);
  } 
  // Cuando termina de borrar
  else if (isDeleting && charIndex === keepChars) {
    isDeleting = false;
    index = (index + 1) % text.length;
  }

  const speed = isDeleting ? deletingSpeed : typingSpeed;
  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
