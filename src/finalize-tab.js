export default function(name, dueDate) {
   const projectName = document.querySelector('h3.project-name');
   const date = document.querySelector('.project-item p.project-due-date');

   let dateAndClock = date.innerHTML.split("<");

   projectName.textContent = name;

   date.innerHTML = `Due: ${dueDate}<${dateAndClock[1]}`;
};