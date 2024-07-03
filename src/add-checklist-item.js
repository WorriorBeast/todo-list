import { default as attributeIterator } from './attribute-iterator';
import { default as removeItem } from './remove-item.js';
import deleteIcon from './icons/delete.svg';

let checklistNum = 2;

export default function(checklist) {
   const checklistFieldset = document.querySelector('.checklist-fieldset');
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
         value: `checklist-${checklistNum}`
      },
      thirdAt: {
         attribute: 'id',
         value: `checklist-${checklistNum}`
      },
      fourthAt: {
         attribute: 'placeholder',
         value: 'Enter Checklist'
      }
   };

   container.classList.add('checklist-container');
   checklistFieldset.appendChild(container);
 
   label.setAttribute('for', `checklist-${checklistNum}`);
   container.appendChild(label);

   if (checklist.type !== 'click') input.value = checklist;

   attributeIterator(inputAttributes, container, input);
 
   input.focus();
 
   checklistNum++;

   appendRemoveChecklistBtn();
};

function appendRemoveChecklistBtn() {
   const deleteButton = document.createElement('button');
   const img = document.createElement('img');
   const checklistContainer = document.querySelector('.checklist-container:last-child');

   deleteButton.addEventListener('click', removeItem);
   deleteButton.setAttribute('type', 'button');
   deleteButton.classList.add('list-delete-btn');
   checklistContainer.appendChild(deleteButton);

   img.src = deleteIcon;
   img.setAttribute('width', '25px');
   deleteButton.appendChild(img);
}