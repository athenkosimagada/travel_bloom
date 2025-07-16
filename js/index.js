document.addEventListener("DOMContentLoaded", () => {
  const destinations = [
    {
      imageUrl: "https://placehold.co/600x400",
      name: "New York City, USA",
      description:
        "A vibrant metropolis where skyscrapers meet cultural diversity. Explore the Statue of Liberty, Central Park, and Broadway shows for an unforgettable urban adventure.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Toronto, Canada",
      description:
        "A dynamic city blending modern architecture with natural beauty. Visit the CN Tower, stroll through the Distillery District, and enjoy the serene Toronto Islands.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Paris, France",
      description:
        "The romantic capital of art and cuisine. Discover the Eiffel Tower, Louvre Museum, and charming cafés along the Seine River.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Tokyo, Japan",
      description:
        "A fusion of ancient traditions and futuristic innovation. Experience cherry blossoms in Ueno Park, bustling Shibuya Crossing, and exquisite sushi.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "London, UK",
      description:
        "A historic city with royal charm. See Big Ben, the Tower of London, and explore diverse neighborhoods like Camden Market.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Sydney, Australia",
      description:
        "A coastal gem with stunning harbors. Climb the Sydney Harbour Bridge, relax at Bondi Beach, and visit the iconic Opera House.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Dubai, UAE",
      description:
        "A dazzling blend of luxury and desert. Marvel at the Burj Khalifa, shop in extravagant malls, and enjoy a desert safari.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Rome, Italy",
      description:
        "A living museum of ancient history. Wander through the Colosseum, toss a coin in the Trevi Fountain, and savor authentic pasta.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Bangkok, Thailand",
      description:
        "A bustling hub of culture and street food. Explore the Grand Palace, float along the Chao Phraya River, and taste spicy pad thai.",
    },
    {
      imageUrl: "https://placehold.co/600x400",
      name: "Cape Town, South Africa",
      description:
        "A scenic paradise with Table Mountain views. Hike the trails, visit the colorful Bo-Kaap, and explore the Cape of Good Hope.",
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

    const results = destinations.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    if (results.length > 0) {
      results.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("header__search-results--card");
        card.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.name}" />
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
