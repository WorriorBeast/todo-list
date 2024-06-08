import { default as checkDueDateFormat } from './check-due-date-format';
import { Header, Description, Checklist, Notes } from './main-content';

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

	let test = new Header(name, dueDate);
	let test2 = new Description(description);
	let test3 = new Checklist(checklistItems);
	let test4 = new Notes(noteItems);

	if (checkDueDateFormat(dueDate)) {
		for (let i = 0; i < checklist.length; i++) {
			checklistItems.push(checklist[i].value);
		}
	
		for (let i = 0; i < notes.length; i ++) {
			noteItems.push(notes[i].value);
		}

		console.log({name, dueDate, description, checklistItems, noteItems, priority});

		content.removeChild(form);

		test.appendName();
		test.appendDueDate();

		test2.appendDescription();

		test3.appendChecklist();

		test4.appendNotes();

	} else {
		return;
	}
};