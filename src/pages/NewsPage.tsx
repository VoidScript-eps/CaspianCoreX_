import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface ContextType {
  language: string;
}

export const NewsPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();

  const content = {
    en: {
      title: "News & Updates",
      subtitle: "Stay informed about our latest developments",
      news: [
        {
          title: "Caspian Mobile App Coming Soon",
          date: "December 2024",
          excerpt: "Our new mobile banking app will be available on iOS and Android in Q1 2025.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        },
        {
          title: "New AI-Powered Financial Tools",
          date: "November 2024",
          excerpt: "Introducing three AI assistants to help you manage your finances smarter.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        },
        {
          title: "Expanded Branch Network",
          date: "October 2024",
          excerpt: "We've opened 5 new branches across Azerbaijan to serve you better.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        },
      ],
      readMore: "Read More",
    },
    ru: {
      title: "Новости и Обновления",
      subtitle: "Будьте в курсе наших последних разработок",
      news: [
        {
          title: "Мобильное Приложение Caspian Скоро",
          date: "Декабрь 2024",
          excerpt: "Наше новое мобильное банковское приложение будет доступно на iOS и Android в Q1 2025.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        },
        {
          title: "Новые Финансовые Инструменты на Базе ИИ",
          date: "Ноябрь 2024",
          excerpt: "Представляем три AI-ассистента для более умного управления финансами.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        },
        {
          title: "Расширенная Сеть Филиалов",
          date: "Октябрь 2024",
          excerpt: "Мы открыли 5 новых филиалов по всему Азербайджану для лучшего обслуживания.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        },
      ],
      readMore: "Подробнее",
    },
    az: {
      title: "Xəbərlər və Yeniliklər",
      subtitle: "Ən son inkişaflarımızdan xəbərdar olun",
      news: [
        {
          title: "Caspian Mobil Tətbiqi Tezliklə",
          date: "Dekabr 2024",
          excerpt: "Yeni mobil bank tətbiqimiz 2025-ci ilin I rübündə iOS və Android-də əlçatan olacaq.",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
        },
        {
          title: "AI Əsaslı Yeni Maliyyə Alətləri",
          date: "Noyabr 2024",
          excerpt: "Maliyyənizi daha ağıllı idarə etməyə kömək edəcək üç AI assistenti təqdim edirik.",
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
        },
        {
          title: "Genişləndirilmiş Filial Şəbəkəsi",
          date: "Oktyabr 2024",
          excerpt: "Sizə daha yaxşı xidmət göstərmək üçün Azərbaycan üzrə 5 yeni filial açdıq.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        },
      ],
      readMore: "Ətraflı",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.news.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`rounded-2xl overflow-hidden transition-all ${
                  theme === "dark"
                    ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2]"
                    : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-xl"
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className={`flex items-center gap-2 text-sm mb-3 ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                  }`}>
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </div>

                  <h3 className={`text-xl mb-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {article.title}
                  </h3>

                  <p className={`mb-4 ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                  }`}>
                    {article.excerpt}
                  </p>

                  <button className={`flex items-center gap-2 transition-colors ${
                    theme === "dark"
                      ? "text-[#5dd9d9] hover:text-[#4a90e2]"
                      : "text-blue-600 hover:text-blue-700"
                  }`}>
                    {t.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
