import { database } from './aquariumData.js';

export const locationList = () => {
    const article = document.createElement('article');
    article.className = 'locations';        

    database.locations.forEach(location => {
        const section = document.createElement('section');
        section.className = 'location';    
        section.textContent = location.name;
        article.appendChild(section);
    });

    return article;
};