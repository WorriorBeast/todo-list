import clockIcon from './icons/clock-alert-outline.svg';

export default function(priority, sidebarTab) {
   if (priority == 'yes' && sidebarTab !== undefined && !sidebarTab.children[0].classList.contains('priority')) {
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
   } else if ((priority == 'yes' && sidebarTab === undefined) || (priority == 'yes' && sidebarTab !== undefined && sidebarTab.children[0].classList.contains('priority'))) {
      const mainName = document.querySelector('h1.project-name');
      const mainDueDate = document.querySelector('#content .project-due-date');

      mainName.classList.add('priority');
      mainDueDate.classList.add('priority');

   } else if (priority == 'no' && sidebarTab !== undefined && sidebarTab.children[0].classList.contains('priority')) {
      const name = sidebarTab.children[0];
      const dueDate = sidebarTab.children[1];

      name.classList.remove('priority');
      dueDate.classList.remove('priority');

      dueDate.textContent = dueDate.textContent;
   }
}