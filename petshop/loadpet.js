const pets = [
  {"name": "Buddy", "type": "Dog", "age": 0.4, "img": "img/dogs/dog01.jpg"},
  {"name": "Max", "type": "Dog", "age": 0.4, "img": "img/dogs/dog02.jpg"},
  {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"},
  {"name": "Mittens", "type": "Cat", "age": 1.2, "img": "img/cats/cat02.jpg"},
  {"name": "Daisy", "type": "Dog", "age": 1.5, "img": "img/dogs/dog03.jpg"},
  {"name": "Shadow", "type": "Cat", "age": 0.3, "img": "img/cats/cat03.jpg"},
  {"name": "Pip", "type": "Bird", "age": 1, "img": "img/dogs/birds/bird01.jpg"},
  {"name": "Mango", "type": "Bird", "age": 1.2, "img": "img/dogs/birds/bird02.jpg"},
  {"name": "Pebble", "type": "Capybara", "age": 0.3, "img": "img/capybaras/capybara01.jpg"},
  {"name": "River", "type": "Capybara", "age": 0.5, "img": "img/capybaras/capybara02.jpg"},
];

function loadPets() {
  console.log('Loading pets...');
  const petList = document.getElementById('pet-list');

  if (petList) {
      petList.innerHTML = ''; // Clear existing content

      pets.forEach(pet => {
          const petItem = document.createElement('div');
          petItem.className = 'pet'; // Apply 'pet' class for styling

          // Populate the innerHTML with pet details: image, name, type, and age.
          petItem.innerHTML = `
              <img src="${pet.img}" alt="${pet.name}" onerror="this.onerror=null;this.src='https://placehold.co/180x180/cccccc/333333?text=Pet+Image';">
              <h3>${pet.name}</h3>
              <p>Type: ${pet.type}</p>
              <p>Age: ${pet.age} years</p>
              <button onclick="adoptPet()">Adopt Now</button>
          `;
          petList.appendChild(petItem);
      });
      console.log('Pets loaded successfully.');
  } else {
      console.error("Error: Element with ID 'pet-list' not found. Pets cannot be loaded on this page.");
  }
}

document.addEventListener('DOMContentLoaded', loadPets);