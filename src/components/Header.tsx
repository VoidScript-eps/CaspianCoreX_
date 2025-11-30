import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Menu, X } from "lucide-react";

export const Header = () => {
  const [language, setLanguage] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = ["EN", "RU", "AZ"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Minimal Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <div className="text-[#0a1128] tracking-tight">CGF</div>
          </motion.div>

          {/* Minimal Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#products" className="text-[#1e2749]/60 hover:text-[#2d3e82] transition-colors text-sm">
              Продукты
            </a>
            <a href="#ai-assistants" className="text-[#1e2749]/60 hover:text-[#2d3e82] transition-colors text-sm">
              AI
            </a>
            <a href="#about" className="text-[#1e2749]/60 hover:text-[#2d3e82] transition-colors text-sm">
              О Нас
            </a>
          </nav>

          {/* Minimal Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language */}
            <div className="relative group">
              <button className="text-[#1e2749]/40 hover:text-[#4a90e2] transition-colors text-sm tracking-wider">
                {language}
              </button>
              <div className="absolute top-full right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full px-6 py-2 text-left text-[#1e2749]/60 hover:text-[#2d3e82] hover:bg-[#f5f7fa]/50 transition-colors text-sm"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <button className="text-[#1e2749]/60 hover:text-[#2d3e82] transition-colors text-sm">
              Вход
            </button>
            <button className="px-6 py-2 bg-[#2d3e82] text-white rounded-full hover:bg-[#4a90e2] transition-all text-sm">
              Начать
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1e2749]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4"
          >
            <nav className="flex flex-col gap-4">
              <a href="#products" className="text-[#1e2749] hover:text-[#4a90e2] transition-colors">
                Продукты
              </a>
              <a href="#ai-assistants" className="text-[#1e2749] hover:text-[#4a90e2] transition-colors">
                AI-Ассистенты
              </a>
              <a href="#about" className="text-[#1e2749] hover:text-[#4a90e2] transition-colors">
                О Нас
              </a>
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <button className="flex-1 px-6 py-2 text-[#1e2749] border border-[#1e2749] rounded-lg">
                  Вход
                </button>
                <button className="flex-1 px-6 py-2 bg-[#2d3e82] text-white rounded-lg">
                  Регистрация
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};
