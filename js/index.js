document.querySelector(".search-btn").addEventListener("click", () => {
  const input = document.querySelector(".search-input").value;
  if (!input) alert("Please enter a valid search query");
  else alert(`Searching for: ${input}`);
});

document.querySelector(".clear-btn").addEventListener("click", () => {
  document.querySelector(".search-input").value = "";
});
