import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { AnimatedOceanBackground } from "./AnimatedOceanBackground";

interface HeroSectionProps {
  language: string;
}

export const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    en: {
      title: "Caspian Global Finance",
      subtitle: "Helm of Global Investments",
      description:
        "Where stability meets innovation. Navigate the global financial ocean with confidence and precision.",
      cta: "Explore Services",
    },
    ru: {
      title: "Caspian Global Finance",
      subtitle: "Штурвал глобальных инвестиций",
      description:
        "Где стабильность встречается с инновациями. Навигация в глобальном финансовом океане с уверенностью и точностью.",
      cta: "Изучить услуги",
    },
    az: {
      title: "Caspian Global Finance",
      subtitle: "Qlobal İnvestisiyaların Sükanı",
      description:
        "Sabitlik innovasiyalarla görüşür. Qlobal maliyyə okeanında inamla və dəqiqliklə naviqasiya edin.",
      cta: "Xidmətləri araşdırın",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Ocean Background */}
      <AnimatedOceanBackground />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="mb-4 text-white">{t.title}</h1>
          <p className="text-xl md:text-2xl text-[#5dd9d9] mb-6">{t.subtitle}</p>
          <p className="text-lg text-[#8b9dc3] max-w-2xl mx-auto mb-10">{t.description}</p>

          <motion.a
            href="#products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white rounded-full hover:shadow-lg hover:shadow-[#4a90e2]/50 transition-all"
          >
            {t.cta}
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#5dd9d9] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
