import { database } from './aquariumData.js';

export const fishList = () => {
   const ul = document.createElement('ul');
   ul.className = 'fish';
   database.fish.forEach(fish => {
       const li = document.createElement('li');
       li.className = 'fish-card';
       li.textContent = fish.name;
       ul.appendChild(li);
   });
   return ul;           

};

