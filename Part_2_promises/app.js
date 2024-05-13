document.addEventListener('DOMContentLoaded', function() {
    const cardArea = document.getElementById('card-area');
    const drawCardButton = document.getElementById('draw-card-btn');
    let deckId = null;
    let cardCount = 0; // Track the number of cards drawn for positioning
  
    // Create a new deck
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => {
            deckId = response.data.deck_id;
            drawCardButton.style.display = 'block';  // Show the button once the deck is ready
        })
        .catch(error => console.error('Error creating the deck:', error));
  
    // Draw a card from the deck
    drawCardButton.addEventListener('click', function() {
        if (deckId) {
            axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
                .then(response => {
                  const card = response.data.cards[0];
                  const cardImg = document.createElement('img');
                  cardImg.src = card.image;
                  cardImg.className = 'card-img';  // Use class for styling
                  cardImg.style.transform = `rotate(${45 * cardCount}deg)`;
                  cardImg.style.left = `${20 * cardCount}px`;
                  cardArea.appendChild(cardImg);
                  cardCount++; // Increment after appending to maintain correct count
  
                  if (response.data.remaining === 0) {
                      drawCardButton.disabled = true;  // Disable button if no cards left
                      drawCardButton.textContent = 'Deck is empty!';
                  }
              })
              .catch(error => console.error('Error drawing a card:', error));
        }
    });
  });
  