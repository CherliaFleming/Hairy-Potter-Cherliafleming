import { database } from './aquariumData.js';

export const tipList = () => {
   const ul = document.createElement('ul');
   ul.className = 'tips';
   database.tips.forEach(tip => {
       const li = document.createElement('li');
       li.className = 'tip';
       li.textContent = tip.text;
       ul.appendChild(li);
   });
   return ul;
};
