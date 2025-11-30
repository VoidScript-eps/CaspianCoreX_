import { motion } from "motion/react";
import { Globe2, Compass, TrendingUp } from "lucide-react";

interface PrinciplesSectionProps {
  language: string;
}

export const PrinciplesSection = ({ language }: PrinciplesSectionProps) => {
  const content = {
    en: {
      title: "Our Principles",
      principles: [
        {
          icon: TrendingUp,
          title: "Stability at the Core",
          description: "Built on a foundation of financial excellence and trust.",
        },
        {
          icon: Compass,
          title: "Innovation in Motion",
          description: "Embracing cutting-edge technology to navigate the future.",
        },
        {
          icon: Globe2,
          title: "Global in Reach",
          description: "Connecting you to worldwide opportunities and markets.",
        },
      ],
    },
    ru: {
      title: "Наши Принципы",
      principles: [
        {
          icon: TrendingUp,
          title: "Стабильность в основе",
          description: "Построено на фундаменте финансового совершенства и доверия.",
        },
        {
          icon: Compass,
          title: "Инновации в движении",
          description: "Использование передовых технологий для навигации в будущее.",
        },
        {
          icon: Globe2,
          title: "Глобальность в охвате",
          description: "Соединяем вас с мировыми возможностями и рынками.",
        },
      ],
    },
    az: {
      title: "Bizim Prinsiplər",
      principles: [
        {
          icon: TrendingUp,
          title: "Əsasda Sabitlik",
          description: "Maliyyə mükəmməlliyi və etibar əsasında qurulmuşdur.",
        },
        {
          icon: Compass,
          title: "Hərəkətdə İnnovasiya",
          description: "Gələcəyə naviqasiya etmək üçün ən son texnologiyadan istifadə.",
        },
        {
          icon: Globe2,
          title: "Qlobal Əhatə",
          description: "Sizi dünya imkanları və bazarları ilə əlaqələndiririk.",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section className="py-24 bg-[#1e2749] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4a90e2] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#5dd9d9] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 text-white"
        >
          {t.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {t.principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#4a90e2] to-[#5dd9d9] rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#4a90e2]/50 transition-shadow"
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="mb-3 text-white">{principle.title}</h3>
                <p className="text-[#8b9dc3]">{principle.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[#4a90e2] to-transparent mt-20"
        />
      </div>
    </section>
  );
};
