import { Header, Description, Checklist, Notes } from './main-content.js';
import { createProject } from './create-project.js';
import { default as checkPriority } from './check-priority.js';
import { default as removeCurrentContent } from './remove-current-content.js';
import { default as changeTabColor } from './change-tab-color.js';
import { Form, Header as FormHeader, Description as FormDescription, Checklist as FormChecklist, 
		   Notes as FormNotes, Submit, Priority } from "./project-form.js";
import { default as saveUnfinishedProject } from './save-unfinished-project.js';

export default function(e) {
   let savedProjects = JSON.parse(localStorage.getItem('projects'));
   let tab = e.target.closest('.project-item');
   let name = tab.children[0].textContent;
   let dueDate = tab.children[1].textContent.split(' ');

   removeCurrentContent();
	window.removeEventListener('keyup', saveUnfinishedProject);

   for (let project in savedProjects) {
		let savedName = savedProjects[project].name;
		let savedDueDate = savedProjects[project].dueDate;

		if (Object.is(savedName, name) && Object.is(savedDueDate, dueDate[1])) {
			const finalizeProject = [
				new Header(savedProjects[project].name, savedProjects[project].dueDate),
				new Description(savedProjects[project].description),
				new Checklist(savedProjects[project].checklist),
				new Notes(savedProjects[project].notes)
			];

			const recentlyViewedTab = tab.innerHTML;

			localStorage.setItem('recentlyViewedTab', JSON.stringify(recentlyViewedTab));

			createProject(finalizeProject);
			checkPriority(savedProjects[project].priority);
			changeTabColor(tab);
		}
	}

	let unfinishedProject = JSON.parse(localStorage.getItem('unfinishedProject'));

	if (tab.classList.contains('new-tab') && localStorage.getItem('unfinishedProject')) {
		const form = new Form();
		const header = new FormHeader(unfinishedProject.name, unfinishedProject.dueDate);

		form.appendForm();
		header.appendProjectHeader(tab);
		header.appendDueDate(tab);


		const createForm = [
			new FormDescription(unfinishedProject.description),
			new FormChecklist(unfinishedProject.checklist),
			new FormNotes(unfinishedProject.notes),
			new Priority(unfinishedProject.priority),
			new Submit()
		];

		createProject(createForm);
		changeTabColor(tab);

		const priorityFieldset = document.querySelector('.priority-fieldset');

		window.addEventListener('keyup', saveUnfinishedProject);
		priorityFieldset.addEventListener('click', saveUnfinishedProject);

	} else if (tab.classList.contains('new-tab') && !localStorage.getItem('unfinishedProject')) {
		const form = new Form();
		const header = new FormHeader('', '');

		form.appendForm();
		header.appendProjectHeader(tab);
		header.appendDueDate(tab);


		const createForm = [
			new FormDescription(''),
			new FormChecklist(['']),
			new FormNotes(['']),
			new Priority('yes'),
			new Submit()
		];

		createProject(createForm);
		changeTabColor(tab);

		const priorityFieldset = document.querySelector('.priority-fieldset');

		window.addEventListener('keyup', saveUnfinishedProject);
		priorityFieldset.addEventListener('click', saveUnfinishedProject);
	}
};