export default function() {
   let currentFieldSet = this.closest('fieldset');
   let currentItemContainer = this.closest('.note-container') || this.closest('.checklist-container');

   currentFieldSet.removeChild(currentItemContainer);
};