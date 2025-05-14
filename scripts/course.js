    const courseData = [
      { code: "CSE 110", category: "cse", completed: true },
      { code: "WDD 130", category: "wdd", completed: false },
      { code: "CSE 111", category: "cse", completed: true },
      { code: "CSE 210", category: "cse", completed: false },
      { code: "WDD 131", category: "wdd", completed: true },
      { code: "WDD 231", category: "wdd", completed: false }
    ];

    const grid = document.getElementById('courseGrid');

    // Render course cards
    courseData.forEach(course => {
      const card = document.createElement('div');
      card.classList.add('course');
      card.setAttribute('data-category', course.category);
      card.setAttribute('data-completed', course.completed);
      if (course.completed) {
        card.classList.add('completed');
      }
      card.textContent = course.code;
      grid.appendChild(card);
    });

    // Filtering logic
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        const allCourses = document.querySelectorAll('.course');

        allCourses.forEach(course => {
          const category = course.getAttribute('data-category');
          const completed = course.getAttribute('data-completed') === 'true';

          if (filter === 'all') {
            course.style.display = 'inline-block';
          } else if (filter === 'completed') {
            course.style.display = completed ? 'inline-block' : 'none';
          } else {
            course.style.display = (category === filter) ? 'inline-block' : 'none';
          }
        });
      });
    });

    // Timestamp
    const updateTime = document.getElementById('update-time');
    updateTime.textContent = new Date().toLocaleString();

    // Dark mode
    const toggleBtn = document.getElementById('darkModeToggle');
    const section = document.querySelector('.certificate-section');

    toggleBtn.addEventListener('click', () => {
      section.classList.toggle('dark');
    });