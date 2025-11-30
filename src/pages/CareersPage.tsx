import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface ContextType {
  language: string;
}

export const CareersPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Careers at CGF",
      subtitle: "Join our team and shape the future of banking",
      why: {
        title: "Why Work With Us",
        benefits: [
          "Competitive salary and bonuses",
          "Health insurance coverage",
          "Professional development programs",
          "Flexible work arrangements",
          "Modern office environment",
          "Career growth opportunities",
        ],
      },
      openings: {
        title: "Open Positions",
        jobs: [
          {
            title: "Senior Software Engineer",
            location: "Baku, Azerbaijan",
            type: "Full-time",
            description: "Build next-generation banking applications with cutting-edge technology.",
          },
          {
            title: "Financial Analyst",
            location: "Baku, Azerbaijan",
            type: "Full-time",
            description: "Analyze market trends and provide strategic financial insights.",
          },
          {
            title: "Customer Service Representative",
            location: "Multiple Locations",
            type: "Full-time",
            description: "Provide excellent service and support to our valued customers.",
          },
        ],
      },
      apply: "Apply Now",
    },
    ru: {
      title: "Карьера в CGF",
      subtitle: "Присоединяйтесь к нашей команде и формируйте будущее банковского дела",
      why: {
        title: "Почему Работать с Нами",
        benefits: [
          "Конкурентная зарплата и бонусы",
          "Медицинская страховка",
          "Программы профессионального развития",
          "Гибкий график работы",
          "Современная офисная среда",
          "Возможности карьерного роста",
        ],
      },
      openings: {
        title: "Открытые Позиции",
        jobs: [
          {
            title: "Старший Программист",
            location: "Баку, Азербайджан",
            type: "Полная занятость",
            description: "Создавайте банковские приложения нового поколения с передовыми технологиями.",
          },
          {
            title: "Финансовый Аналитик",
            location: "Баку, Азербайджан",
            type: "Полная занятость",
            description: "Анализируйте рыночные тенденции и предоставляйте стратегические финансовые идеи.",
          },
          {
            title: "Специалист Службы Поддержки",
            location: "Разные Локации",
            type: "Полная занятость",
            description: "Обеспечивайте отличное обслуживание и поддержку наших клиентов.",
          },
        ],
      },
      apply: "Подать Заявку",
    },
    az: {
      title: "CGF-də Karyera",
      subtitle: "Komandamıza qoşulun və bankçılığın gələcəyini formalaşdırın",
      why: {
        title: "Bizimlə İşləməyin Üstünlükləri",
        benefits: [
          "Rəqabətli əmək haqqı və bonuslar",
          "Tibbi sığorta",
          "Peşəkar inkişaf proqramları",
          "Çevik iş qrafiki",
          "Müasir ofis mühiti",
          "Karyera inkişafı imkanları",
        ],
      },
      openings: {
        title: "Açıq Vakansiyalar",
        jobs: [
          {
            title: "Böyük Proqram Mühəndisi",
            location: "Bakı, Azərbaycan",
            type: "Tam iş günü",
            description: "Ən son texnologiya ilə yeni nəsil bank tətbiqləri yaradın.",
          },
          {
            title: "Maliyyə Analitiki",
            location: "Bakı, Azərbaycan",
            type: "Tam iş günü",
            description: "Bazar tendensiyalarını təhlil edin və strateji maliyyə fikirləri verin.",
          },
          {
            title: "Müştəri Xidməti Nümayəndəsi",
            location: "Müxtəlif Yerlər",
            type: "Tam iş günü",
            description: "Dəyərli müştərilərimizə mükəmməl xidmət və dəstək göstərin.",
          },
        ],
      },
      apply: "İndi Müraciət Et",
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

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl mb-16 ${
              theme === "dark"
                ? "bg-[#1e2749]/50 border border-white/10"
                : "bg-white border border-gray-200"
            }`}
          >
            <h2 className={`text-2xl mb-6 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.why.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {t.why.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    theme === "dark"
                      ? "bg-[#0a1128]/50"
                      : "bg-gray-50"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${
                    theme === "dark" ? "bg-[#5dd9d9]" : "bg-blue-600"
                  }`}></div>
                  <span className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-700"}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Job Openings */}
          <div>
            <h2 className={`text-3xl mb-8 text-center ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              {t.openings.title}
            </h2>

            <div className="space-y-6">
              {t.openings.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-2xl ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2]"
                      : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
                  } transition-all`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className={`text-2xl mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <div className={`flex items-center gap-2 text-sm ${
                          theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                        }`}>
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className={`flex items-center gap-2 text-sm ${
                          theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                        }`}>
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-xl flex items-center gap-2 transition-colors whitespace-nowrap ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                          : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                      }`}
                    >
                      {t.apply}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <p className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
                    {job.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
