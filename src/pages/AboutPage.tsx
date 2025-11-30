import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { Building2, Users, Award, TrendingUp, Shield, Globe2, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import aboutImage from "figma:asset/c939a2e93978bce6788c2c59a577679f694d5bf4.png";

interface ContextType {
  language: string;
}

export const AboutPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();

  const content = {
    en: {
      hero: {
        title: "About Caspian Global Finance",
        subtitle: "Leading the future of banking in Azerbaijan",
      },
      office: {
        title: "Our Head Office",
        description: "Located in the heart of Baku, our headquarters stands as a symbol of modern banking excellence. The building represents our commitment to innovation, transparency, and world-class financial services.",
        address: "Neftchiler Avenue",
      },
      mission: {
        title: "Our Mission & Vision",
        mission: "To provide innovative financial solutions that empower individuals and businesses to achieve their goals while maintaining the highest standards of security and customer service.",
        vision: "To become the leading digital bank in the Caspian region, known for excellence, innovation, and customer-first approach.",
      },
      values: [
        {
          icon: Shield,
          title: "Security First",
          description: "Bank-grade encryption and fraud protection for all transactions",
        },
        {
          icon: Users,
          title: "Customer Focused",
          description: "Personalized service and 24/7 support for our clients",
        },
        {
          icon: TrendingUp,
          title: "Innovation",
          description: "Cutting-edge technology and AI-powered financial tools",
        },
        {
          icon: Award,
          title: "Excellence",
          description: "Award-winning services recognized internationally",
        },
        {
          icon: Globe2,
          title: "Global Reach",
          description: "International partnerships and worldwide accessibility",
        },
        {
          icon: Building2,
          title: "Stability",
          description: "Strong financial foundation and regulatory compliance",
        },
      ],
      stats: [
        { value: "15+", label: "Years in Business" },
        { value: "100K+", label: "Active Customers" },
        { value: "$5B+", label: "Assets Under Management" },
        { value: "50+", label: "Branches Nationwide" },
      ],
    },
    ru: {
      hero: {
        title: "О Caspian Global Finance",
        subtitle: "Лидируем в будущем банковского дела Азербайджана",
      },
      office: {
        title: "Наш Головной Офис",
        description: "Расположенный в центре Баку, наш головной офис является символом современного банковского совершенства. Здание представляет нашу приверженность инновациям, прозрачности и финансовым услугам мирового класса.",
        address: "Neftchiler Avenue",
      },
      mission: {
        title: "Наша Миссия и Видение",
        mission: "Предоставлять инновационные финансовые решения, которые помогают людям и бизнесу достигать своих целей, поддерживая высочайшие стандарты безопасности и обслуживания клиентов.",
        vision: "Стать ведущим цифровым банком в Каспийском регионе, известным совершенством, инновациями и подходом, ориентированным на клиента.",
      },
      values: [
        {
          icon: Shield,
          title: "Безопасность Прежде Всего",
          description: "Банковское шифрование и защита от мошенничества для всех транзакций",
        },
        {
          icon: Users,
          title: "Ориентация на Клиента",
          description: "Персонализированное обслуживание и поддержка 24/7 для наших клиентов",
        },
        {
          icon: TrendingUp,
          title: "Инновации",
          description: "Передовые технологии и финансовые инструменты на базе ИИ",
        },
        {
          icon: Award,
          title: "Совершенство",
          description: "Отмеченные наградами услуги, признанные международно",
        },
        {
          icon: Globe2,
          title: "Глобальный Охват",
          description: "Международные партнерства и доступность по всему миру",
        },
        {
          icon: Building2,
          title: "Стабильность",
          description: "Сильная финансовая основа и соответствие нормам",
        },
      ],
      stats: [
        { value: "15+", label: "Лет на Рынке" },
        { value: "100К+", label: "Активных Клиентов" },
        { value: "$5B+", label: "Активов под Управлением" },
        { value: "50+", label: "Филиалов по Стране" },
      ],
    },
    az: {
      hero: {
        title: "Caspian Global Finance Haqqında",
        subtitle: "Azərbaycanda bankçılığın gələcəyinə rəhbərlik edirik",
      },
      office: {
        title: "Baş Ofisimiz",
        description: "Bakının mərkəzində yerləşən baş ofisimiz müasir bank mükəmməlliyinin simvoludur. Bina innovasiyaya, şəffaflığa və dünya səviyyəli maliyyə xidmətlərinə sadiqliyimizi təmsil edir.",
        address: "Neftchiler Avenue",
      },
      mission: {
        title: "Missiya və Vizyonumuz",
        mission: "Təhlükəsizlik və müştəri xidməti standartlarını saxlayaraq, insanlara və biznes qurumlarına məqsədlərinə çatmaqda kömək edən innovativ maliyyə həlləri təqdim etmək.",
        vision: "Mükəmməllik, innovasiya və müştəri yönümlü yanaşma ilə tanınan Xəzər regionunda aparıcı rəqəmsal bank olmaq.",
      },
      values: [
        {
          icon: Shield,
          title: "Təhlükəsizlik Birinci",
          description: "Bütün əməliyyatlar üçün bank səviyyəli şifrələmə və fırıldaqçılıqdan qorunma",
        },
        {
          icon: Users,
          title: "Müştəri Fokuslu",
          description: "Müştərilərimiz üçün fərdiləşdirilmiş xidmət və 24/7 dəstək",
        },
        {
          icon: TrendingUp,
          title: "İnnovasiya",
          description: "Ən müasir texnologiya və AI əsaslı maliyyə alətləri",
        },
        {
          icon: Award,
          title: "Mükəmməllik",
          description: "Beynəlxalq tanınan mükafat qazanan xidmətlər",
        },
        {
          icon: Globe2,
          title: "Qlobal Əhatə",
          description: "Beynəlxalq tərəfdaşlıqlar və dünya miqyasında əlçatanlıq",
        },
        {
          icon: Building2,
          title: "Sabitlik",
          description: "Güclü maliyyə bazası və qaydaları təmin edilməsi",
        },
      ],
      stats: [
        { value: "15+", label: "İl Biznes" },
        { value: "100K+", label: "Aktiv Müştəri" },
        { value: "$5B+", label: "İdarə Olunan Aktivlər" },
        { value: "50+", label: "Ölkə üzrə Filial" },
      ],
    },
  };

  const t = content[language as keyof typeof content];

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
            className="text-center"
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

      {/* Stats Section */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#1e2749]" : "bg-white"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-3xl md:text-4xl mb-2 ${
                  theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Head Office Section */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {t.office.title}
              </h2>
              <p className={`mb-6 text-lg ${
                theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
              }`}>
                {t.office.description}
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Neftchiler+Avenue,+Baku,+Azerbaijan"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-xl group cursor-pointer transition-all ${
                  theme === "dark"
                    ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2] hover:bg-[#1e2749]"
                    : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
                }`}
              >
                <Building2 className={`w-6 h-6 transition-colors ${
                  theme === "dark" ? "text-[#5dd9d9] group-hover:text-[#4a90e2]" : "text-blue-600 group-hover:text-blue-700"
                }`} />
                <div className="flex-1">
                  <div className={`text-sm ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                  }`}>
                    {language === "en" ? "Address" : language === "ru" ? "Адрес" : "Ünvan"}
                  </div>
                  <div className={`transition-colors ${
                    theme === "dark" ? "text-white group-hover:text-[#5dd9d9]" : "text-gray-900 group-hover:text-blue-600"
                  }`}>
                    {t.office.address}
                  </div>
                </div>
                <ExternalLink className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity ${
                  theme === "dark" ? "text-[#4a90e2]" : "text-blue-600"
                }`} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src={aboutImage}
                alt="CGF Head Office"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#1e2749]" : "bg-white"
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
              {t.mission.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#4a90e2]/20 to-[#5dd9d9]/20 border border-white/10"
                  : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-gray-200"
              }`}
            >
              <h3 className={`text-xl mb-4 ${
                theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
              }`}>
                {language === "en" ? "Our Mission" : language === "ru" ? "Наша Миссия" : "Missiyamız"}
              </h3>
              <p className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"}>
                {t.mission.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-8 rounded-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#5dd9d9]/20 to-[#4a90e2]/20 border border-white/10"
                  : "bg-gradient-to-br from-cyan-50 to-blue-50 border border-gray-200"
              }`}
            >
              <h3 className={`text-xl mb-4 ${
                theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
              }`}>
                {language === "en" ? "Our Vision" : language === "ru" ? "Наше Видение" : "Vizyonumuz"}
              </h3>
              <p className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"}>
                {t.mission.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-16 ${
        theme === "dark" ? "bg-[#0a1128]" : "bg-gray-50"
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
              {language === "en" ? "Our Values" : language === "ru" ? "Наши Ценности" : "Dəyərlərimiz"}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2]"
                      : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
                  } transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#4a90e2] to-[#5dd9d9]"
                      : "bg-gradient-to-br from-blue-500 to-cyan-500"
                  }`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {value.title}
                  </h3>
                  <p className={`text-sm ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                  }`}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};