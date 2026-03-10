import { database } from './aquariumData.js';

export const locationList = () => {
     const article = document.createElementc('article');
     article.className = 'locations';
    
    location.forEach (location => {
        const section = document.creatElement('section');
        section.className = 'location';
        article.appendChild.(section);
});
    return article;
};
