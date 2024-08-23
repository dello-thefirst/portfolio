"use client";
const ThemeToggle = () => {
  const handleThemeToggle = () => {
    if (typeof window !== undefined) {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }
  };

  return (
    <div
      className="cursor-pointer text-theme-color"
      onClick={() => handleThemeToggle()}
    >
      <i className="fa-light fa-sun-dust text-"></i>
    </div>
  );
};

export default ThemeToggle;
