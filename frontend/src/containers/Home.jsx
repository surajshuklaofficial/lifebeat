import { useState, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar, Footer } from "../layout";
import ThemeContext from "../contexts/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isVisible, setIsVisible] = useState(true);
  const [startX, setStartX] = useState(null);

  useLayoutEffect(() => {
    if (innerWidth < 640) setIsVisible(false);
  }, []);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startX) {
      const currentX = e.touches[0].clientX;
      const deltaX = currentX - startX;
      if (deltaX > 100) {
        setIsVisible(true);
      } else if (deltaX < -100) {
        setIsVisible(false);
      }
    }
  };

  return (
    <ThemeContext.Provider value={setTheme}>
      <div className={`${theme} `}>
        <div className="dark:bg-hero bg-cover bg-center bg-fixed">
          <Header />
          <div
            className="flex p-2 sm:p-4 gap-2 sm:gap-4"
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
          >
            {isVisible && <Sidebar />}
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
