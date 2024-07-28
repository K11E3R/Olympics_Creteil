document.querySelectorAll('.event').forEach(function(element) {
  element.addEventListener('mouseover', function() {
      this.querySelector('.event-info').style.visibility = 'visible';
  });
  element.addEventListener('mouseout', function() {
      this.querySelector('.event-info').style.visibility = 'hidden';
  });
});

document.addEventListener('DOMContentLoaded', function() {

  const activities = [
    {"time": "10h", "activity": "Ouverture Public", "location": "", "type": "full-day-18"},
    {"time": "10h-18h", "activity": "Animation mur digitale, Photobooth, Kit coloriage", "location": "Tente Métropole du Grand Paris (C7)", "type": "full-day-18"},
    {"time": "10h-23h", "activity": "Mur d'Athlètes Metropolitains", "location": "Tente Val de Marne (K7)", "type": "full-day-22"},
    {"time": "10h-18h", "activity": "Stand maquillage, Jeu avec dotation billetterie JO", "location": "", "type": "full-day-18"},
    {"time": "10h", "activity": "JO 'Live' en continu", "location": "", "type": "full-day-18"},
    {"time": "10h-18h", "activity": "Mur Digital Interactif", "location": "Mur Digital (E3)", "type": "full-day-18"},
    {"time": "10h-18h", "activity": "Boxe anglaise", "location": "", "type": "full-day-18"},
    {"time": "10h-18h", "activity": "Handfit", "location": "", "type": "full-day-18"},
    {"time": "10h-18h", "activity": "Babyhand", "location": "Petit terrain Beach (F4)", "type": "full-day-18"},
    {"time": "10h-22h", "activity": "Hand à 4 ou Handfauteuil", "location": "Terrain Hand 4 (H7)", "type": "full-day-22"},
    {"time": "10h-22h", "activity": "Tir Radar", "location": "Tir Radar (D3)", "type": "full-day-22"},
    {"time": "10h-22h", "activity": "Mur Digital", "location": "", "type": "full-day-22"},
    {"time": "10h-22h", "activity": "Handbungee", "location": "Handbungee (D6)", "type": "full-day-22"},
    {"time": "10h-18h", "activity": "Tennis de table", "location": "", "type": "full-day-18"},
    {"time": "10h-18h", "activity": "Cirque Chapiteau d'Afrique", "location": "Grande Tente (H5)", "type": "full-day-18"},
    {"time": "14h-18h", "activity": "Athlétisme", "location": "", "type": "partial-day"},
    {"time": "13h-18h", "activity": "Arène gladiateur", "location": "", "type": "partial-day"},
    {"time": "10h-13h30", "activity": "Les Fruits Frais", "location": "", "type": "partial-day"},
    {"time": "11h-20h30", "activity": "IHF - Beach Handball", "location": "Terrain Beach Hand (F5)", "type": "partial-day"},
    {"time": "12h-13h", "activity": "Handfit", "location": "", "type": "partial-day"},
    {"time": "13h-14h", "activity": "Hand à 4 ou Handfauteuil", "location": "", "type": "partial-day"},
    {"time": "19h-23h", "activity": "Gaming & eSport", "location": "", "type": "partial-day"},
    {"time": "20h-22h", "activity": "Hand à 4 ou Handfauteuil", "location": "", "type": "partial-day"},
    {"time": "21h-23h", "activity": "JO 'Live' - Match EDF Féminin France / Pays Bas", "location": "", "type": "partial-day"},
    {"time": "23h15", "activity": "Fermeture Public", "location": "", "type": "partial-day"}
  ];

  const fullDay18TableBody = document.querySelector('#fullDay18Table tbody');
  const fullDay22TableBody = document.querySelector('#fullDay22Table tbody');
  const partialDayTableBody = document.querySelector('#partialDayTable tbody');

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

    if (activity.type === 'full-day-18') {
      row.classList.add('full-day-18');
      fullDay18TableBody.appendChild(row);
    } else if (activity.type === 'full-day-22') {
      row.classList.add('full-day-22');
      fullDay22TableBody.appendChild(row);
    } else {
      row.classList.add('partial-day');
      partialDayTableBody.appendChild(row);
    }
  });
});
