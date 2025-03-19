document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.getElementById("members-container");

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
            let memberCard = document.createElement("div");
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

    fetchMembers();

    // Display Current Year
    document.getElementById("year").textContent = new Date().getFullYear();
    // Last Modified Date
    document.getElementById("lastModified").textContent = document.lastModified;
});
