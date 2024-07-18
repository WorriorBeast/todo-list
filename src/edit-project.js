import { Form, Header, Description, Checklist, Notes, Priority, Submit } from './project-form.js';
import { createProject } from './create-project.js';
import { default as removeCurrentContent } from './remove-current-content.js';

let redisplayFormForEdit = () => {
   const savedProjects = JSON.parse(localStorage.getItem('projects'));
   const selectedTab = document.querySelector('.click-tab');
   let name = selectedTab.children[0].textContent;
   let dueDate = selectedTab.children[1].textContent.split(' ');

   for (let project in savedProjects) {
		const savedProject = savedProjects[project];

		if (Object.is(savedProject.name, name) && Object.is(savedProject.dueDate, dueDate[1])) {
         const selectedTab = document.querySelector('.click-tab');
         const {[project]: projectToEdit} = savedProjects;

         removeCurrentContent();

         const form = new Form();
         const header = new Header(savedProject.name, savedProject.dueDate);

         form.appendForm();
         header.appendProjectHeader(selectedTab);
         header.appendDueDate(selectedTab);

			const createForm = [
            new Description(savedProject.description),
            new Checklist(savedProject.checklist),
            new Notes(savedProject.notes),
            new Priority(savedProject.priority),
            new Submit()
			];

			createProject(createForm);

         localStorage.setItem('projectToEdit', JSON.stringify(projectToEdit));
		}
	}
};

let updateProject = (name, dueDate, description, checklist, notes, priority) => {
   const currentProjectTab = document.querySelector('.click-tab');
   let originalProject = JSON.parse(localStorage.getItem('projectToEdit'));
   let savedProjects =JSON.parse(localStorage.getItem('projects'));
   let allProjects = {};

   for (let project in savedProjects) {
      let savedProject = savedProjects[project];

      if (Object.is(savedProject.name, originalProject.name) && Object.is(savedProject.dueDate, originalProject.dueDate)) {
         const {[project]: removeOldProject, ...projects} = savedProjects;

         Object.assign(allProjects, projects);

         allProjects[`${name}`] = {
            name: name,
            dueDate: dueDate,
            description: description,
            checklist: checklist,
            notes: notes,
            priority: priority
         };

         localStorage.setItem('projects', JSON.stringify(allProjects));
         localStorage.setItem('recentlyViewedTab', JSON.stringify(currentProjectTab.innerHTML));
      }
   }
};

let updateChecklist = (e) => {
   const selectedTab = document.querySelector('.click-tab');
   const name = selectedTab.children[0].textContent;
   const dueDate = selectedTab.children[1].textContent.split(' ')[1];
   let checklistNumber = e.target.id.split('-')[1];
   let projects = JSON.parse(localStorage.getItem('projects'));

   for (let project in projects) {
      if (Object.is(projects[project].name, name) && Object.is(projects[project].dueDate, dueDate)) {
         projects[project].checklist[checklistNumber].isChecked ? 
         projects[project].checklist[checklistNumber].isChecked = false : 
         projects[project].checklist[checklistNumber].isChecked = true;
         
         localStorage.setItem('projects', JSON.stringify(projects));
      }
   }
};

export { redisplayFormForEdit, updateProject, updateChecklist }