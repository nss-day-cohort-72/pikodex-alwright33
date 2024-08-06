import { database } from "./database.js";

export const pikomon = () => {
    let pikomonHTML = '';
    for (const pikomon of database) {
        
        pikomonHTML += `
        <article class="pikomon">
            <img src="${pikomon.imageUrl}>
            <ul class="pikomon__details">
                <li class="pikomon__category">"${pikomon.category}"</li>
                <li class="pikomon__abilities">"${pikomon.abilities}"</li>
                <li class="pikomon__weakness">"${pikomon.weakness}"</li>
            </ul>
        </article>
        `
        return pikomonHTML;
    };
};