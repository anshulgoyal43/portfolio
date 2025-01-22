export const themeEffect = function () {
  const pref = localStorage.getItem("theme") || "light";
  
  document.documentElement.classList.remove("theme-system");

  if (pref === "dark") {
    document.documentElement.classList.add("pause-transitions");
    document.documentElement.classList.add("dark");
    document.head
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", "#1c1c1c");

    requestAnimationFrame(() => {
      document.documentElement.classList.remove("pause-transitions");
    });
    return "dark";
  } else {
    document.documentElement.classList.add("pause-transitions");
    document.documentElement.classList.remove("dark");
    document.head
      .querySelector("meta[name=theme-color]")
      ?.setAttribute("content", "#fcfcfc");
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("pause-transitions");
    });
    return "light";
  }
};
