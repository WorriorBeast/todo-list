export default function(name) {
   let splitName = name.split(' ');

   for (let i = 0; i < splitName.length; i++) {
      if (splitName[i].length > 0) {
         let upperCaseWord = splitName[i].at(0).toUpperCase() + splitName[i].slice(1);
         
         if (i === 0) splitName[i] = upperCaseWord;

         if (checkForWordsNotCapitalized(splitName[i]) && i !== 0) {
            splitName[i] = splitName[i].at(0).toLowerCase() + splitName[i].slice(1);
         }
      }
   }

   return splitName.join(' ');
};

let checkForWordsNotCapitalized = (name) => {
   const notCapitalizedWords = ['A', 'And', 'As', 'At', 'But', 'By', 'Down', 'For', 'From', 'If', 'In',
      'Into', 'Like', 'Near', 'Nor', 'Of', 'Off', 'On', 'Once', 'Onto', 'Or', 'Over', 'Past', 'So', 'Than',
      'The', 'That', 'To', 'Upon', 'When', 'With', 'Yet'
   ];

   return notCapitalizedWords.some(word => (word == name));
};