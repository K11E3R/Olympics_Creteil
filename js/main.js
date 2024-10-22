document.addEventListener('DOMContentLoaded', () => {
    const activities = [
        //{ "time": "10h", "activity": "Ouverture Public", "location": "", "type": "partial-day" },
        { "time": "10h-18h", "activity": "Animation mur digitale, Photobooth, Kit coloriage", "location": "Tente Métropole du Grand Paris", "type": "full-day-18" },
        { "time": "10h-23h", "activity": "Mur d'Athlètes Métropolitains", "location": "Déambulation", "type": "full-day-22" },
        { "time": "10h-18h", "activity": "Stand maquillage, Jeu avec dotation billetterie JO", "location": "Grande Tente", "type": "full-day-18" },
        { "time": "10h", "activity": "JO 'Live' en continu", "location": "Écran Géant", "type": "partial-day" },
        { "time": "10h-18h", "activity": "Mur Digital Interactif", "location": "", "type": "full-day-18" },
        { "time": "10h-18h", "activity": "Boxe anglaise", "location": "Grande Tente", "type": "full-day-18" },
        { "time": "10h-18h", "activity": "Handfit", "location": "", "type": "full-day-18" },
        { "time": "10h-18h", "activity": "Babyhand", "location": "Petit terrain Beach", "type": "full-day-18" },
        { "time": "10h-22h", "activity": "Hand à 4 ou Handfauteuil", "location": "Terrain Hand 4", "type": "full-day-22" },
        { "time": "10h-22h", "activity": "Tir Radar", "location": "Tir Radar", "type": "full-day-22" },
        { "time": "10h-22h", "activity": "Mur Digital", "location": "", "type": "full-day-22" },
        { "time": "10h-22h", "activity": "Handbungee", "location": "", "type": "full-day-22" },
        { "time": "10h-18h", "activity": "Tennis de table", "location": "", "type": "full-day-18" },
        { "time": "10h-18h", "activity": "Cirque Chapiteau d'Afrique", "location": "Grande Tente", "type": "full-day-18" },
        { "time": "14h-18h", "activity": "Athlétisme", "location": "", "type": "partial-day" },
        { "time": "10h-18h", "activity": "Arène gladiateur", "location": "Déambulation", "type": "full-day-18" },
        { "time": "10h-13h30", "activity": "Les Fruits Frais", "location": "Tente Ville de Créteil", "type": "partial-day" },
        { "time": "11h-20h30", "activity": "IHF - Beach Handball", "location": "Terrain Beach Hand", "type": "partial-day" },
        { "time": "12h-13h", "activity": "Handfit", "location": "", "type": "partial-day" },
        { "time": "13h-14h", "activity": "Hand à 4 ou Handfauteuil", "location": "Terrain Hand 4", "type": "partial-day" },
        { "time": "19h-21h", "activity": "Gaming & eSport", "location": "Tente Ville de Créteil", "type": "partial-day" },
        { "time": "20h-22h", "activity": "Hand à 4 ou Handfauteuil", "location": "Terrain Hand 4", "type": "partial-day" },
        { "time": "21h-23h", "activity": "JO 'Live' - Match EDF Féminin France / Pays Bas", "location": "Écran Géant", "type": "partial-day" }
        //{ "time": "23h15", "activity": "Fermeture Public", "location": "", "type": "partial-day" }
    ];

    const tables = {
        'full-day-18': document.querySelector('#fullDay18Table tbody'),
        'full-day-22': document.querySelector('#fullDay22Table tbody'),
        'partial-day': document.querySelector('#partialDayTable tbody')
    };

    activities.forEach(activity => {
        const row = document.createElement('tr');
        const timeCell = document.createElement('td');
        const activityCell = document.createElement('td');
        const locationCell = document.createElement('td');

        timeCell.textContent = activity.time;
        activityCell.textContent = activity.activity;
        locationCell.textContent = activity.location;

        row.appendChild(timeCell);
        row.appendChild(activityCell);
        row.appendChild(locationCell);

        if (tables[activity.type]) {
            row.classList.add(activity.type);
            tables[activity.type].appendChild(row);
        }
    });

    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const panel = document.getElementById(acc.getAttribute('aria-controls'));
            const expanded = acc.getAttribute('aria-expanded') === 'true';
            acc.setAttribute('aria-expanded', !expanded);
            panel.style.display = expanded ? 'none' : 'block';
        });
    });
});