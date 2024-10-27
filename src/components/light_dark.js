// use local storage to save the theme preference
export function darkmode() {
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "light");
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  } else {
    localStorage.setItem("theme", "dark");
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }
}



export function LightDark() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode"); // Default to light mode
    localStorage.setItem("theme", "light");
  }
  document.body.classList.add("show");
}
