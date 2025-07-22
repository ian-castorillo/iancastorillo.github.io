

//rotating ianCastorillo
const el =document.querySelector('.ianCastorilloRotate');
const text=el.dataset.text;

el.innerHTML = [...text].map(char => {

  return `<span>${char === ' ' ? '&nbsp;' : char}</span>`;
}).join('');



