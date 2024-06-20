import { default as checkDueDateFormat } from './check-due-date-format';
import { Header, Description, Checklist, Notes, Priority } from './main-content';
import { createProject } from './create-project';
import { default as finalizeTab } from './finalize-tab.js';
import { default as saveProject } from './save-project-to-local-storage.js';

export default function getForm(e) {
	e.preventDefault();

	const name = document.getElementById('project-name').value;
	const dueDate = document.getElementById('due-date').value;
	const description = document.getElementById('description').value;
	const checklist = document.querySelectorAll('.checklist-container input');
	const notes = document.querySelectorAll('.note-container input');
	const priority = document.querySelector('input[name="priority"]:checked').value;

	const content = document.getElementById('content');
	const form = document.getElementById('create-project');

	let checklistItems = [];
	let noteItems = [];

	const finalizeProject = [
		new Header(name, dueDate),
		new Description(description),
		new Checklist(checklistItems),
		new Notes(noteItems),
		new Priority(priority)
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
		for (let i = 0; i < checklist.length; i++) {
			checklistItems.push(checklist[i].value);
		}
	
		for (let i = 0; i < notes.length; i ++) {
			noteItems.push(notes[i].value);
		}

		content.removeChild(form);

		trimInput();
		createProject(finalizeProject);
		finalizeTab(name, dueDate);
		saveProject(name, dueDate, description, checklistItems, noteItems, priority);

	} else {
		return;
	}
};