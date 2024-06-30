export default function(currentTab) {
   const [...allTabs] = document.getElementsByClassName('project-item');

   allTabs.map(previousTab => {
      if (previousTab.classList.contains('click-tab')) previousTab.classList.toggle('click-tab');
   });

   currentTab.classList.toggle('click-tab');
};