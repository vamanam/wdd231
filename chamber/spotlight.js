const spotlightContainer = document.getElementById("spotlight");

fetch("data/members.json")
  .then((response) => response.json())
  .then((data) => {
    // Filter for only silver (2) and gold (3) members
    const spotlightMembers = data.members.filter(member => member.membership >= 2);

    // Shuffle the filtered array
    const shuffled = spotlightMembers.sort(() => 0.5 - Math.random());

    // Get 3 spotlight members (or less if not enough)
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.url}" target="_blank">Visit Website</a>
      `;

      spotlightContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error loading spotlight data:", error);
  });
