import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Moon } from "lucide-react";
import { Button } from "../ui/button";

const AppLayout = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="relative">
      <header className="p-4 relative shadow-md bg-white dark:bg-[hsl(209,23%,22%)] z-10">
        <div className="flex items-center justify-between md:w-[90%] mx-auto">
          <h5 className="md:text-[1.35rem]">Where in the world?</h5>
          <Button
            onClick={toggleTheme}
            className="flex p-2 rounded-full bg-inherit text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <div className="flex items-center gap-2 text-gray-950 dark:text-white font-light">
              {isDark ? (
                <Moon className="w-5 h-5 fill-white" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              Dark Mode
            </div>
          </Button>
        </div>
      </header>
      <main className="p-4 bg-gray-50 min-h-[calc(100dvh-4.25rem)] dark:bg-[hsl(207,26%,17%)]">
        <div className="md:w-[90%] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
