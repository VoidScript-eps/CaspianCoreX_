import { useState } from "react";
import { motion } from "motion/react";
import { Brain, TrendingUp, Calculator, Sparkles, ShoppingCart } from "lucide-react";

interface AIAssistantsSectionProps {
  language: string;
  onPurchase: (assistantId: string) => void;
}

export const AIAssistantsSection = ({ language, onPurchase }: AIAssistantsSectionProps) => {
  const [hoveredAssistant, setHoveredAssistant] = useState<string | null>(null);

  const content = {
    en: {
      title: "Caspian AI",
      subtitle: "Intelligence Flowing Like the Caspian Sea",
      description:
        "Our AI assistants enhance human intelligence, providing insights and guidance for your financial journey.",
      buy: "Purchase",
      assistants: [
        {
          id: "dr-caspian",
          name: "Dr. Caspian",
          tagline: "Financial Psychologist",
          description:
            "Helps you overcome fear of spending, manage money anxiety, and navigate the psychological challenges of wealth. Your personal financial wellness coach.",
          icon: Brain,
          color: "#5dd9d9",
          price: "$49/year",
        },
        {
          id: "cgf-advisor",
          name: "CGF Advisor",
          tagline: "Investment Analyst",
          description:
            "Personal investment advisor analyzing markets, recommending strategies, and helping you make informed financial decisions tailored to your goals.",
          icon: TrendingUp,
          color: "#4a90e2",
          price: "$59/year",
        },
        {
          id: "cgf-keeper",
          name: "CGF Keeper",
          tagline: "AI Accountant",
          description:
            "Your intelligent accountant tracking expenses, optimizing budgets, and ensuring your finances are organized and tax-efficient.",
          icon: Calculator,
          color: "#27ae60",
          price: "$39/year",
        },
      ],
    },
    ru: {
      title: "Caspian AI",
      subtitle: "Интеллект, Текущий Как Каспийское Море",
      description:
        "Наши AI-ассистенты усиливают человеческий интеллект, предоставляя инсайты и руководство для вашего финансового путешествия.",
      buy: "Купить",
      assistants: [
        {
          id: "dr-caspian",
          name: "Dr. Caspian",
          tagline: "Финансовый Психолог",
          description:
            "Помогает справиться с боязнью тратить деньги, управлять денежной тревожностью и решать психологические проблемы богатства. Ваш личный коуч финансового благополучия.",
          icon: Brain,
          color: "#5dd9d9",
          price: "$49/год",
        },
        {
          id: "cgf-advisor",
          name: "CGF Advisor",
          tagline: "Инвестиционный Аналитик",
          description:
            "Персональный инвестиционный консультант, анализирующий рынки, рекомендующий стратегии и помогающий принимать обоснованные финансовые решения.",
          icon: TrendingUp,
          color: "#4a90e2",
          price: "$59/год",
        },
        {
          id: "cgf-keeper",
          name: "CGF Keeper",
          tagline: "AI Бухгалтер",
          description:
            "Ваш умный бухгалтер, отслеживающий расходы, оптимизирующий бюджеты и обеспечивающий организованность и налоговую эффективность ваших финансов.",
          icon: Calculator,
          color: "#27ae60",
          price: "$39/год",
        },
      ],
    },
    az: {
      title: "Caspian AI",
      subtitle: "Xəzər Dənizi Kimi Axan Zəka",
      description:
        "Bizim AI köməkçilərimiz insan intellektini gücləndirir, maliyyə səyahətiniz üçün anlayışlar və rəhbərlik təqdim edir.",
      buy: "Satın al",
      assistants: [
        {
          id: "dr-caspian",
          name: "Dr. Caspian",
          tagline: "Maliyyə Psixoloqu",
          description:
            "Pul xərcləmək qorxusunu aradan qaldırmağa, pul narahatlığını idarə etməyə və sərvətin psixoloji çətinlikləri ilə məşğul olmağa kömək edir. Şəxsi maliyyə rifahı məşqçiniz.",
          icon: Brain,
          color: "#5dd9d9",
          price: "$49/il",
        },
        {
          id: "cgf-advisor",
          name: "CGF Advisor",
          tagline: "İnvestisiya Analitiki",
          description:
            "Bazarları təhlil edən, strategiyalar tövsiyə edən və məqsədlərinizə uyğun məlumatlı maliyyə qərarları qəbul etməyə kömək edən şəxsi investisiya məsləhətçisi.",
          icon: TrendingUp,
          color: "#4a90e2",
          price: "$59/il",
        },
        {
          id: "cgf-keeper",
          name: "CGF Keeper",
          tagline: "AI Mühasib",
          description:
            "Xərcləri izləyən, büdcələri optimallaşdıran və maliyyənizin mütəşəkkil və vergi səmərəli olmasını təmin edən ağıllı mühasibin.",
          icon: Calculator,
          color: "#27ae60",
          price: "$39/il",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="ai" className="py-24 bg-[#1e2749] relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a90e2] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5dd9d9] rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-[#5dd9d9]" />
            <h2 className="text-white">{t.title}</h2>
          </div>
          <p className="text-xl text-[#5dd9d9] mb-4">{t.subtitle}</p>
          <p className="text-[#8b9dc3] max-w-2xl mx-auto">{t.description}</p>
        </motion.div>

        {/* AI Assistants Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.assistants.map((assistant, index) => {
            const Icon = assistant.icon;
            const isHovered = hoveredAssistant === assistant.id;

            return (
              <motion.div
                key={assistant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onMouseEnter={() => setHoveredAssistant(assistant.id)}
                onMouseLeave={() => setHoveredAssistant(null)}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-[#0a1128]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:border-[#4a90e2] hover:shadow-lg hover:shadow-[#4a90e2]/20 flex flex-col">
                  {/* 3D Animated Icon */}
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      animate={{
                        rotateY: isHovered ? 360 : 0,
                        scale: isHovered ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Icon Container */}
                      <div
                        className="w-24 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${assistant.color}20, ${assistant.color}40)`,
                          boxShadow: isHovered ? `0 10px 40px ${assistant.color}40` : "none",
                        }}
                      >
                        <Icon className="w-12 h-12" style={{ color: assistant.color }} />

                        {/* Animated Border */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl"
                          style={{
                            border: `2px solid ${assistant.color}`,
                            opacity: isHovered ? 1 : 0,
                          }}
                          animate={{
                            rotate: isHovered ? 360 : 0,
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>

                      {/* Orbiting Particles */}
                      {isHovered && (
                        <>
                          {[0, 120, 240].map((angle) => (
                            <motion.div
                              key={angle}
                              className="absolute w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: assistant.color,
                                top: "50%",
                                left: "50%",
                              }}
                              animate={{
                                x: [0, Math.cos((angle * Math.PI) / 180) * 50],
                                y: [0, Math.sin((angle * Math.PI) / 180) * 50],
                                opacity: [1, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="mb-2 text-white">{assistant.name}</h3>
                    <p className="text-sm mb-4" style={{ color: assistant.color }}>
                      {assistant.tagline}
                    </p>
                    <p className="text-[#8b9dc3] text-sm leading-relaxed mb-6 flex-1">
                      {assistant.description}
                    </p>

                    {/* Price */}
                    <div className="text-2xl mb-4" style={{ color: assistant.color }}>
                      {assistant.price}
                    </div>

                    {/* Purchase Button */}
                    <motion.button
                      onClick={() => onPurchase(assistant.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-6 py-3 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white rounded-full hover:shadow-lg hover:shadow-[#4a90e2]/50 transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {t.buy}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};