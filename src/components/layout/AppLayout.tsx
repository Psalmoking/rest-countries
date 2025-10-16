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
    <>
      <header className="p-4 shadow-md bg-white dark:bg-[hsl(209,23%,22%)]">
        <div className="flex items-center h-h6 justify-between md:w-[90%] mx-auto">
          <h5 className="md:text-[1.35rem]">Where in the world?</h5>
          <Button
            onClick={toggleTheme}
            className="flex p-2 rounded-full bg-inherit text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <div className="flex items-center gap-2 text-gray-950 dark:text-white ">
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
      <main className="bg-gray-50 min-h-[calc(100dvh-4.25rem)] md:w-[90%]a md:px-20 dark:bg-[hsl(207,26%,17%)]">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
