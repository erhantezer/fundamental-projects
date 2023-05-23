import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useEffect, useState } from "react";


const getStorageTheme = () => {
  let theme = "light-theme";
  if(localStorage.getItem("theme")){
    theme = localStorage.getItem("theme")
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
    <button className="ripple-btn" onClick={toggleTheme}>
      Toggle
    </button>
      <RouterProvider router={router} />
    </>
  )
}

export default App
