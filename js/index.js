document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    {
      category: "beach",
      name: "Bondi Beach, Australia",
      description:
        "A famous Sydney beach known for its golden sands and surfing culture. Enjoy the coastal walk and vibrant atmosphere.",
      images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
      category: "beach",
      name: "Copacabana Beach, Brazil",
      description:
        "A lively Rio de Janeiro beach with stunning views and a lively nightlife. Perfect for sunbathing and samba.",
      images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
      category: "temple",
      name: "Angkor Wat, Cambodia",
      description:
        "A majestic Hindu-Buddhist temple complex, a UNESCO site with intricate carvings and serene surroundings.",
      images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
      category: "temple",
      name: "Kinkaku-ji, Japan",
      description:
        "The Golden Pavilion, a Zen Buddhist temple covered in gold leaf, reflecting beautifully on its pond.",
      images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
    {
      category: "country",
      name: "Japan",
      description:
        "A land of contrasts with futuristic cities and ancient traditions. Explore Tokyo, Kyoto, and Mount Fuji.",
      images: [
        "https://placehold.co/600x400?text",
        "https://placehold.co/600x400?text",
      ],
    },
    {
      category: "country",
      name: "Italy",
      description:
        "A cultural treasure with historic cities like Rome, Venice, and Florence, offering art, food, and scenery.",
      images: ["https://placehold.co/600x400", "https://placehold.co/600x400"],
    },
  ];

  const searchContainer = document.querySelector(".header__search-container");
  const searchResults = document.querySelector(".header__search-results");
  const searchInput = document.querySelector(".header__search-input");
  const searchBtn1 = document.querySelector(".header__btn-search");
  const searchBtn2 = document.querySelector(".header__btn.search");
  const clearBtn = document.querySelector(".header__btn.clear");

  function displayResults() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = "";

    if (!query.trim()) {
      searchContainer.classList.remove("active");
      return;
    }

    const results = destinations.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    if (results.length > 0) {
      results.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("header__search-results--card");
        card.innerHTML = `
        <img src="${item.images[0]}" alt="${item.name}" />
        <div class="card__content">
          <p class="card__name">${item.name}</p>
          <p class="card__description">${item.description}</p>
          <button type="button" class="card__btn">View</button>
        </div>
      `;
        searchResults.appendChild(card);
      });
      searchContainer.classList.add("active");
    } else {
      searchContainer.classList.remove("active");
    }
  }

  function hideSearchContainer() {
    searchInput.value = "";
    searchContainer.classList.remove("active");
  }

  searchBtn1.addEventListener("click", displayResults);
  searchBtn2.addEventListener("click", displayResults);
  clearBtn.addEventListener("click", hideSearchContainer);

  searchInput.addEventListener("input", displayResults);

  searchInput.addEventListener("change", () => {
    if (!searchInput.value.trim()) {
      searchContainer.classList.remove("active");
    } else {
      displayResults();
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !searchContainer.contains(e.target) &&
      e.target !== searchInput &&
      e.target !== searchBtn1 &&
      e.target !== searchBtn2
    ) {
      searchContainer.classList.remove("active");
    } else if (
      (e.target === searchBtn1 || e.target === searchBtn2) &&
      !searchContainer.classList.contains("active")
    ) {
      displayResults();
    }
  });
});
