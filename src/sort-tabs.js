const sidebarList = document.querySelector('.project-list');
const sidebarTabs = document.getElementsByClassName('project-item');

export default function() {
   const priorityTabs = [...sidebarTabs].filter(tab => tab.children[0].classList.contains('priority'));
   const firstNonPriorityTab = [...sidebarTabs].find(tab => !tab.children[0].classList.contains('priority'));
   const nonPriorityTabs = [...sidebarTabs].filter(tab => !tab.children[0].classList.contains('priority'));

   const sortedPriorityTabs = priorityTabs.sort((tabA, tabB) => {
      return tabA.children[0].textContent > tabB.children[0].textContent ? 1 : -1;
   });

   const sortedNonPriorityTabs = nonPriorityTabs.sort((tabA, tabB) => {
      return tabA.children[0].textContent > tabB.children[0].textContent ? 1 : -1;
   });

   sortedPriorityTabs.map(tab => sidebarList.insertBefore(tab, firstNonPriorityTab));

   sortedNonPriorityTabs.map(tab => sidebarList.appendChild(tab));
};