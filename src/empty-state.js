import beach from './icons/seaside-vacation-empty-beach.png';

export default function() {
   const content = document.getElementById('content');
   const img = document.createElement('img');
   const msg = document.createElement('p');
   const height = window.innerHeight / 2;
   
   img.src = beach;
   img.setAttribute('height', `${height}px`);

   msg.textContent = 'Empty! Relax and enjoy your free time. You have earned it!';
   msg.style['font-family'] = "Comic Sans MS";
   
   content.classList.add('align-empty-state');

   content.appendChild(img);
   content.appendChild(msg);
}