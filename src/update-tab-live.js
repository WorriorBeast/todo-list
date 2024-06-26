let updateName = (e, tab) => {
   let tabName = tab.children[0];
   let key = e.key;
   let projectName = e.target.value;

   if (key == 'Backspace') {
      let updatedName = projectName.slice(0, -1);

      tabName.textContent = updatedName;

      if (projectName.length == 1 || projectName.length == 0) {
         tabName.textContent = 'New Project';
      }

   } else if (checkForWhiteSpaceAndModifierKeys(key)) {
      return;

   } else if ((!Number(key) && key !== '0') || key == ' ') {
      tabName.textContent = projectName + key;

   } else {
      e.preventDefault();
   }
};

let updateDueDate = (e, tab) => {
   let tabDueDate = tab.children[1];
   let key = e.key;
   let date = e.target.value;
   let dateArray = date.slice('');

   if (key == 'Backspace') {
      let updatedDate = date.slice(0, -1);

      tabDueDate.textContent = `Due: ${updatedDate}`;

   } else if ((Number(key) || key == '0') && dateArray.length < 5) {
      tabDueDate.textContent = `Due: ${date + key}`;

   } else if (checkForWhiteSpaceAndModifierKeys(key)) {
      return;

   } else {
      e.preventDefault();
   }
};

let addForwardSlash = (e, tab) => {
   let tabDueDate = tab.children[1];
   let date = e.target.value;
   let dateArray = date.slice('');

   if (dateArray.length == 2 && e.key !== 'Backspace') {
      e.target.value = date + '/';
      tabDueDate.textContent = `Due: ${date}/`;
      
   } else if (dateArray.length == 3 && e.key !== 'Backspace' && Number(e.key)) {
      e.target.value = dateArray[0] + dateArray[1] + '/' + dateArray[2];
      tabDueDate.textContent = `Due: ${dateArray[0] + dateArray[1] + '/' + dateArray[2]}`;
   }
}

let checkForWhiteSpaceAndModifierKeys = (keyEntered) => {
   const unwantedKeys = ['Shift', 'Enter', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
                 'Control', 'Alt', 'Tab', 'CapsLock', 'Escape'];

   return unwantedKeys.some(unwantedKey => (keyEntered === unwantedKey));
};

export { updateName, updateDueDate, addForwardSlash };