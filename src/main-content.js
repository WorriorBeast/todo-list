import { default as attributeIterator } from './attribute-iterator.js';

const content = document.getElementById('content');

class Edit {
	appendEditBtn() {
		const editBtn = document.createElement('button');
		const contentContainer = document.querySelector('#content');

		editBtn.textContent = 'Edit';
		editBtn.classList.toggle('edit');
		editBtn.setAttribute('type', 'button');

		contentContainer.appendChild(editBtn);
	}
}

class Header {
	constructor(projectName, dueDate) {
		this.projectName = projectName;
		this.dueDate = dueDate;
	}

	appendName() {
		const headerContainer = document.createElement('div');
		const name = document.createElement('h1');

		headerContainer.classList.add('project-header');
		content.appendChild(headerContainer);

		name.textContent = this.projectName;
		name.classList.add('project-name');
		headerContainer.appendChild(name);
	}

	appendDueDate() {
		const headerContainer = document.querySelector('#content > div:not(class)');
		const date = document.createElement('p');

		date.textContent = `Due: ${this.dueDate}`;
		date.classList.add('project-due-date');

		headerContainer.appendChild(date);
	}
}

class Description {
	constructor(description) {
		this.description = description;
	}

	appendDescription() {
		const descriptionContainer = document.createElement('div');
		const header = document.createElement('h2');
		const description = document.createElement('p');

		descriptionContainer.classList.add('description-container');
		content.appendChild(descriptionContainer);

		header.textContent = 'Description';
		header.classList.add('description-header');
		descriptionContainer.appendChild(header);

		description.textContent = this.description;
		description.classList.add('description-text');
		descriptionContainer.appendChild(description);
	}
}

class Checklist {
	constructor(checklistItems) {
		this.checklistItems = checklistItems;
	}

	appendChecklist() {
		const checklistContainer = document.createElement('div');
		const header = document.createElement('h2');
		const listItemContainer =  document.createElement('div');

		checklistContainer.classList.add('checklist-container');
		content.appendChild(checklistContainer);

		header.textContent = 'Checklist';
		header.classList.add('checklist-header');
		checklistContainer.appendChild(header);

		listItemContainer.classList.add('list');
		checklistContainer.appendChild(listItemContainer);

		let count = 1;

		for (let i = 0; i < this.checklistItems.length; i++) {
			if (this.checklistItems[i] !== '') {
				const listItem = document.createElement('div');
				const input = document.createElement('input');
				const label = document.createElement('label')

				const inputAttributes = {
					firstAt: {
						attribute: 'type',
						value: 'checkbox'
					},
					secondAt: {
						attribute: 'name',
						value: `checklist-${count}`
					},
					thirdAt: {
						attribute: 'id',
						value: `checklist-${count}`
					}
				};

				listItem.classList.add('checklist-item');
				listItemContainer.appendChild(listItem);

				attributeIterator(inputAttributes, listItem, input);

				label.textContent = this.checklistItems[i];
				label.setAttribute('for', `checklist-${count}`)
				listItem.appendChild(label);

				count++;
			}
		}
	}
}

class Notes {
	constructor(noteItems) {
		this.noteItems = noteItems;
	}

	appendNotes() {
		const noteContainer = document.createElement('div');
		const header = document.createElement('h2');
		const list = document.createElement('ul');

		noteContainer.classList.add('note-container');
		content.appendChild(noteContainer);

		header.textContent = 'Notes';
		header.classList.add('note-header');
		noteContainer.appendChild(header);

		list.classList.add('list')
		noteContainer.appendChild(list);

		for (let i = 0; i < this.noteItems.length; i++) {
			if (this.noteItems[i] !== '') {
				const note = document.createElement('li');

				note.classList.add('note-item');
				note.textContent = this.noteItems[i];
				list.appendChild(note);
			}
		}
	}
}

export { Edit, Header, Description, Checklist, Notes };