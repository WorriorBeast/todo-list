import './style.css';
import { createProject } from './create-project.js';
import { default as SideBarProjectTab } from "./sidebar-project-tab";
import { Form, Header, Description, Checklist, Notes, Submit, Priority } from "./project-form";
import { default as loadTabs } from './load-tabs.js';
import { default as selectTab } from './select-tab.js';
import { default as removeCurrentContent } from './remove-current-content.js';
import { default as sortTabs } from './sort-tabs.js';
import { default as changeTabColor } from './change-tab-color.js';
import { default as saveUnfinishedProject } from './save-unfinished-project.js';

const addProjectBtn = document.querySelector('.add-icon-button');

addProjectBtn.addEventListener('click', function() {
   const content = document.getElementById('content');
   let newTab = document.querySelector('.new-tab');
   let unfinishedProject = localStorage.getItem('unfinishedProject');

   content.classList.remove('align-empty-state');

   if (!unfinishedProject && newTab == null) {
      removeCurrentContent();

      const createTab = [
         new SideBarProjectTab('New Project', ''),
      ];

      createProject(createTab);

      const newSidebarTab = document.querySelector('.project-item:last-child');

      newSidebarTab.classList.toggle('new-tab');

      const form = new Form();
      const header = new Header('', '');

      form.appendForm();
      header.appendProjectHeader(newSidebarTab);
      header.appendDueDate(newSidebarTab);


      const createForm = [
         new Description(''),
         new Checklist({}),
         new Notes(['']),
         new Priority('yes'),
         new Submit()
      ];

      createProject(createForm);
      changeTabColor(newSidebarTab);

      const priorityFieldset = document.querySelector('.priority-fieldset');

      window.addEventListener('keyup', saveUnfinishedProject);
      priorityFieldset.addEventListener('click', saveUnfinishedProject);

   } else if (unfinishedProject && newTab == null) {
      removeCurrentContent();

      let createTab;

      unfinishedProject = JSON.parse(unfinishedProject);

      if (unfinishedProject.name !== '') {
         createTab = [
            new SideBarProjectTab(unfinishedProject.name, unfinishedProject.dueDate),
         ];

      } else {
         createTab = [
            new SideBarProjectTab('New Project', unfinishedProject.dueDate),
         ];
      }

      createProject(createTab);

      const newSidebarTab = document.querySelector('.project-item:last-child');

      newSidebarTab.classList.toggle('new-tab');

      const form = new Form();
      const header = new Header(unfinishedProject.name, unfinishedProject.dueDate);

      form.appendForm();
      header.appendProjectHeader(newSidebarTab);
      header.appendDueDate(newSidebarTab);


      const createForm = [
         new Description(unfinishedProject.description),
         new Checklist(unfinishedProject.checklist),
         new Notes(unfinishedProject.notes),
         new Priority(unfinishedProject.priority),
         new Submit()
      ];

      createProject(createForm);
      changeTabColor(newSidebarTab);

      const priorityFieldset = document.querySelector('.priority-fieldset');

      window.addEventListener('keyup', saveUnfinishedProject);
      priorityFieldset.addEventListener('click', saveUnfinishedProject);
   }
});

window.addEventListener('load', loadTabs);

const tabList = document.querySelector('.project-list');

tabList.addEventListener('click', selectTab);

window.addEventListener('load', sortTabs);

window.addEventListener('load', () => {
   const allTabs = document.getElementsByClassName('project-item');
   const recentlyViewedTab = JSON.parse(localStorage.getItem('recentlyViewedTab'));

   [...allTabs].map(tab => {
      if (tab.innerHTML == recentlyViewedTab) tab.click();
   });
});