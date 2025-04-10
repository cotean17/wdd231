document.addEventListener("DOMContentLoaded", () => {
  console.log("Discover.js is running!"); // Confirm script is loading

  const container = document.querySelector(".grid-container");

  fetch("data/discover.json") // <-- Final correct path
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch JSON");
      }
      return response.json();
    })
    .then(data => {
      console.log("Loaded data:", data); // Confirm JSON loaded

      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.style.gridArea = `card${index + 1}`;
        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
          <img src="${item.image}" alt="${item.name}" width="300" height="200"loading="lazy">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn More</button>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading discover.json:", error);
    });

  // Visit message
  const message = document.querySelector("#visit-msg");
  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (days < 1) {
      message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      message.textContent = "You last visited 1 day ago.";
    } else {
      message.textContent = `You last visited ${days} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);
});
