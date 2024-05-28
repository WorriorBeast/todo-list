import './style.css';
import { createProject } from './create-project.js';

const addProjectBtn = document.querySelector('.add-icon-button');

addProjectBtn.addEventListener('click', createProject);