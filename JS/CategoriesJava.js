const itemsData = {
    "Games": [
        { name: "PlayStation 5", description: "Available until: 10 Jul 2024" },
        { name: "Gaming Chair", description: "Available until: 20 Aug 2024" }
    ],
    "Electronics": [
        { name: "Laptop Stand", description: "Available until: 15 Jun 2024" },
        { name: "Digital Drawing Tablet", description: "Available until: 30 Sep 2024" }
    ],
    "Sports & Fitness": [
        { name: "Dumbbell Set", description: "Available until: 1 Oct 2024" },
        { name: "Yoga Mat", description: "Available until: 5 Nov 2024" }
    ],
    "Books & Study Materials": [
            { name: "My Sweet Orange Tree by José Mauro de Vasconcelos", description: "Available until: 9 Oct 2024" },
            { name: "Learn Java The Easy Way by Bryson Payne", description: "Available until: 19 Nov 2024" }
        ],
    "Stationery & Supplies": [
            { name: "Highlighters", description: "Available until: 22 Jan 2024" },
            { name: "A4 Papers", description: "Available until: 8 Aug 2024" }
        ],
    "Household Items": [
            { name: "Vacuum", description: "Available until: 13 Jun 2024" },
            { name: "Floor Mop", description: "Available until: 26 May 2024" }
        ]
};


let items = [];
for (const category in itemsData) {
    itemsData[category].forEach(item => {
        items.push(item.name);
    });
}

function showSuggestions(query) {
    const suggestionsContainer = document.getElementById("suggestions");
    suggestionsContainer.innerHTML = "";
    if (!query) {
        suggestionsContainer.style.display = "none";
        return;
    }

    const suggestions = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    if (suggestions.length === 0) {
        suggestionsContainer.style.display = "none";
        return;
    }

    suggestions.forEach(item => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = item;
        suggestionItem.classList.add("p-2");
        suggestionItem.onclick = () => selectSuggestion(item);
        suggestionsContainer.appendChild(suggestionItem);
    });

    suggestionsContainer.style.display = "block";
}

function selectSuggestion(value) {
    document.getElementById("search").value = value;
    document.getElementById("suggestions").style.display = "none";
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
        document.getElementById("suggestions").style.display = "none";
    }
});

function showItems(category) {
    const itemsSection = document.getElementById("items");
    const itemGrid = document.getElementById("item-grid");
    itemGrid.innerHTML = "";
    itemsData[category].forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.className = "col";
        itemCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <button class="btn btn-primary">Request</button>
                </div>
            </div>
        `;
        itemGrid.appendChild(itemCard);
    });

    itemsSection.style.display = "block";
}

document.getElementById("load-more").addEventListener("click", () => {
    alert("Load More functionality is under development.");
});
