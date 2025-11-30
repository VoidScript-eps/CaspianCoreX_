import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, LogIn, User, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import logoImage from "figma:asset/c4ee438551533808bc25bcbffbd29995ca84828f.png";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "../contexts/ThemeContext";
import { useBankContext } from "../contexts/BankContext";

interface NavigationProps {
  language: string;
  setLanguage: (lang: string) => void;
  onAuthClick: () => void;
}

export const Navigation = ({ language, setLanguage, onAuthClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { user } = useBankContext();

  const menuItems = [
    { en: "Home", ru: "Главная", az: "Ana səhifə", href: "/" },
    { en: "About", ru: "О Нас", az: "Haqqımızda", href: "/about" },
    { en: "Loans", ru: "Кредиты", az: "Kreditlər", href: "/loans" },
  ];

  const servicesDropdown = [
    { en: "Currency Rates", ru: "Курсы Валют", az: "Valyuta", href: "/" },
    { en: "Branches & ATMs", ru: "Филиалы", az: "Filiallar", href: "/branches" },
    { en: "Caspian AI", ru: "Caspian AI", az: "Caspian AI", href: "/#ai" },
    { en: "Online Banking", ru: "Онлайн-Банк", az: "Online Bank", href: "/online-banking" },
  ];

  const moreDropdown = [
    { en: "Reviews", ru: "Отзывы", az: "Rəylər", href: "/reviews" },
    { en: "News", ru: "Новости", az: "Xəbərlər", href: "/news" },
    { en: "Careers", ru: "Карьера", az: "Karyera", href: "/careers" },
    { en: "FAQ", ru: "Вопросы", az: "Suallar", href: "/faq" },
    { en: "Security", ru: "Безопасность", az: "Təhlükəsizlik", href: "/security" },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
    { code: "az", label: "AZ" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b shadow-lg transition-colors ${
      theme === "dark"
        ? "bg-[#5a7a9a]/95 border-white/10"
        : "bg-white/95 border-gray-200"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImage} alt="CGF Logo" className="h-16 w-auto" />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-sm transition-colors group ${
                  theme === "dark"
                    ? "hover:text-[#5dd9d9]"
                    : "text-gray-700 hover:text-blue-600"
                } ${location.pathname === item.href ? (theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600") : ""}`}
              >
                {item[language as keyof typeof item]}
                <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  theme === "dark" ? "bg-[#5dd9d9]" : "bg-blue-600"
                } ${location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className={`flex items-center gap-1 text-sm transition-colors ${
                theme === "dark"
                  ? "hover:text-[#5dd9d9]"
                  : "text-gray-700 hover:text-blue-600"
              }`}>
                {language === "en" ? "Services" : language === "ru" ? "Услуги" : "Xidmətlər"}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {showServicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl border py-2 ${
                      theme === "dark"
                        ? "bg-[#1e2749] border-white/10"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    {servicesDropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          theme === "dark"
                            ? "hover:bg-[#4a90e2]/20 hover:text-[#5dd9d9]"
                            : "hover:bg-gray-50 text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {item[language as keyof typeof item]}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* More Dropdown */}
            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm transition-colors ${
                theme === "dark"
                  ? "hover:text-[#5dd9d9]"
                  : "text-gray-700 hover:text-blue-600"
              }`}>
                {language === "en" ? "More" : language === "ru" ? "Ещё" : "Digər"}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl border py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ${
                theme === "dark"
                  ? "bg-[#1e2749] border-white/10"
                  : "bg-white border-gray-200"
              }`}>
                {moreDropdown.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      theme === "dark"
                        ? "hover:bg-[#4a90e2]/20 hover:text-[#5dd9d9]"
                        : "hover:bg-gray-50 text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item[language as keyof typeof item]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contacts"
              className={`text-sm transition-colors ${
                theme === "dark"
                  ? "hover:text-[#5dd9d9]"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {language === "en" ? "Contacts" : language === "ru" ? "Контакты" : "Əlaqə"}
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Language Switcher */}
            <div className={`flex items-center gap-2 rounded-full px-3 py-1.5 border ${
              theme === "dark"
                ? "border-white/20"
                : "border-gray-300"
            }`}>
              <Globe className={`w-4 h-4 ${
                theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
              }`} />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs px-2 py-1 rounded-full transition-all ${
                    language === lang.code
                      ? theme === "dark"
                        ? "bg-[#4a90e2] text-white"
                        : "bg-blue-600 text-white"
                      : theme === "dark"
                        ? "text-[#8b9dc3] hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Login/Account Button */}
            {user.isLoggedIn ? (
              <motion.button
                onClick={() => navigate("/online-banking")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                title={user.username}
              >
                {/* Avatar Circle with Gradient Border */}
                <div className={`w-10 h-10 rounded-full p-0.5 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] shadow-lg ${
                  theme === "dark" ? "shadow-[#4a90e2]/30" : "shadow-blue-500/30"
                }`}>
                  <div className={`w-full h-full rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-[#1e2749]" : "bg-white"
                  }`}>
                    <User className={`w-5 h-5 ${
                      theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                    }`} />
                  </div>
                </div>
                
                {/* Tooltip on Hover */}
                <div className={`absolute top-full right-0 mt-2 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ${
                  theme === "dark"
                    ? "bg-[#1e2749] border border-white/10 text-white"
                    : "bg-white border border-gray-200 text-gray-900 shadow-lg"
                }`}>
                  {user.username}
                </div>
              </motion.button>
            ) : (
              <motion.button
                onClick={onAuthClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white hover:shadow-lg hover:shadow-[#4a90e2]/50"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg"
                }`}
              >
                <LogIn className="w-4 h-4" />
                {language === "en" && "Login"}
                {language === "ru" && "Войти"}
                {language === "az" && "Daxil ol"}
              </motion.button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden mt-4 pt-4 border-t ${
                theme === "dark" ? "border-white/10" : "border-gray-200"
              }`}
            >
              <div className="flex flex-col gap-4">
                {[...menuItems, ...servicesDropdown, ...moreDropdown, { en: "Contacts", ru: "Контакты", az: "Əlaqə", href: "/contacts" }].map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm transition-colors ${
                      theme === "dark"
                        ? "hover:text-[#5dd9d9]"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item[language as keyof typeof item]}
                  </Link>
                ))}

                <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                  <ThemeToggle />
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsOpen(false);
                        }}
                        className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                          language === lang.code
                            ? theme === "dark"
                              ? "bg-[#4a90e2] text-white"
                              : "bg-blue-600 text-white"
                            : theme === "dark"
                              ? "bg-white/5 text-[#8b9dc3] hover:text-white"
                              : "bg-gray-100 text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                {user.isLoggedIn ? (
                  <button
                    onClick={() => {
                      navigate("/online-banking");
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                    }`}
                  >
                    {language === "en" && "Account"}
                    {language === "ru" && "Аккаунт"}
                    {language === "az" && "Hesab"}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onAuthClick();
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                        : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                    }`}
                  >
                    {language === "en" && "Login"}
                    {language === "ru" && "Войти"}
                    {language === "az" && "Daxil ol"}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};