// Initialize vote counts
let votes = {
  "1": 0,
  "2": 0,
  "3": 0
};

// Function to update results
function updateResults() {
  const resultsList = document.getElementById("results-list");
  resultsList.innerHTML = ""; // Clear previous results

  for (const [option, count] of Object.entries(votes)) {
    const li = document.createElement("li");
    li.textContent = `Option ${option}: ${count} votes`;
    resultsList.appendChild(li);
  }
}

// Add event listeners to vote buttons
document.querySelectorAll(".vote-btn").forEach(button => {
  button.addEventListener("click", () => {
    const option = button.parentElement.getAttribute("data-option");
    votes[option]++;
    updateResults();
  });
});

// Initial results display
updateResults();