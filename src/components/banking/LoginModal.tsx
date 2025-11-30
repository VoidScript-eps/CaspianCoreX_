import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, User, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useBankContext } from "../../contexts/BankContext";
import { toast } from "sonner@2.0.3";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const LoginModal = ({ isOpen, onClose, language }: LoginModalProps) => {
  const { theme } = useTheme();
  const { login } = useBankContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const content = {
    en: {
      title: "Login to CGF Bank",
      subtitle: "Access your personal banking",
      username: "Username",
      password: "Password",
      login: "Login",
      processing: "Logging in...",
      demo: "Demo Mode",
      demoHint: "Use any username and password for demo",
      success: "Welcome back!",
    },
    ru: {
      title: "Вход в CGF Bank",
      subtitle: "Доступ к вашему личному банкингу",
      username: "Имя пользователя",
      password: "Пароль",
      login: "Войти",
      processing: "Вход...",
      demo: "Демо Режим",
      demoHint: "Используйте любое имя пользователя и пароль для демо",
      success: "С возвращением!",
    },
    az: {
      title: "CGF Bank-a Giriş",
      subtitle: "Şəxsi bankçılığınıza daxil olun",
      username: "İstifadəçi adı",
      password: "Şifrə",
      login: "Giriş",
      processing: "Giriş edilir...",
      demo: "Demo Rejim",
      demoHint: "Demo üçün istənilən istifadəçi adı və şifrə istifadə edin",
      success: "Xoş gəlmisiniz!",
    },
  };

  const t = content[language as keyof typeof content];

  const handleLogin = async () => {
    if (!username || !password) {
      return;
    }

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    login(username);
    toast.success(t.success);
    setIsProcessing(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 rounded-2xl p-8 ${
              theme === "dark"
                ? "bg-[#1e2749] border border-white/10"
                : "bg-white shadow-2xl"
            }`}
          >
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
                theme === "dark"
                  ? "hover:bg-white/10 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-8">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#4a90e2] to-[#5dd9d9]"
                  : "bg-gradient-to-br from-blue-600 to-cyan-600"
              }`}>
                <User className="w-8 h-8 text-white" />
              </div>
              <h2 className={`text-2xl mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {t.title}
              </h2>
              <p className={`text-sm ${theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}`}>
                {t.subtitle}
              </p>
            </div>

            <div className={`mb-6 p-4 rounded-lg ${
              theme === "dark"
                ? "bg-[#4a90e2]/10 border border-[#4a90e2]/20"
                : "bg-blue-50 border border-blue-200"
            }`}>
              <div className={`text-sm mb-1 ${
                theme === "dark" ? "text-[#5dd9d9]" : "text-blue-700"
              }`}>
                {t.demo}
              </div>
              <div className={`text-xs ${
                theme === "dark" ? "text-[#8b9dc3]" : "text-blue-600"
              }`}>
                {t.demoHint}
              </div>
            </div>

            <div className="space-y-4">
              {/* Username */}
              <div>
                <label className={`block mb-2 text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.username}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="demo@cgf.az"
                    className={`w-full p-3 pl-12 rounded-lg border transition-colors ${
                      theme === "dark"
                        ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } outline-none`}
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  />
                  <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-400"
                  }`} />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className={`block mb-2 text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.password}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className={`w-full p-3 pl-12 pr-12 rounded-lg border transition-colors ${
                      theme === "dark"
                        ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } outline-none`}
                    onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  />
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-400"
                  }`} />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 ${
                      theme === "dark" ? "text-[#8b9dc3]" : "text-gray-400"
                    }`}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogin}
                disabled={isProcessing || !username || !password}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isProcessing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <LogIn className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <LogIn className="w-5 h-5" />
                )}
                {isProcessing ? t.processing : t.login}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
