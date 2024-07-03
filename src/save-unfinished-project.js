export default function() {
   const projectName = document.getElementById('project-name').value;
   const dueDate = document.getElementById('due-date').value;
   const description = document.getElementById('description').value;
   const checklist = document.querySelectorAll('.checklist-container input');
   const notes = document.querySelectorAll('.note-container input');
   const priority = document.querySelector('input[name="priority"]:checked').value;

   let checklistItems = [];
   let noteItems = [];

   for (let i = 0; i < checklist.length; i++) {
      checklistItems.push(checklist[i].value);
   }

   for (let i = 0; i < notes.length; i ++) {
      noteItems.push(notes[i].value);
   }

   let unfinishedProject = {
      name: projectName,
      dueDate: dueDate,
      description: description,
      checklist: checklistItems,
      notes: noteItems,
      priority: priority
   };

   localStorage.setItem('unfinishedProject', JSON.stringify(unfinishedProject));
};