const cards = document.querySelectorAll('.card');
let currentIndex = 0;

// Function to show the next card
function showNextCard() {
  if (currentIndex < cards.length - 1) {
    cards[currentIndex].classList.add('hidden');
    currentIndex++;
    cards[currentIndex].classList.add('active');
  }
}

// Event listener for swipe or click
document.addEventListener('click', showNextCard);
document.addEventListener('touchstart', showNextCard);
