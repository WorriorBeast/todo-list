export default function(attributesObj, parentEl, childEl) {
   let objectKeys = Object.keys(attributesObj);

   for (let i = 0; i < objectKeys.length; i++) {
      let propName = Object.values(attributesObj[objectKeys[i]]);
    
      childEl.setAttribute(propName[0], propName[1]);
      parentEl.appendChild(childEl);
   }
};