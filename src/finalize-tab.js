export default function(name, dueDate, targetNode) {
   const  projectName = targetNode.children[0];
   const date = targetNode.children[1];

   let dateAndClock = date.innerHTML.split("<");

   projectName.textContent = name;

   date.innerHTML = `Due: ${dueDate}<${dateAndClock[1]}`;
};