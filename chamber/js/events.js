document.addEventListener("DOMContentLoaded", () => {
  const eventsCarousel = document.querySelector("#events-carousel");

  fetch('data/events.json')
    .then(response => response.json())
    .then(data => {
      data.events.forEach(event => {
        const li = document.createElement("li");
        li.innerHTML = `
          <img src="${event.image}" alt="${event.title}">
          <strong>${event.date}</strong><br>${event.title}
        `;
        eventsCarousel.appendChild(li);
      });
    })
    .catch(error => {
      console.error("Error loading events:", error);
    });
});


  let autoScroll = setInterval(() => {
  eventsCarousel.scrollBy({ left: 300, behavior: 'smooth' });
}, 4000);

// Pause on hover
eventsCarousel.addEventListener('mouseover', () => clearInterval(autoScroll));
eventsCarousel.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    eventsCarousel.scrollBy({ left: 300, behavior: 'smooth' });
  }, 4000);
});


let startX;

eventsCarousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, false);

eventsCarousel.addEventListener('touchend', (e) => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // swipe left
      eventsCarousel.scrollBy({ left: 300, behavior: 'smooth' });
    } else {
      // swipe right
      eventsCarousel.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }
}, false);
