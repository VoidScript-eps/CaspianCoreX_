import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        theme === "dark" 
          ? "bg-[#4a90e2]" 
          : "bg-gray-300"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        className={`absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
          theme === "dark" 
            ? "bg-[#5dd9d9]" 
            : "bg-white"
        }`}
        animate={{
          x: theme === "dark" ? 26 : 2,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? (
          <Moon className="w-3 h-3 text-[#0a1128]" />
        ) : (
          <Sun className="w-3 h-3 text-orange-500" />
        )}
      </motion.div>
    </motion.button>
  );
};
