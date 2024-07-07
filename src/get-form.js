import { default as checkDueDateFormat } from './check-due-date-format';
import { Edit, Header, Description, Checklist, Notes } from './main-content';
import { createProject } from './create-project';
import { default as finalizeTab } from './finalize-tab.js';
import { default as saveProject } from './save-project-to-local-storage.js';
import { default as checkPriority } from './check-priority.js';
import { default as sortTabs } from './sort-tabs.js';
import { default as capitalizeName } from './capitalize-name.js';
import { default as saveUnfinishedProject } from './save-unfinished-project.js';
import { updateProject } from './edit-project.js';

export default function getForm(e) {
	e.preventDefault();

	let name = document.getElementById('project-name').value;
	const dueDate = document.getElementById('due-date').value;
	const description = document.getElementById('description').value;
	const checklist = document.querySelectorAll('.checklist-container input');
	const notes = document.querySelectorAll('.note-container input');
	const priority = document.querySelector('input[name="priority"]:checked').value;

	const content = document.getElementById('content');
	const form = document.getElementById('create-project');

	let checklistItems = [];
	let noteItems = [];

	name = capitalizeName(name);

	const finalizeProject = [
		new Edit(),
		new Header(name, dueDate),
		new Description(description),
		new Checklist(checklistItems),
		new Notes(noteItems)
	];

	let trimInput = () => {
		for (let i = 0; i < checklistItems.length; i++) {
			checklistItems[i] = checklistItems[i].trim();
		}

		for (let i = 0; i < noteItems.length; i++) {
			noteItems[i] = noteItems[i].trim();
		}
	};

	if (checkDueDateFormat(dueDate)) {
		let edited = false;

		for (let i = 0; i < checklist.length; i++) {
			checklistItems.push(checklist[i].value);
		}
	
		for (let i = 0; i < notes.length; i ++) {
			noteItems.push(notes[i].value);
		}

		if (localStorage.getItem('projectToEdit')) {
			updateProject(name, dueDate, description, checklistItems, noteItems, priority);
			edited = true;
		}

		content.removeChild(form);

		trimInput();
		createProject(finalizeProject);

		if (!localStorage.getItem('projectToEdit')) {
			saveProject(name, dueDate, description, checklistItems, noteItems, priority);
		}

		const selectedTab = document.querySelector('.click-tab');
		
		finalizeTab(name, dueDate, selectedTab);
		checkPriority(priority, selectedTab);
		sortTabs();

		selectedTab.classList.remove('new-tab');

		localStorage.setItem('recentlyViewedTab', JSON.stringify(selectedTab.innerHTML));

		if (!edited) localStorage.removeItem('unfinishedProject');

		localStorage.removeItem('projectToEdit');

      window.removeEventListener('keyup', saveUnfinishedProject);

	} else {
		return;
	}
};