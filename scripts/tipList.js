import { database } from './aquariumData.js';

export const tipList = (tips) => {
    const ul = document.createElement('ul');
    ul.className = 'tips';
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.className = 'tip';
        li.textContent = tip.tip;
        ul.uppendChild(li);
    });
    return ul ;
