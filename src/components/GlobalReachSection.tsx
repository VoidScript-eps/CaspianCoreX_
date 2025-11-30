import { motion } from "motion/react";
import { AzerbaijanMap } from "./AzerbaijanMap";

interface GlobalReachSectionProps {
  language: string;
}

export const GlobalReachSection = ({ language }: GlobalReachSectionProps) => {
  const content = {
    en: {
      title: "Our Presence in Azerbaijan",
      subtitle: "Serving the Nation",
      locations: [
        { city: "Baku", country: "Head Office", x: 50, y: 45 },
        { city: "Ganja", country: "Regional Office", x: 35, y: 42 },
        { city: "Sumgait", country: "Branch", x: 52, y: 40 },
        { city: "Mingachevir", country: "Branch", x: 48, y: 38 },
      ],
    },
    ru: {
      title: "Наше Присутствие в Азербайджане",
      subtitle: "Обслуживаем Нацию",
      locations: [
        { city: "Баку", country: "Главный Офис", x: 50, y: 45 },
        { city: "Гянджа", country: "Региональный Офис", x: 35, y: 42 },
        { city: "Сумгаит", country: "Филиал", x: 52, y: 40 },
        { city: "Мингечевир", country: "Филиал", x: 48, y: 38 },
      ],
    },
    az: {
      title: "Azərbaycanda Mövcudluğumuz",
      subtitle: "Millətə Xidmət",
      locations: [
        { city: "Bakı", country: "Baş Ofis", x: 50, y: 45 },
        { city: "Gəncə", country: "Regional Ofis", x: 35, y: 42 },
        { city: "Sumqayıt", country: "Filial", x: 52, y: 40 },
        { city: "Mingəçevir", country: "Filial", x: 48, y: 38 },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-[#1e2749] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="world-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#world-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">{t.title}</h2>
          <p className="text-lg text-[#8b9dc3]">{t.subtitle}</p>
        </motion.div>

        {/* Azerbaijan Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] bg-[#0a1128]/50 rounded-2xl border border-white/10 overflow-hidden p-8"
        >
          <AzerbaijanMap locations={t.locations} />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: "4+", label: language === "en" ? "Cities" : language === "ru" ? "Городов" : "Şəhərlər" },
            { value: "100K+", label: language === "en" ? "Clients" : language === "ru" ? "Клиентов" : "Müştərilər" },
            { value: "$5B+", label: language === "en" ? "Assets" : language === "ru" ? "Активов" : "Aktivlər" },
            { value: "24/7", label: language === "en" ? "Support" : language === "ru" ? "Поддержка" : "Dəstək" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl text-[#5dd9d9] mb-2">{stat.value}</div>
              <div className="text-[#8b9dc3] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
