document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("button1"); // GET STARTED button
  const closeBtn = document.getElementById("closeModal");
  const submitBtn = document.getElementById("submitForm");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  // Show popup when GET STARTED is clicked
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex"; // make it visible

    // Reset progress bar
    progressBar.style.width = "0%";
    progressText.textContent = ""; // hide text initially

    // Animate progress to ~65%
    setTimeout(() => {
      progressBar.style.transition = "width 1s ease";
      progressBar.style.width = "65%";

      // Show "Almost Complete..." after animation
      setTimeout(() => {
        progressText.textContent = "Almost Complete...";
      }, 1000); // matches animation duration
    }, 100); // small delay for smooth effect
  });

  // Close popup
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    progressBar.style.width = "0%";
    progressText.textContent = "";
  });

  submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  fetch('/save-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone })
  })
  .then(() => {
    // redirect after saving
    window.location.href = "../html/index.html";
  })
  .catch(() => alert("Error saving your information. Please try again."));
});

});
