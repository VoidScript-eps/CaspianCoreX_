import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useBankContext } from "../contexts/BankContext";
import { useNavigate } from "react-router";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const AuthModal = ({ isOpen, onClose, language }: AuthModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { login } = useBankContext();
  const navigate = useNavigate();

  const content = {
    en: {
      login: "Login",
      register: "Register",
      name: "Full Name",
      email: "Email Address",
      password: "Password",
      loginButton: "Sign In",
      registerButton: "Create Account",
      switchToRegister: "Don't have an account?",
      switchToLogin: "Already have an account?",
      switchLink: isLogin ? "Register" : "Login",
    },
    ru: {
      login: "Вход",
      register: "Регистрация",
      name: "Полное Имя",
      email: "Email Адрес",
      password: "Пароль",
      loginButton: "Войти",
      registerButton: "Создать Аккаунт",
      switchToRegister: "Нет аккаунта?",
      switchToLogin: "Уже есть аккаунт?",
      switchLink: isLogin ? "Регистрация" : "Вход",
    },
    az: {
      login: "Giriş",
      register: "Qeydiyyat",
      name: "Tam Ad",
      email: "Email Ünvanı",
      password: "Şifrə",
      loginButton: "Daxil ol",
      registerButton: "Hesab Yarat",
      switchToRegister: "Hesabınız yoxdur?",
      switchToLogin: "Artıq hesabınız var?",
      switchLink: isLogin ? "Qeydiyyat" : "Giriş",
    },
  };

  const t = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Выполняем логин с именем пользователя (используем имя или email)
    const username = isLogin ? formData.email.split('@')[0] : formData.name || formData.email.split('@')[0];
    login(username);
    
    // Закрываем модальное окно
    onClose();
    
    // Перенаправляем в личный кабинет
    navigate("/online-banking");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#1e2749] border border-white/10 rounded-2xl p-8 max-w-md w-full relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#8b9dc3] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-white mb-2">{isLogin ? t.login : t.register}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] mx-auto rounded-full"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm text-[#8b9dc3] mb-2">{t.name}</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b9dc3]" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required={!isLogin}
                      className="w-full pl-10 pr-4 py-3 bg-[#0a1128] border border-white/10 rounded-lg text-white focus:border-[#4a90e2] focus:outline-none transition-colors"
                      placeholder={t.name}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm text-[#8b9dc3] mb-2">{t.email}</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b9dc3]" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0a1128] border border-white/10 rounded-lg text-white focus:border-[#4a90e2] focus:outline-none transition-colors"
                    placeholder={t.email}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#8b9dc3] mb-2">{t.password}</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b9dc3]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-[#0a1128] border border-white/10 rounded-lg text-white focus:border-[#4a90e2] focus:outline-none transition-colors"
                    placeholder={t.password}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b9dc3] hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white rounded-lg hover:shadow-lg hover:shadow-[#4a90e2]/50 transition-all"
              >
                {isLogin ? t.loginButton : t.registerButton}
              </motion.button>
            </form>

            {/* Switch Mode */}
            <div className="mt-6 text-center">
              <span className="text-[#8b9dc3] text-sm">
                {isLogin ? t.switchToRegister : t.switchToLogin}{" "}
              </span>
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#5dd9d9] hover:text-[#4a90e2] transition-colors text-sm"
              >
                {t.switchLink}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};