

//rotating ianCastorillo
const el =document.querySelector('.ianCastorilloRotate');
const text=el.dataset.text;

el.innerHTML = [...text].map(char => {

  return `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
}).join('');


//glitch effect for white shirt black pants
  function toggleGlitch(el) {
    el.classList.toggle('glitch');
  }

  function randomGlitchLoop() {
    const elements = document.querySelectorAll('.indented');

    elements.forEach(el => {
      el.setAttribute('data-text', el.textContent); 
      if (Math.random() > 0.7) {
        toggleGlitch(el);
        setTimeout(() => toggleGlitch(el), Math.random() * 300 + 100); 
      }
    });

    setTimeout(randomGlitchLoop, 800); // interval between checks
  }

  document.addEventListener('DOMContentLoaded', randomGlitchLoop);
