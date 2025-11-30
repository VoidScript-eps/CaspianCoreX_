import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { Shield, Lock, Eye, Bell, Fingerprint, AlertTriangle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

export const SecurityPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Security & Protection",
      subtitle: "Your safety is our top priority",
      features: [
        {
          icon: Shield,
          title: "256-bit Encryption",
          description: "Military-grade encryption protects all your transactions and personal data",
        },
        {
          icon: Lock,
          title: "Two-Factor Authentication",
          description: "Additional security layer for account access and transactions",
        },
        {
          icon: Fingerprint,
          title: "Biometric Security",
          description: "Face ID and fingerprint authentication for mobile app access",
        },
        {
          icon: Eye,
          title: "24/7 Monitoring",
          description: "Real-time fraud detection and prevention systems",
        },
        {
          icon: Bell,
          title: "Instant Alerts",
          description: "Immediate notifications for all account activities",
        },
        {
          icon: AlertTriangle,
          title: "Anti-Fraud System",
          description: "Advanced AI-powered fraud detection and prevention",
        },
      ],
      tips: {
        title: "Security Tips",
        items: [
          "Never share your password or PIN with anyone",
          "Always verify the website URL before entering credentials",
          "Enable two-factor authentication for enhanced security",
          "Regularly update your password",
          "Be cautious of phishing emails and suspicious links",
          "Contact us immediately if you notice any suspicious activity",
        ],
      },
    },
    ru: {
      title: "Безопасность и Защита",
      subtitle: "Ваша безопасность — наш главный приоритет",
      features: [
        {
          icon: Shield,
          title: "256-битное Шифрование",
          description: "Военное шифрование защищает все ваши транзакции и личные данные",
        },
        {
          icon: Lock,
          title: "Двухфакторная Аутентификация",
          description: "Дополнительный уровень безопасности для доступа к аккаунту",
        },
        {
          icon: Fingerprint,
          title: "Биометрическая Безопасность",
          description: "Face ID и отпечаток пальца для доступа к мобильному приложению",
        },
        {
          icon: Eye,
          title: "Мониторинг 24/7",
          description: "Системы обнаружения и предотвращения мошенничества в реальном времени",
        },
        {
          icon: Bell,
          title: "Мгновенные Оповещения",
          description: "Немедленные уведомления обо всех активностях на счете",
        },
        {
          icon: AlertTriangle,
          title: "Антифрод Система",
          description: "Продвинутое обнаружение и предотвращение мошенничества на базе ИИ",
        },
      ],
      tips: {
        title: "Советы по Безопасности",
        items: [
          "Никогда не делитесь своим паролем или PIN-кодом",
          "Всегда проверяйте URL сайта перед вводом учетных данных",
          "Включите двухфакторную аутентификацию для повышенной безопасности",
          "Регулярно обновляйте свой пароль",
          "Будьте осторожны с фишинговыми письмами и подозрительными ссылками",
          "Немедленно свяжитесь с нами при обнаружении подозрительной активности",
        ],
      },
    },
    az: {
      title: "Təhlükəsizlik və Qoruma",
      subtitle: "Təhlükəsizliyiniz bizim əsas prioritetimizdir",
      features: [
        {
          icon: Shield,
          title: "256-bit Şifrələmə",
          description: "Hərbi dərəcəli şifrələmə bütün əməliyyatlarınızı və şəxsi məlumatlarınızı qoruyur",
        },
        {
          icon: Lock,
          title: "İki Faktorlu Autentifikasiya",
          description: "Hesaba giriş və əməliyyatlar üçün əlavə təhlükəsizlik qatı",
        },
        {
          icon: Fingerprint,
          title: "Biometrik Təhlükəsizlik",
          description: "Mobil tətbiqə giriş üçün Face ID və barmaq izi autentifikasiyası",
        },
        {
          icon: Eye,
          title: "24/7 Monitorinq",
          description: "Real vaxt rejimində fırıldaqçılığın aşkarlanması və qarşısının alınması sistemləri",
        },
        {
          icon: Bell,
          title: "Ani Bildirişlər",
          description: "Bütün hesab fəaliyyətləri üçün dərhal bildirişlər",
        },
        {
          icon: AlertTriangle,
          title: "Anti-Fırıldaqçılıq Sistemi",
          description: "AI əsaslı qabaqcıl fırıldaqçılığın aşkarlanması və qarşısının alınması",
        },
      ],
      tips: {
        title: "Təhlükəsizlik Məsləhətləri",
        items: [
          "Parol və ya PIN kodunuzu heç kimlə paylaşmayın",
          "Məlumat daxil etməzdən əvvəl həmişə sayt URL-ni yoxlayın",
          "Təhlükəsizliyi artırmaq üçün iki faktorlu autentifikasiyanı aktivləşdirin",
          "Parolunuzu müntəzəm olaraq yeniləyin",
          "Fişinq e-poçtlarından və şübhəli keçidlərdən ehtiyatlı olun",
          "Şübhəli fəaliyyət aşkar etsəniz dərhal bizimlə əlaqə saxlayın",
        ],
      },
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
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
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

          {/* Security Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-2xl ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#4a90e2] to-[#5dd9d9]"
                      : "bg-gradient-to-br from-blue-500 to-cyan-500"
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-xl mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Security Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${
              theme === "dark"
                ? "bg-[#0a1128]/50 border border-white/10"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h2 className={`text-2xl mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.tips.title}
            </h2>
            <ul className="space-y-4">
              {t.tips.items.map((tip, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                  }`}
                >
                  <Shield className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                    theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                  }`} />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
