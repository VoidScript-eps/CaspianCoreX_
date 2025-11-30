import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useOutletContext } from "react-router";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

export const FAQPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions",
      faqs: [
        {
          question: "How do I open an account?",
          answer: "You can open an account online through our website or mobile app, or visit any of our branches. You'll need a valid ID, proof of address, and initial deposit.",
        },
        {
          question: "What are the fees for international transfers?",
          answer: "International transfer fees start from 0.5% with a minimum of 5 AZN and maximum of 50 AZN, depending on the destination country and transfer amount.",
        },
        {
          question: "How can I reset my password?",
          answer: "Click on 'Forgot Password' on the login page and follow the instructions. You'll receive a verification code via SMS or email.",
        },
        {
          question: "Is mobile banking secure?",
          answer: "Yes, our mobile banking app uses 256-bit encryption, biometric authentication, and real-time fraud monitoring to ensure maximum security.",
        },
        {
          question: "What should I do if my card is lost or stolen?",
          answer: "Immediately call our 24/7 hotline at +994 12 123 45 67 or use the app to block your card instantly.",
        },
      ],
    },
    ru: {
      title: "Часто Задаваемые Вопросы",
      subtitle: "Найдите ответы на распространенные вопросы",
      faqs: [
        {
          question: "Как открыть счет?",
          answer: "Вы можете открыть счет онлайн через наш сайт или мобильное приложение, или посетить любой из наших филиалов. Вам понадобится действующее удостоверение личности, подтверждение адреса и первоначальный депозит.",
        },
        {
          question: "Какие комиссии за международные переводы?",
          answer: "Комиссии за международные переводы начинаются от 0,5% с минимумом 5 AZN и максимумом 50 AZN, в зависимости от страны назначения и суммы перевода.",
        },
        {
          question: "Как сбросить пароль?",
          answer: "Нажмите 'Забыли пароль' на странице входа и следуйте инструкциям. Вы получите код подтверждения по SMS или электронной почте.",
        },
        {
          question: "Безопасен ли мобильный банкинг?",
          answer: "Да, наше мобильное приложение использует 256-битное шифрование, биометрическую аутентификацию и мониторинг мошенничества в реальном времени для максимальной безопасности.",
        },
        {
          question: "Что делать, если карта потеряна или украдена?",
          answer: "Немедленно позвоните на нашу круглосуточную горячую линию +994 12 123 45 67 или используйте приложение для мгновенной блокировки карты.",
        },
      ],
    },
    az: {
      title: "Tez-tez Verilən Suallar",
      subtitle: "Ümumi suallara cavablar tapın",
      faqs: [
        {
          question: "Hesab necə açılır?",
          answer: "Hesabı vebsaytımız və ya mobil tətbiqimiz vasitəsilə onlayn aça və ya filiallarımızın hər hansı birinə baş çəkə bilərsiniz. Sizə etibarlı şəxsiyyət vəsiqəsi, ünvan təsdiqi və ilkin depozit lazımdır.",
        },
        {
          question: "Beynəlxalq köçürmələr üçün ödənişlər nə qədərdir?",
          answer: "Beynəlxalq köçürmə ödənişləri 0,5%-dən başlayır, minimum 5 AZN və maksimum 50 AZN, təyinat ölkəsi və köçürmə məbləğindən asılı olaraq.",
        },
        {
          question: "Parolu necə sıfırlayım?",
          answer: "Giriş səhifəsində 'Parolu unutdum' düyməsinə basın və təlimatlara əməl edin. SMS və ya e-poçt vasitəsilə təsdiq kodu alacaqsınız.",
        },
        {
          question: "Mobil bankçılıq təhlükəsizdirmi?",
          answer: "Bəli, mobil bank tətbiqimiz maksimum təhlükəsizliyi təmin etmək üçün 256-bit şifrələmə, biometrik autentifikasiya və real vaxt rejimində fırıldaqçılıq monitorinqindən istifadə edir.",
        },
        {
          question: "Kartım itərsə və ya oğurlanarsa nə etməliyəm?",
          answer: "Dərhal 24/7 qaynar xəttimizə +994 12 123 45 67 zəng edin və ya kartınızı dərhal bloklamaq üçün tətbiqdən istifadə edin.",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="pt-24">
      <section className={`py-20 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0a1128] via-[#1e2749] to-[#0a1128]"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl md:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.title}
            </h1>
            <p className={`text-xl ${
              theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
            }`}>
              {t.subtitle}
            </p>
          </motion.div>

          <div className="space-y-4">
            {t.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden ${
                  theme === "dark"
                    ? "bg-[#1e2749]/50 border border-white/10"
                    : "bg-white border border-gray-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-colors ${
                    theme === "dark"
                      ? "hover:bg-[#4a90e2]/10"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className={`text-lg ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${
                      theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                    }`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-6 pt-0 ${
                        theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
