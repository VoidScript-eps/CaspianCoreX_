import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

interface ChatBotProps {
  language: string;
}

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = ({ language }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const content = {
    en: {
      title: "CGF Assistant",
      subtitle: "How can I help you?",
      placeholder: "Type your message...",
      welcome: "Hello! I'm your CGF Assistant. How can I help you navigate our website today?",
      quickReplies: [
        "Tell me about AI Assistants",
        "What cards do you offer?",
        "How do I register?",
        "Contact information",
      ],
    },
    ru: {
      title: "CGF Ассистент",
      subtitle: "Как я могу помочь?",
      placeholder: "Введите сообщение...",
      welcome: "Здравствуйте! Я ваш CGF Ассистент. Как я могу помочь вам сегодня?",
      quickReplies: [
        "Расскажите об AI Ассистентах",
        "Какие карты вы предлагаете?",
        "Как зарегистрироваться?",
        "Контактная информация",
      ],
    },
    az: {
      title: "CGF Köməkçi",
      subtitle: "Necə kömək edə bilərəm?",
      placeholder: "Mesajınızı yazın...",
      welcome: "Salam! Mən sizin CGF Köməkçinizəm. Bu gün veb saytımızda necə kömək edə bilərəm?",
      quickReplies: [
        "AI Köməkçilər haqqında",
        "Hansı kartları təklif edirsiniz?",
        "Necə qeydiyyatdan keçim?",
        "Əlaqə məlumatı",
      ],
    },
  };

  const t = content[language as keyof typeof content];

  const botResponses: Record<string, Record<string, string>> = {
    en: {
      "ai assistants": "We offer three Caspian AI Assistants: Dr. Caspian (Financial Psychologist), CGF Advisor (Investment Analyst), and CGF Keeper (AI Accountant). Each can be purchased starting from $39/year.",
      "cards": "We offer two card types: Base Card with 3% cashback and Premium Card with 7% cashback and exclusive privileges. Both come with 24/7 support.",
      "register": "Click the 'Login' button in the top right corner and select 'Register'. Fill in your details to create your account.",
      "contact": "You can reach us at contact@caspianglobal.finance or call +994 12 XXX XX XX. Our headquarters is located in Baku, Azerbaijan.",
      "default": "I'm here to help! You can ask me about our AI Assistants, cards, registration, or contact information.",
    },
    ru: {
      "ai assistants": "Мы предлагаем трёх AI Ассистентов: Dr. Caspian (Финансовый Психолог), CGF Advisor (Инвестиционный Аналитик) и CGF Keeper (AI Бухгалтер). Каждого можно приобрести от $39/год.",
      "cards": "Мы предлагаем две карты: Базовая с кешбэком 3% и Премиум с кешбэком 7% и эксклюзивными привилегиями. Обе с поддержкой 24/7.",
      "register": "Нажмите кнопку 'Войти' в правом верхнем углу и выберите 'Регистрация'. Заполните данные для создания аккаунта.",
      "contact": "Свяжитесь с нами: contact@caspianglobal.finance или +994 12 XXX XX XX. Наша штаб-квартира в Баку, Азербайджан.",
      "default": "Я здесь, чтобы помочь! Спрашивайте об AI Ассистентах, картах, регистрации или контактах.",
    },
    az: {
      "ai assistants": "Üç AI Köməkçi təklif edirik: Dr. Caspian (Maliyyə Psixoloqu), CGF Advisor (İnvestisiya Analitiki) və CGF Keeper (AI Mühasib). Hər biri $39/ilə başlayaraq alına bilər.",
      "cards": "İki kart növü təklif edirik: 3% keşbekli Əsas Kart və 7% keşbekli və eksklüziv imtiyazlı Premium Kart. Hər ikisi 24/7 dəstəklə.",
      "register": "Yuxarı sağ küncdəki 'Daxil ol' düyməsini basın və 'Qeydiyyat' seçin. Hesab yaratmaq üçün məlumatlarınızı doldurun.",
      "contact": "Bizimlə əlaqə: contact@caspianglobal.finance və ya +994 12 XXX XX XX. Baş ofisimiz Bakıdadır, Azərbaycan.",
      "default": "Kömək etmək üçün buradayam! AI Köməkçilər, kartlar, qeydiyyat və ya əlaqə haqqında soruşa bilərsiniz.",
    },
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");

    // Generate bot response
    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      let response = botResponses[language].default;

      if (lowerText.includes("ai") || lowerText.includes("assistant") || lowerText.includes("ассистент") || lowerText.includes("köməkçi")) {
        response = botResponses[language]["ai assistants"];
      } else if (lowerText.includes("card") || lowerText.includes("карт") || lowerText.includes("kart")) {
        response = botResponses[language]["cards"];
      } else if (lowerText.includes("register") || lowerText.includes("регистр") || lowerText.includes("qeydiyyat")) {
        response = botResponses[language]["register"];
      } else if (lowerText.includes("contact") || lowerText.includes("контакт") || lowerText.includes("əlaqə")) {
        response = botResponses[language]["contact"];
      }

      const botMessage: Message = {
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        text: t.welcome,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleOpen}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] rounded-full shadow-lg shadow-[#4a90e2]/50 flex items-center justify-center text-white"
          >
            <MessageCircle className="w-8 h-8" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 w-96 h-[600px] bg-[#1e2749] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white">{t.title}</div>
                  <div className="text-white/80 text-xs">{t.subtitle}</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      message.isBot
                        ? "bg-[#0a1128] text-white"
                        : "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="text-xs text-[#8b9dc3] mb-2">
                  {language === "en" && "Quick replies:"}
                  {language === "ru" && "Быстрые ответы:"}
                  {language === "az" && "Sürətli cavablar:"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs px-3 py-1.5 bg-[#0a1128] text-[#5dd9d9] rounded-full hover:bg-[#4a90e2]/20 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={t.placeholder}
                  className="flex-1 px-4 py-2 bg-[#0a1128] border border-white/10 rounded-full text-white text-sm focus:border-[#4a90e2] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-[#4a90e2]/50 transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};