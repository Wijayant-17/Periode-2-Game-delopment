// Functie om de productenlijst te initialiseren en op het scherm weer te geven
function initialiseerProductenLijst() {
    const bestaandeProducten = ['Bananen', 'Whiskey', 'Chips', 'Bonen', 'Aardappelen'];
    const bestaandeProductenLijstElement = document.getElementById('bestaande-producten');
  
    // Maak een lijst-item voor elk product en voeg deze toe aan de bestaande productenlijst
    bestaandeProducten.forEach(product => {
      const productItem = document.createElement('li');
      productItem.textContent = product;
      bestaandeProductenLijstElement.appendChild(productItem);
    });
  
    // Update het aantal producten
    const aantalProducten = bestaandeProducten.length;
    const aantalProductenElement = document.getElementById('aantal-producten');
    aantalProductenElement.innerText = `Aantal producten in het winkelmandje: ${aantalProducten}`;
  
    // Toon de producten of een melding, afhankelijk van het aantal producten
    const productenLijstElement = document.getElementById('producten-lijst');
    if (aantalProducten > 1) {
      updateProductenLijst();
    } else {
      productenLijstElement.innerHTML = 'U heeft niet genoeg producten om te tonen.';
    }
  }
  
  // Functie om een product toe te voegen aan de winkelmand-array
  function addProduct() {
    const nieuwProduct = prompt('Voer het nieuwe product in:');
    if (nieuwProduct) {
      winkelmandje.push(nieuwProduct);
      initialiseerProductenLijst();
    }
  }
  
  // Functie om de productenlijst met nieuwe toevoegingen bij te werken en op het scherm weer te geven
  function updateProductenLijst() {
    const bestaandeProductenLijstElement = document.getElementById('bestaande-producten');
  
    // Wis de huidige productenlijst om deze te kunnen bijwerken
    bestaandeProductenLijstElement.innerHTML = '';
  
    // Voeg alle producten toe aan de bestaande lijst
    winkelmandje.forEach(product => {
      const productItem = document.createElement('li');
      productItem.textContent = product;
      bestaandeProductenLijstElement.appendChild(productItem);
    });
  
    // Update het aantal producten
    const aantalProductenElement = document.getElementById('aantal-producten');
    const aantalProducten = winkelmandje.length;
    aantalProductenElement.innerText = `Aantal producten in het winkelmandje: ${aantalProducten}`;
  }
  
  // Initialiseer de winkelmand-array
  let winkelmandje = ['Bananen', 'Whiskey', 'Chips', 'Bonen', 'Aardappelen'];
  
  // Wanneer de pagina geladen is, initialiseer de productenlijst
  document.addEventListener('DOMContentLoaded', function() {
    initialiseerProductenLijst();
  });
  