let allProjects = {};

export default function(name, dueDate, description, checklist, notes, priority) {
   if (!localStorage.getItem('projects')) {
      allProjects[`${name}`] = {
         name: name,
         dueDate: dueDate,
         description: description,
         checklist: checklist,
         notes: notes,
         priority: priority
      };

      localStorage.setItem('projects', JSON.stringify(allProjects));
      
   } else {
      let savedProjects = JSON.parse(localStorage.getItem('projects'));

      Object.assign(allProjects, savedProjects);

      allProjects[`${name}`] = {
         name: name,
         dueDate: dueDate,
         description: description,
         checklist: checklist,
         notes: notes,
         priority: priority
      };

      localStorage.setItem('projects', JSON.stringify(allProjects));
   }
};