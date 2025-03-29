fetch("/chamber/data/members.json")
  .then(response => response.json())
  .then(data => {
    const goldSilver = data.filter(m => m.membership === "Gold" || m.membership === "Silver");
    const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById("spotlight-container");

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <img src="${member.logo}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Membership: ${member.membership}</p>
      `;

      container.appendChild(card);
    });
  });
