const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // Show Light Icon
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleLightIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  // Toggle Icon
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  //if is set in localstorage
  if (localStorage.getItem("color-theme")) {
    // if light, make dark and in localstorage
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    // if not in localstorage
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}
