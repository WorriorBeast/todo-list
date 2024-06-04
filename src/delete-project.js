export default function() {
	const content = document.getElementById('content');
	const form = document.getElementById('create-project');
	const ul = document.querySelector('.project-list');
	let currentProjectTab = this.closest('.project-item');

	ul.removeChild(currentProjectTab);
	content.removeChild(form);
};