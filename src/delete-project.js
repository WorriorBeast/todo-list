import { default as removeCurrentContent } from './remove-current-content.js';

export default function(e) {
	e.stopPropagation();

	const ul = document.querySelector('.project-list');
	let currentProjectTab = this.closest('.project-item');

	let currentName = currentProjectTab.children[0].textContent;
	let currentDueDate = currentProjectTab.children[1].textContent.split(' ');

	let savedProjects = JSON.parse(localStorage.getItem('projects'));

	if (currentProjectTab.classList.contains('click-tab')) {
		const projectList = document.getElementsByClassName('project-item');

		removeCurrentContent();
		
		for (let i = 0; i < projectList.length; i++) {
			if (i == projectList.length - 1 && projectList[i].innerHTML == currentProjectTab.innerHTML && projectList.length !== 1) {
				projectList[i - 1].click();

			} else if (i !== projectList.length - 1 && projectList[i].innerHTML == currentProjectTab.innerHTML && projectList.length !== 1) {
				projectList[i + 1].click();

			} else if (i == 0 && projectList.length == 0) {
				break;
			}
		}
	}

	ul.removeChild(currentProjectTab);

	for (let project in savedProjects) {
		let savedName = savedProjects[project].name;
		let savedDueDate = savedProjects[project].dueDate;

		if (Object.is(savedName, currentName) && Object.is(savedDueDate, currentDueDate[1])) {
			const {[project]: remove , ...projects} = savedProjects;
			
			localStorage.setItem('projects', JSON.stringify(projects));
		}
	}
};