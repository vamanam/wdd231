
document.addEventListener("DOMContentLoaded", () => {
  const membersContainer = document.getElementById("members-container");
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");

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
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    `;

    membersContainer.appendChild(card);
  });
}

document.getElementById("search-box").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = allMembers.filter(m => m.name.toLowerCase().includes(query));
  displayMembers(filtered);
});
