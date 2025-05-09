// Sample course data
const courses = [
  { code: "CSE 110", name: "Intro to Programming", credits: 3, type: "CSE", completed: true },
  { code: "CSE 210", name: "OOP", credits: 4, type: "CSE", completed: false },
  { code: "CSE 111", name: "Data Structures", credits: 3, type: "CSE", completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, type: "WDD", completed: false },
  { code: "WDD 131", name: "Responsive Design", credits: 3, type: "WDD", completed: false },
  { code: "WDD 231", name: "Front-end Dev I", credits: 3, type: "WDD", completed: false },
];

const courseContainer = document.getElementById("course-list");
const creditDisplay = document.getElementById("credit-count");

function displayCourses(filteredCourses) {
  courseContainer.innerHTML = ""; // Clear existing

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} Credits</p>
    `;
    courseContainer.appendChild(card);
  });

  const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = totalCredits;
}

// Filter functions
function filterCourses(type) {
  if (type === "All") {
    displayCourses(courses);
  } else {
    const filtered = courses.filter(course => course.type === type);
    displayCourses(filtered);
  }
}

// Event Listeners
document.getElementById("filter-all").addEventListener("click", () => filterCourses("All"));
document.getElementById("filter-cse").addEventListener("click", () => filterCourses("CSE"));
document.getElementById("filter-wdd").addEventListener("click", () => filterCourses("WDD"));

// Initial display
displayCourses(courses);
