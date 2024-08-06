import { database } from "./database.js";

export const pikomon = () => {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    const column3 = document.getElementById('column3');

    column1.innerHTML = '';
    column2.innerHTML = '';
    column3.innerHTML = '';
 
    for (const pikomon of database) { 
        const pikomonHTML = `
        <article class="piko-card">
            <img src="${pikomon.imageUrl}" class="piko-img">
            <h2 class="piko-name">${pikomon.name}</h2>
                <ul class="piko-info">
                    <li class="piko-category">Category: ${pikomon.category}</li>
                    <li class="piko-abilities">Ability: ${pikomon.abilities}</li>
                    <li class="piko-weakness">Weakness: ${pikomon.weakness}</li>
                </ul>
        </article>
        `;

        if (pikomon.id % 3 === 1) {
            column1.innerHTML += pikomonHTML;
        } else if (pikomon.id % 3 === 2) {
            column2.innerHTML += pikomonHTML;
        } else {
            column3.innerHTML += pikomonHTML;
        };
        
    };
};
