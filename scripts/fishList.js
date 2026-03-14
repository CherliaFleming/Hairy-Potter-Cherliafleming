import { database } from './aquariumData.js';

export const fishList = () => {
    const ul = document.createElement('ul');
    ul.className = 'fish';

    database.fish.forEach(fish => {
        const li = document.createElement('li');
        li.className = 'fish-card';

        const img = document.createElement('img');
        img.src = fish.image;
        img.alt = fish.name;

        const name = document.createElement('p');
        name.textContent = fish.name;

        li.appendChild(img);    // ← add image to card
        li.appendChild(name);   // ← add name to card
        ul.appendChild(li);     // ← add card to list
    });

    return ul;
};