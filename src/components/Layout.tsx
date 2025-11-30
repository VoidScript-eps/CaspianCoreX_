import { useState } from "react";
import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { AuthModal } from "./AuthModal";
import { ChatBot } from "./ChatBot";
import { useTheme } from "../contexts/ThemeContext";

export const Layout = () => {
  const [language, setLanguage] = useState("en");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" 
        ? "bg-[#0a1128] text-white" 
        : "bg-white text-gray-900"
    }`}>
      <Navigation 
        language={language} 
        setLanguage={setLanguage}
        onAuthClick={() => setIsAuthModalOpen(true)}
      />
      
      <main>
        <Outlet context={{ language, setLanguage }} />
      </main>

      <Footer language={language} />
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        language={language}
      />

      {/* AI ChatBot */}
      <ChatBot language={language} />
    </div>
  );
};
