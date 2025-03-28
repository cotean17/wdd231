document.addEventListener("DOMContentLoaded", () => {
    // 🔹 All element selectors
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const membersContainer = document.getElementById("members-container");
    const gridViewButton = document.getElementById("gridView");
    const listViewButton = document.getElementById("listView");

    // 🔹 Mobile menu toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("hidden");
        });
    }

    // 🔹 Async fetch members
    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(members) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            membersContainer.appendChild(memberCard);
        });
    }

    // 🔹 View toggle buttons
    if (gridViewButton && listViewButton) {
        gridViewButton.addEventListener("click", () => {
            membersContainer.classList.add("grid");
            membersContainer.classList.remove("list");
        });

        listViewButton.addEventListener("click", () => {
            membersContainer.classList.add("list");
            membersContainer.classList.remove("grid");
        });
    }

    // 🔹 Footer year & last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // 🔹 Fetch members on load
    fetchMembers();
});


