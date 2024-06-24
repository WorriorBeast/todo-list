import { Header, Description, Checklist, Notes } from './main-content.js';
import { createProject } from './create-project.js';
import { default as checkPriority } from './check-priority.js';

export default function(e) {
   let savedProjects = JSON.parse(localStorage.getItem('projects'));
   let tab = e.target.closest('.project-item');
   let name = tab.children[0].textContent;
   let dueDate = tab.children[1].textContent.split(' ');

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

			createProject(finalizeProject);
			checkPriority(savedProjects[project].priority);
		}
	}
};