
document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members-container");
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");

  const members = [
    { name: "Sahara Textiles", url: "https://saharatextiles.com", image: "images/sahara.jpg", membership: "Gold" },
    { name: "Desert Tech Solutions", url: "https://deserttech.ml", image: "images/deserttech.jpg", membership: "Silver" },
    { name: "Nomad Coffee Co.", url: "https://nomadcoffee.ml", image: "images/nomadcoffee.jpg", membership: "Bronze" },
    { name: "Timbuktu Tours", url: "https://timbuktutours.ml", image: "images/tours.jpg", membership: "Gold" },
    { name: "Savanna Grocers", url: "https://savannagrocers.ml", image: "images/savanna.jpg", membership: "Silver" },
    { name: "Oasis Spa & Wellness", url: "https://oasisspa.ml", image: "images/oasis.jpg", membership: "Bronze" },
    { name: "Kora Craftworks", url: "https://koracrafts.ml", image: "images/kora.jpg", membership: "Silver" },
    { name: "GoldTech Solutions", url: "https://goldtech.com", image: "images/goldtech.png", membership: "Gold" },
    { name: "SilverWave Marketing", url: "https://silverwave.com", image: "images/silverwave.png", membership: "Silver" },
    { name: "Bronze Base Ltd.", url: "https://bronzebase.com", image: "images/bronzebase.png", membership: "Bronze" }
  ];

  const container = document.getElementById("members-container");

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p><strong>Membership:</strong> ${member.membership}</p>
        <a href="${member.url}" target="_blank">Visit Website</a>
      `;
    container.appendChild(card);
  });
  // Fetch members data from JSON
  async function fetchMembers() {
    try {
      const response = await fetch("data/members.json");
      const data = await response.json();
      displayMembers(data.members);
    } catch (error) {
      console.error("Error loading member data:", error);
    }
  }
  // Fetch spotlight members
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
      const goldSilver = data.members.filter(
        m => m.membershipLevel === 2 || m.membershipLevel === 3
      );

      const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);
      displayMembers(selected);
    })
    .catch((error) => console.error("Error fetching members:", error));

  // Display members in the selected layout
  let allMembers = [];

  function displayMembers(members) {
    membersContainer.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");
      card.setAttribute("data-level", member.level);
      card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    `;
      membersContainer.appendChild(card);
    });
  }

  function filterByLevel(level) {
    if (level === "all") {
      displayMembers(allMembers);
    } else {
      const filtered = allMembers.filter(m => m.level == level);
      displayMembers(filtered);
    }
  }

  document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      filterByLevel(button.dataset.level);
    });
  });

  // Toggle view: Grid
  gridBtn.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  // Toggle view: List
  listBtn.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });

  // Footer dynamic content
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  fetchMembers();
});

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    // Highlight based on membership level
    if (member.membershipLevel === 2) {
      card.classList.add("silver");
    } else if (member.membershipLevel === 3) {
      card.classList.add("gold");
    }

    const badge = member.membershipLevel === 3
      ? '<span class="badge gold-badge">Gold Member</span>'
      : member.membershipLevel === 2
        ? '<span class="badge silver-badge">Silver Member</span>'
        : '';

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name} ${badge}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p>Membership: ${member.membershipLevel}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const el = document.querySelector('#someElement');
  if (el) {
    el.addEventListener('click', someFunction);
  }
});
