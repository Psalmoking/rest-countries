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
      <header className="flex items-center justify-between p-4 shadow-md bg-gray-50 dark:bg-[hsl(209,23%,22%)]">
        <h4>Where in the world?</h4>
        <Button
          onClick={toggleTheme}
          className="flex p-2 rounded-full bg-gray-100. dark:bg-gray-800. text-black dark:text-white transition"
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
      </header>
      <body className="bg-gray-50 dark:bg-[hsl(207,26%,17%)]">
        <Outlet />
      </body>
    </>
  );
};

export default AppLayout;
