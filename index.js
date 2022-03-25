// Add function to change state of card
function changeState(event) {
  event.preventDefault();

  // Get the selected rating value
  let rating = document.querySelector('input[name="rating"]:checked').value;
  const ratingValues = ["one", "two", "three", "four", "five"];
  let ratingDisplay = document.querySelector("#selected-rating");
  // Display the selected rating in the thank you state
  ratingValues.forEach((element, index) => {
    if (rating === element) {
      ratingDisplay.innerHTML = index + 1;
    }
  });

  // Add hide class to rating state
  document.getElementById("rating-state").classList.add("hide");
  // Remove hide class from thank you state
  document.getElementById("thank-you-state").classList.remove("hide");
}

// Add event listener for the submit button
let submit = document.querySelector("#submit-btn");
submit.addEventListener("click", changeState);