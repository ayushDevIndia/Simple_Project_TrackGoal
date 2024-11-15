document.addEventListener("DOMContentLoaded",()=>{
    const checkboxes = document.querySelectorAll(".checkbox");
    const progressBar = document.querySelector(".progress_save");
    const text_statuse = document.querySelector("#text_status");
    function updateProgress() {
      const totalGoals = checkboxes.length;
      const completedGoals = Array.from(checkboxes).filter(cb => cb.checked).length;
      const progressPercent = (completedGoals / totalGoals) * 100;
      const text_status_text=totalGoals-completedGoals;
      progressBar.style.width = `${progressPercent}%`;
      progressBar.textContent = `${completedGoals}/${totalGoals} Completed`;
      text_statuse.textContent = `Add ${text_status_text} Goals Also`;
    }
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener("change", updateProgress);
    });
  
})