// scripts/gallery.js
async function loadGallery() {
    try {
      const response = await fetch('data/gallery.json');
      const data = await response.json();
      displayGallery(data);
    } catch (error) {
      console.error("Failed to load gallery:", error);
    }
  }
  
  function displayGallery(photos) {
    const container = document.getElementById('gallery-container');
  
    photos.forEach(photo => {
      const card = document.createElement('div');
      card.classList.add('gallery-card');
  
      card.innerHTML = `
        <img src="images/${photo.image}" alt="${photo.title}"  width="200" height="100"loading="lazy">
        <h3>${photo.title}</h3>
        <p><strong>Location:</strong> ${photo.location}</p>
        <p><strong>Category:</strong> ${photo.category}</p>
        <p><strong>Date:</strong> ${photo.date}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  loadGallery();
  