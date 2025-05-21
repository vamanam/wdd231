const courseData = [
  { code: "CSE 110", category: "cse", completed: true, credits: 2 },
  { code: "WDD 130", category: "wdd", completed: false, credits: 2 },
  { code: "CSE 111", category: "cse", completed: true, credits: 3 },
  { code: "CSE 210", category: "cse", completed: false, credits: 3 },
  { code: "WDD 131", category: "wdd", completed: true, credits: 2 },
  { code: "WDD 231", category: "wdd", completed: false, credits: 3 }
];

const grid = document.getElementById('courseGrid');
const creditCount = document.getElementById('creditCount');

function displayCourses(courses) {
  grid.innerHTML = '';
  courses.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course');
    card.setAttribute('data-category', course.category);
    card.setAttribute('data-completed', course.completed);

    // Add credit level class
    if (course.credits <= 2) {
      card.classList.add('basic-credit');
    } else if (course.credits >= 3) {
      card.classList.add('high-credit');
    }

    if (course.completed) {
      card.classList.add('completed');
    }

    card.innerHTML = `
  <h3>${course.code}</h3>
  <p><strong>Credits:</strong> ${course.credits} 
    <span class="credit-icon" title="${course.credits >= 3 ? 'Advanced Course (3+ credits)' : 'Basic Course (1–2 credits)'}">
      ${course.credits >= 3 ? '🌟' : '✅'}
    </span>
  </p>
`;
   grid.appendChild(card);
  });
}


// Function to update total completed credits
function updateCompletedCredits(courses) {
  const totalCredits = courses
    .filter(course => course.completed)
    .reduce((sum, course) => sum + course.credits, 0);
  creditCount.textContent = totalCredits;
}

// Initial load
displayCourses(courseData);
updateCompletedCredits(courseData);

// Filtering logic
const buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const filteredCourses = courseData.filter(course => {
      if (filter === 'all') return true;
      if (filter === 'completed') return course.completed;
      return course.category === filter;
    });
    displayCourses(filteredCourses);

    // Only count completed courses when "completed" is selected, else reset to full
    if (filter === 'completed') {
      updateCompletedCredits(filteredCourses);
    } else {
      updateCompletedCredits(courseData);
    }
  });
});

// Timestamp
document.getElementById('update-time').textContent = new Date().toLocaleString();

// Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
const section = document.querySelector('.certificate-section');

toggleBtn.addEventListener('click', () => {
  section.classList.toggle('dark');
});
