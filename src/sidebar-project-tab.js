import deleteIcon from './icons/delete.svg';

export default class SideBarProjectTab {
   appendItem() {
      const li = document.createElement('li');
      const projectList = document.querySelector('.project-list');
 
      projectList.appendChild(li);
 
      const newProject = document.querySelector('.project-list li:last-child');
 
      newProject.classList.add('project-item');
   }
 
   appendName() {
      const title = document.createElement('h3');
      const projectItem = document.querySelector('.project-item:last-child');
 
      title.textContent = 'New Project';
      projectItem.appendChild(title);
 
      const projectName = document.querySelector('.project-item:last-child h3');
 
      projectName.classList.add('project-name');
   }
 
   appendDueDate() {
      const para = document.createElement('p');
      const projectItem = document.querySelector('.project-item:last-child');
 
      para.textContent = 'Due: ';
      projectItem.appendChild(para);
 
      const projectDueDate = document.querySelector('.project-item:last-child p');
 
      projectDueDate.classList.add('project-due-date');
   }

   appendDeleteBtn() {
      const tab = document.querySelector('.project-item:last-child');
      const deleteBtn = document.createElement('button');
      const img = document.createElement('img');

      img.src = deleteIcon;
      img.setAttribute('width', '25px');
      img.setAttribute('alt', 'Trash can icon');

      deleteBtn.appendChild(img);

      deleteBtn.classList.add('sidebar-delete-btn');

      tab.appendChild(deleteBtn);
   }
}