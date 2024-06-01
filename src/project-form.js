import { default as attributeIterator } from './attribute-iterator.js';
import { default as addChecklistItem } from './add-checklist-item.js';
import { default as addNoteItem } from './add-note.js';
import deleteIcon from './icons/delete.svg';

class Form {
   appendForm() {
      const content = document.getElementById('content');
      const form = document.createElement('form');

      const inputAttributes = {
         firstAt: {
            attribute: 'action',
            value: '#'
         },
         secondAt: {
            attribute: 'method',
            value: 'get'
         },
         thirdAt: {
            attribute: 'id',
            value: 'create-project'
         }
      }

      attributeIterator(inputAttributes, content, form);
   }
}

class Header {
   appendProjectHeader() {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const nameContainer = document.createElement('div');
      const form = document.getElementById('create-project');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'project-name'
         },
         secondAt: {
            attribute: 'name',
            value: 'project-name'
         },
         thirdAt: {
            attribute: 'id',
            value: 'project-name'
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'Project Name'
         },
         fifthAt: {
            attribute: 'required',
            value: ''
         }
      };

      nameContainer.classList.add('name-container');

      form.appendChild(nameContainer);

      const name = document.querySelector('form div');

      label.setAttribute('for', 'project-name');
      name.appendChild(label);

      attributeIterator(inputAttributes, name, input);

      input.focus();
   }

   appendDueDate() {
      const form = document.getElementById('create-project');
      const dateContainer = document.createElement('div');
      const dateLabel = document.createElement('label');
      const inputDate = document.createElement('input');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'text'
         },
         secondAt: {
            attribute: 'name',
            value: 'due-date'
         },
         thirdAt: {
            attribute: 'id',
            value: 'due-date'
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'mm/dd'
         },
         fifthAt: {
            attribute: 'required',
            value: ''
         }
      };

      dateContainer.classList.add('due-date-container');
      form.appendChild(dateContainer);

      dateLabel.textContent = 'Due: ';
      dateLabel.setAttribute('for', 'due-date');

      dateContainer.appendChild(dateLabel);
      
      attributeIterator(inputAttributes, dateContainer, inputDate);
   }
}

class Description {
   appendDescription() {
      const form = document.getElementById('create-project');
      const descriptionContainer = document.createElement('div');
      const label = document.createElement('label');
      const textArea = document.createElement('textarea');

      const textAreaAttributes = {
         firstAt: {
            attribute: 'id',
            value: 'description'
         },
         secondAt: {
            attribute: 'name',
            value: 'description'
         },
         thirdAt: {
            attribute: 'rows',
            value: '5'
         },
         fourthAt: {
            attribute: 'cols',
            value: '60'
         }
      };

      descriptionContainer.classList.add('description-container');

      form.appendChild(descriptionContainer);

      label.textContent = 'Description';
      label.setAttribute('for', 'description');

      descriptionContainer.appendChild(label);

      attributeIterator(textAreaAttributes, descriptionContainer, textArea);
   }
}

class Checklist {
   appendChecklist() {
      const form = document.getElementById('create-project');
      const fieldSet = document.createElement('fieldset');
      const legend = document.createElement('legend');
      const container = document.createElement('div');
      const label = document.createElement('label');
      const input = document.createElement('input');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: `checklist-1`
         },
         secondAt: {
            attribute: 'name',
            value: `checklist-1`
         },
         thirdAt: {
            attribute: 'id',
            value: `checklist-1`
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'Enter Checklist'
         }
      };
      
      fieldSet.classList.add('checklist-fieldset');
      form.appendChild(fieldSet);

      legend.textContent = 'Checklist';
      legend.setAttribute('id', 'checklist');

      fieldSet.appendChild(legend);

      container.classList.add('checklist-container');
      fieldSet.appendChild(container);

      label.setAttribute('for', 'checklist-1');
      container.appendChild(label);

      attributeIterator(inputAttributes, container, input);
   }

   appendRemoveChecklistBtn() {
      const deleteButton = document.createElement('button');
      const img = document.createElement('img');
      const checklistContainer = document.querySelector('.checklist-container');

      deleteButton.setAttribute('type', 'button');
      deleteButton.classList.add('list-delete-btn');
      checklistContainer.appendChild(deleteButton);

      img.src = deleteIcon;
      img.setAttribute('width', '25px');
      deleteButton.appendChild(img);
   }

   appendAddChecklistBtn() {
      const form = document.getElementById('create-project');
      const addItemContainer = document.createElement('div');
      const iconBtn = document.createElement('button');
      const addItem = document.createElement('div');

      addItemContainer.classList.add('add-list-item-container');

      form.appendChild(addItemContainer);

      iconBtn.setAttribute('type', 'button');
      iconBtn.classList.add('add-checklist-button');
      iconBtn.addEventListener('click', addChecklistItem);

      addItemContainer.appendChild(iconBtn);

      addItem.textContent = 'New Checklist';
      addItem.classList.add('add-checklist-item-text');
      
      addItemContainer.appendChild(addItem);
   }
}

