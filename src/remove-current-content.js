export default function() {
   const content = document.getElementById('content');

   while (content.lastChild !== null) {
		content.removeChild(content.lastChild);
   }
};