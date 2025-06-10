const spotlightContainer = document.getElementById('spotlight');

async function loadSpotlights() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();

    const filtered = members.filter(member =>
      member.membership === 'Gold' || member.membership === 'Silver'
    );

    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightContainer.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p class="membership">${member.membership} Member</p>
      `;
      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading spotlight data:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadSpotlights);
