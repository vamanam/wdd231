import { openModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const eventsContainer = document.getElementById('eventsContainer');

  async function fetchEvents() {
    try {
      const response = await fetch('data/events.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const events = await response.json();
      displayEvents(events);
    } catch (error) {
      console.error('Failed to fetch events:', error);
      eventsContainer.innerHTML = '<p class="error">Failed to load events. Please try again later.</p>';
    }
  }

  function displayEvents(events) {
    if (!Array.isArray(events)) return;

    const eventCards = events.map(event => `
      <div class="event-card">
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Time:</strong> ${event.time}</p>
        <p><strong>Type:</strong> ${event.type}</p>
        <button class="details-btn" data-id="${event.id}">More Info</button>
      </div>
    `).join('');

    eventsContainer.innerHTML = eventCards;
    attachModalListeners(events);
  }

  function attachModalListeners(events) {
    const buttons = document.querySelectorAll('.details-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const event = events.find(e => e.id == id);
        if (event) {
          openModal(`
            <h2 id="modalTitle">${event.title}</h2>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Entry Fee:</strong> ${event.fee}</p>
            <p id="modalDesc"><strong>Description:</strong> ${event.description}</p>
            <a href="contact.html" class="cta-btn">RSVP or Book</a>
          `);
        }
      });
    });
  }

  fetchEvents();
});