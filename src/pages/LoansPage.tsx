import { useState } from "react";
import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { CreditCard, Home, ShoppingBag, TrendingUp, CheckCircle, FileText } from "lucide-react";
import { LoanCalculator } from "../components/LoanCalculator";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

export const LoansPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    purpose: "",
  });

  const content = {
    en: {
      hero: {
        title: "Loans & Credit Solutions",
        subtitle: "Flexible financing options for your needs",
      },
      types: {
        title: "Loan Products",
        items: [
          {
            icon: CreditCard,
            name: "Consumer Loan",
            description: "Quick cash for personal needs",
            rate: "From 12% APR",
            term: "Up to 60 months",
          },
          {
            icon: ShoppingBag,
            name: "Installment Plans",
            description: "Split purchases into easy payments",
            rate: "0% for 6 months",
            term: "6-24 months",
          },
          {
            icon: Home,
            name: "Mortgage",
            description: "Finance your dream home",
            rate: "From 8% APR",
            term: "Up to 25 years",
          },
        ],
      },
      why: {
        title: "Why Choose Our Loans?",
        reasons: [
          "Competitive interest rates",
          "Fast approval process (24 hours)",
          "Flexible repayment terms",
          "No hidden fees",
          "Personal loan manager",
          "Early repayment option without penalty",
        ],
      },
      application: {
        title: "Apply Online",
        subtitle: "Fill out the form and get approval within 24 hours",
        name: "Full Name",
        phone: "Phone Number",
        amount: "Loan Amount (AZN)",
        purpose: "Loan Purpose",
        submit: "Submit Application",
        success: "Application submitted successfully!",
      },
    },
    ru: {
      hero: {
        title: "Кредиты и Финансовые Решения",
        subtitle: "Гибкие варианты финансирования для ваших нужд",
      },
      types: {
        title: "Кредитные Продукты",
        items: [
          {
            icon: CreditCard,
            name: "Потребительский Кредит",
            description: "Быстрые деньги для личных нужд",
            rate: "От 12% годовых",
            term: "До 60 месяцев",
          },
          {
            icon: ShoppingBag,
            name: "Рассрочка",
            description: "Разделите покупки на удобные платежи",
            rate: "0% на 6 месяцев",
            term: "6-24 месяца",
          },
          {
            icon: Home,
            name: "Ипотека",
            description: "Финансируйте дом мечты",
            rate: "От 8% годовых",
            term: "До 25 лет",
          },
        ],
      },
      why: {
        title: "Почему Выбирают Наши Кредиты?",
        reasons: [
          "Конкурентные процентные ставки",
          "Быстрое одобрение (24 часа)",
          "Гибкие условия погашения",
          "Без скрытых комиссий",
          "Персональный кредитный менеджер",
          "Досрочное погашение без штрафов",
        ],
      },
      application: {
        title: "Онлайн Заявка",
        subtitle: "Заполните форму и получите одобрение в течение 24 часов",
        name: "Полное Имя",
        phone: "Номер Телефона",
        amount: "Сумма Кредита (AZN)",
        purpose: "Цель Кредита",
        submit: "Отправить Заявку",
        success: "Заявка успешно отправлена!",
      },
    },
    az: {
      hero: {
        title: "Kreditlər və Maliyyə Həlləri",
        subtitle: "Ehtiyaclarınız üçün çevik maliyyələşdirmə variantları",
      },
      types: {
        title: "Kredit Məhsulları",
        items: [
          {
            icon: CreditCard,
            name: "İstehlak Krediti",
            description: "Şəxsi ehtiyaclar üçün sürətli nağd",
            rate: "12%-dən",
            term: "60 aya qədər",
          },
          {
            icon: ShoppingBag,
            name: "Taksit Planları",
            description: "Alışları asan ödənişlərə bölün",
            rate: "6 ay üçün 0%",
            term: "6-24 ay",
          },
          {
            icon: Home,
            name: "İpoteka",
            description: "Xəyal evini maliyyələşdirin",
            rate: "8%-dən",
            term: "25 ilə qədər",
          },
        ],
      },
      why: {
        title: "Nə üçün Bizim Kreditləri?",
        reasons: [
          "Rəqabətli faiz dərəcələri",
          "Sürətli təsdiq (24 saat)",
          "Çevik ödəmə şərtləri",
          "Gizli ödənişlər yoxdur",
          "Şəxsi kredit meneceri",
          "Cəriməsiz erkən ödəmə seçimi",
        ],
      },
      application: {
        title: "Onlayn Müraciət",
        subtitle: "Formu doldurun və 24 saat ərzində təsdiq alın",
        name: "Tam Ad",
        phone: "Telefon Nömrəsi",
        amount: "Kredit Məbləği (AZN)",
        purpose: "Kredit Məqsədi",
        submit: "Müraciəti Göndər",
        success: "Müraciət uğurla göndərildi!",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.application.success);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className={`py-20 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#0a1128] via-[#1e2749] to-[#0a1128]"
          : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5dd9d9] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className={`text-4xl md:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.hero.title}
            </h1>
            <p className={`text-xl ${
              theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
            }`}>
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loan Types */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className={`text-3xl text-center mb-12 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {t.types.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {t.types.items.map((loan, index) => {
              const Icon = loan.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-8 rounded-2xl transition-all ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2]"
                      : "bg-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-lg"
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
                    {loan.name}
                  </h3>
                  <p className={`mb-6 ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                  }`}>
                    {loan.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className={`flex items-center gap-2 text-sm ${
                      theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                    }`}>
                      <TrendingUp className="w-4 h-4" />
                      {loan.rate}
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${
                      theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                    }`}>
                      <FileText className="w-4 h-4" />
                      {loan.term}
                    </div>
                  </div>

                  <button className={`w-full py-3 rounded-xl transition-all ${
                    theme === "dark"
                      ? "bg-[#4a90e2] text-white hover:bg-[#5dd9d9]"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}>
                    {language === "en" ? "Learn More" : language === "ru" ? "Подробнее" : "Ətraflı"}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#1e2749]" : "bg-gray-50"
      }`}>
        <div className="max-w-4xl mx-auto px-6">
          <LoanCalculator language={language} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.why.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.why.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-3 p-4 rounded-xl ${
                  theme === "dark"
                    ? "bg-[#1e2749]/30"
                    : "bg-gray-50"
                }`}
              >
                <CheckCircle className={`w-6 h-6 flex-shrink-0 ${
                  theme === "dark" ? "text-[#5dd9d9]" : "text-green-600"
                }`} />
                <span className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"}>
                  {reason}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#1e2749]" : "bg-gray-50"
      }`}>
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className={`text-3xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.application.title}
            </h2>
            <p className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
              {t.application.subtitle}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={`p-8 rounded-2xl ${
              theme === "dark"
                ? "bg-[#0a1128]/50 border border-white/10"
                : "bg-white border border-gray-200 shadow-lg"
            }`}
          >
            <div className="space-y-6">
              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.application.name}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl transition-colors ${
                    theme === "dark"
                      ? "bg-[#1e2749] border border-white/10 text-white focus:border-[#4a90e2]"
                      : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.application.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl transition-colors ${
                    theme === "dark"
                      ? "bg-[#1e2749] border border-white/10 text-white focus:border-[#4a90e2]"
                      : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.application.amount}
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl transition-colors ${
                    theme === "dark"
                      ? "bg-[#1e2749] border border-white/10 text-white focus:border-[#4a90e2]"
                      : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none`}
                  required
                />
              </div>

              <div>
                <label className={`block text-sm mb-2 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"
                }`}>
                  {t.application.purpose}
                </label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl transition-colors ${
                    theme === "dark"
                      ? "bg-[#1e2749] border border-white/10 text-white focus:border-[#4a90e2]"
                      : "bg-gray-50 border border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none`}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl transition-all ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white hover:shadow-lg hover:shadow-[#4a90e2]/50"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg"
                }`}
              >
                {t.application.submit}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};
