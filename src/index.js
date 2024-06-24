import './style.css';
import { createProject } from './create-project.js';
import { default as SideBarProjectTab } from "./sidebar-project-tab";
import { Form, Header, Description, Checklist, Notes, Submit, Priority } from "./project-form";
import { default as loadTabs } from './load-tabs.js';
import { default as selectTab } from './select-tab.js';

const addProjectBtn = document.querySelector('.add-icon-button');

addProjectBtn.addEventListener('click', function() {
   const createTab = [
      new SideBarProjectTab('New Project', ''),
   ];

   createProject(createTab);

   const newSidebarTab = document.querySelector('.project-item:last-child');

   const form = new Form();
   const header = new Header();

   form.appendForm();
   header.appendProjectHeader(newSidebarTab);
   header.appendDueDate(newSidebarTab);


   const createForm = [
      new Description(),
      new Checklist(),
      new Notes(),
      new Priority(),
      new Submit()
   ];

   createProject(createForm);
});

window.addEventListener('load', loadTabs);

const tabList = document.querySelector('.project-list');

tabList.addEventListener('click', selectTab);