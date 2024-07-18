import { default as SideBarProjectTab } from './sidebar-project-tab.js';
import { createProject } from './create-project.js';
import { default as finalizeTab } from './finalize-tab.js';
import { default as checkPriority } from './check-priority.js';
import { default as emptyState } from './empty-state.js';

export default function() {
   let savedProjects = JSON.parse(localStorage.getItem('projects'));

   if (!savedProjects || Object.getOwnPropertyNames(savedProjects).length == 0) {
      emptyState();
      return;
   }

   for (let project in savedProjects) {
      let newTab = [
         new SideBarProjectTab(savedProjects[project].name, savedProjects[project].dueDate)
      ];

      createProject(newTab);

      const recentTab = document.querySelector('.project-item:last-child');

      checkPriority(savedProjects[project].priority, recentTab);

      finalizeTab(savedProjects[project].name, savedProjects[project].dueDate, recentTab);
   }
};