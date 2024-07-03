import { default as attributeIterator } from './attribute-iterator';
import { default as removeItem } from './remove-item.js';
import deleteIcon from './icons/delete.svg'

let noteNum = 2;

export default function(note) {
   const noteFieldSet = document.querySelector('.notes-fieldset');
   const container = document.createElement('div');
   const label = document.createElement('label');
   const input = document.createElement('input');

   const inputAttributes = {
      firstAt: {
         attribute: 'type',
         value: 'input'
      },
      secondAt: {
         attribute: 'name',
         value: `note-${noteNum}`,
      },
      thirdAt: {
         attribute: 'id',
         value: `note-${noteNum}`
      },
      fourthAt: {
         attribute: 'placeholder',
         value: 'Enter note'
      }
   };

   container.classList.add('note-container');
   noteFieldSet.appendChild(container);

   label.setAttribute('for', `note-${noteNum}`);
   container.appendChild(label);

   if (note.type !== 'click') input.value = note;

   attributeIterator(inputAttributes, container, input);

   input.focus();

   noteNum++;

   appendRemoveChecklistBtn();
};

function appendRemoveChecklistBtn() {
   const deleteButton = document.createElement('button');
   const img = document.createElement('img');
   const checklistContainer = document.querySelector('.note-container:last-child');

   deleteButton.addEventListener('click', removeItem);
   deleteButton.setAttribute('type', 'button');
   deleteButton.classList.add('list-delete-btn');
   checklistContainer.appendChild(deleteButton);

   img.src = deleteIcon;
   img.setAttribute('width', '25px');
   deleteButton.appendChild(img);
}