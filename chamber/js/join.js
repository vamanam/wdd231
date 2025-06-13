document.getElementById("timestamp").value = new Date().toISOString();
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    function showStep(index) {
      steps.forEach((step, i) => {
        step.classList.toggle("active", i === index);
      });
    }

    document.getElementById("joinForm").addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        } else {
          this.submit();
        }
      }
    });

    showStep(currentStep);
     document.querySelectorAll(".card a").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const modalId = this.getAttribute("href").replace("#", "");
        document.getElementById(modalId).style.display = "flex";
      });
    });
  
  
  document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#someButton');
  if (button) {
    button.addEventListener('click', handleClick);
  }
});
