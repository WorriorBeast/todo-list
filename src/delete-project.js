import { default as removeCurrentContent } from './remove-current-content.js';

export default function(e) {
	e.stopPropagation();
	removeCurrentContent();

	const ul = document.querySelector('.project-list');
	let currentProjectTab = this.closest('.project-item');

	let currentName = currentProjectTab.children[0].textContent;
	let currentDueDate = currentProjectTab.children[1].textContent.split(' ');

	let savedProjects = JSON.parse(localStorage.getItem('projects'));

	for (let project in savedProjects) {
		let savedName = savedProjects[project].name;
		let savedDueDate = savedProjects[project].dueDate;

		if (Object.is(savedName, currentName) && Object.is(savedDueDate, currentDueDate[1])) {
			const {[project]: remove , ...projects} = savedProjects;
			
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	}

	ul.removeChild(currentProjectTab);
};