import './style.css';
import { createProject } from './create-project.js';
import { default as SideBarProjectTab } from "./sidebar-project-tab";
import { Form, Header, Description, Checklist, Notes, Submit, Priority } from "./project-form";

const createTabAndForm = [
   new SideBarProjectTab(),
   new Form(),
   new Header(),
   new Description(),
   new Checklist(),
   new Notes(),
   new Priority,
   new Submit()
];

const addProjectBtn = document.querySelector('.add-icon-button');

addProjectBtn.addEventListener('click', function() {
   createProject(createTabAndForm);
});