class Notes {
   appendNotes() {
      const form = document.getElementById('create-project');
      const fieldSet = document.createElement('fieldset');
      const container = document.createElement('div');
      const legend = document.createElement('legend');
      const label = document.createElement('label');
      const input = document.createElement('input');

      const inputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'input'
         },
         secondAt: {
            attribute: 'name',
            value: 'note-1'
         },
         thirdAt: {
            attribute: 'id',
            value: 'note-1'
         },
         fourthAt: {
            attribute: 'placeholder',
            value: 'Enter Note'
         }
      };

      fieldSet.classList.add('notes-fieldset');
      form.appendChild(fieldSet);

      legend.textContent = 'Notes';
      legend.setAttribute('id', 'notes');
      fieldSet.appendChild(legend);

      container.classList.add('note-container');
      fieldSet.appendChild(container);

      label.setAttribute('for', 'note-1');
      container.appendChild(label);

      attributeIterator(inputAttributes, container, input);
   }

   appendRemoveNoteBtn() {
      const deleteButton = document.createElement('button');
      const img = document.createElement('img');
      const checklistContainer = document.querySelector('.note-container');

      deleteButton.setAttribute('type', 'button');
      deleteButton.classList.add('list-delete-btn');
      checklistContainer.appendChild(deleteButton);

      img.src = deleteIcon;
      img.setAttribute('width', '25px');
      deleteButton.appendChild(img);
   }

   appendAddNoteBtn() {
      const form = document.getElementById('create-project');
      const addItemContainer = document.createElement('div');
      const iconBtn = document.createElement('button');
      const addNote = document.createElement('div');

      addItemContainer.classList.add('add-list-item-container');
      form.appendChild(addItemContainer);

      iconBtn.setAttribute('type', 'button');
      iconBtn.classList.add('add-note-button');
      iconBtn.addEventListener('click', addNoteItem);

      addItemContainer.appendChild(iconBtn);

      addNote.textContent = 'New Note';
      addNote.classList.add('add-checklist-item-text');
      addItemContainer.appendChild(addNote);
   }
}

class Priority {
   appendAskIfPriority() {
      const form = document.getElementById('create-project');
      const fieldSet = document.createElement('fieldset');
      const legend = document.createElement('legend');
      const yesInput = document.createElement('input');
      const noInput = document.createElement('input');
      const yesLabel = document.createElement('label');
      const noLabel = document.createElement('label');

      const yesInputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'radio'
         },
         secondAt: {
            attribute: 'name',
            value: 'priority'
         },
         thirdAt: {
            attribute: 'id',
            value: 'yes'
         },
         fourthAt: {
            attribute: 'value',
            value: 'yes'
         }
      };

      const noInputAttributes = {
         firstAt: {
            attribute: 'type',
            value: 'radio'
         },
         secondAt: {
            attribute: 'name',
            value: 'priority'
         },
         thirdAt: {
            attribute: 'id',
            value: 'no'
         },
         fourthAt: {
            attribute: 'value',
            value: 'no'
         }
      };

      fieldSet.classList.add('priority-fieldset');
      form.appendChild(fieldSet);

      legend.textContent = 'Priority';
      legend.setAttribute('id', 'priority');

      fieldSet.appendChild(legend);

      attributeIterator(yesInputAttributes, fieldSet, yesInput);

      yesLabel.textContent = 'Yes';
      yesLabel.setAttribute('for', 'yes');
      fieldSet.appendChild(yesLabel);

      attributeIterator(noInputAttributes, fieldSet, noInput);

      noLabel.textContent = 'No';
      noLabel.setAttribute('for', 'no');
      fieldSet.appendChild(noLabel);
   }
}

class Submit {
   appendSubmitBtn() {
      const form = document.getElementById('create-project');
      const div = document.createElement('div');
      const submitBtn = document.createElement('button');

      div.classList.add('align-submit-btn');
      form.appendChild(div);

      submitBtn.textContent = 'Submit';
      submitBtn.setAttribute('type', 'submit');

      div.appendChild(submitBtn);
   }
}

export {Form, Header, Description, Checklist, Notes, Priority, Submit};