import clockIcon from './icons/clock-alert-outline.svg';

export default function(priority, sidebarTab) {
   if (priority == 'yes' && sidebarTab !== undefined) {
      const clock = document.createElement('img');
      const name = sidebarTab.children[0];
      const dueDate = sidebarTab.children[1];

      name.classList.add('priority');
      dueDate.classList.add('priority');

      clock.classList.add('clock');
      clock.setAttribute('src', clockIcon);
      
      dueDate.appendChild(clock);

      const mainDueDate = document.querySelector('#content .project-due-date');

      if (document.contains(mainDueDate)) {
         const mainName = document.querySelector('h1.project-name');

         mainName.classList.add('priority');
         mainDueDate.classList.add('priority');
      }
   } else if (priority == 'yes' && sidebarTab === undefined) {
      const mainName = document.querySelector('h1.project-name');
      const mainDueDate = document.querySelector('#content .project-due-date');

      mainName.classList.add('priority');
      mainDueDate.classList.add('priority');
   }
}