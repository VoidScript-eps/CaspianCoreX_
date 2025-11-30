import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, Sparkles, Shield, Gift } from "lucide-react";
import baseCardImage from "figma:asset/6c273ead538d1b6be8c8cecbcaf5362e15efeb2c.png";
import premiumCardImage from "figma:asset/89484748b07c0d580a2a79739ddf5f1e0e3a3db8.png";

interface CardsSectionProps {
  language: string;
}

export const CardsSection = ({ language }: CardsSectionProps) => {
  const [selectedCard, setSelectedCard] = useState<"base" | "premium">("base");

  const content = {
    en: {
      title: "Your Possibilities",
      subtitle: "Choose the card that matches your lifestyle",
      base: {
        name: "Base Card",
        tagline: "Essential Banking",
        features: [
          "Cashback up to 3% on all purchases",
          "Fee-free cash withdrawals at CGF ATMs",
          "Standard partner discounts",
          "24/7 customer support",
        ],
        cta: "Order Card",
      },
      premium: {
        name: "Premium Card",
        tagline: "Exclusive Privileges",
        features: [
          "Cashback up to 7% on all purchases",
          "Priority access and exclusive discounts",
          "Concierge service 24/7",
          "Airport lounge access worldwide",
        ],
        cta: "Order Card",
      },
    },
    ru: {
      title: "Ваши Возможности",
      subtitle: "Выберите карту, соответствующую вашему образу жизни",
      base: {
        name: "Базовая Карта",
        tagline: "Основа Банкинга",
        features: [
          "Кешбэк до 3% на все покупки",
          "Снятие наличных без комиссии в банкоматах CGF",
          "Стандартный набор скидок у партнеров",
          "Поддержка клиентов 24/7",
        ],
        cta: "Заказать Карту",
      },
      premium: {
        name: "Премиум Карта",
        tagline: "Эксклюзивные Привилегии",
        features: [
          "Кешбэк до 7% на все покупки",
          "Приоритетный доступ и эксклюзивные скидки",
          "Консьерж-сервис 24/7",
          "Доступ в бизнес-залы аэропортов по всему миру",
        ],
        cta: "Заказать Карту",
      },
    },
    az: {
      title: "Sizin İmkanlarınız",
      subtitle: "Həyat tərzinizə uyğun kartı seçin",
      base: {
        name: "Əsas Kart",
        tagline: "Əsas Bank Xidmətləri",
        features: [
          "Bütün alış-verişlərdə 3%-ə qədər keşbek",
          "CGF bankomatlarında pulsuzdur",
          "Standart tərəfdaş endirimləri",
          "24/7 müştəri dəstəyi",
        ],
        cta: "Kart Sifariş Edin",
      },
      premium: {
        name: "Premium Kart",
        tagline: "Eksklüziv İmtiyazlar",
        features: [
          "Bütün alış-verişlərdə 7%-ə qədər keşbek",
          "Prioritet giriş və eksklüziv endirimlər",
          "24/7 konsyerj xidməti",
          "Dünya üzrə hava limanı salonlarına giriş",
        ],
        cta: "Kart Sifariş Edin",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const cardData = {
    base: {
      gradient: "from-[#4a90e2] via-[#5dd9d9] to-[#4a90e2]",
      icon: CreditCard,
      content: t.base,
    },
    premium: {
      gradient: "from-[#1e2749] via-[#2d3e82] to-[#0a1128]",
      icon: Sparkles,
      content: t.premium,
    },
  };

  const currentCard = cardData[selectedCard];

  return (
    <section id="products" className="py-24 bg-[#0a1128] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#5dd9d9] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">{t.title}</h2>
          <p className="text-[#8b9dc3] text-lg">{t.subtitle}</p>
        </motion.div>

        {/* Card Selector */}
        <div className="flex justify-center gap-4 mb-12">
          {(["base", "premium"] as const).map((cardType) => (
            <motion.button
              key={cardType}
              onClick={() => setSelectedCard(cardType)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full transition-all ${
                selectedCard === cardType
                  ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white shadow-lg shadow-[#4a90e2]/30"
                  : "bg-white/5 text-[#8b9dc3] border border-white/10 hover:border-[#4a90e2]"
              }`}
            >
              {cardData[cardType].content.name}
            </motion.button>
          ))}
        </div>

        {/* Card Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 3D Card */}
          <motion.div
            className="perspective-1000 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCard}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                className="w-full max-w-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={selectedCard === "base" ? baseCardImage : premiumCardImage}
                  alt={currentCard.content.name}
                  className="w-full h-auto"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Card Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-2 text-white">{currentCard.content.name}</h3>
              <p className="text-[#5dd9d9]">{currentCard.content.tagline}</p>
            </div>

            <ul className="space-y-4">
              {currentCard.content.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#4a90e2]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#5dd9d9]"></div>
                  </div>
                  <span className="text-[#8b9dc3]">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white rounded-full hover:shadow-lg hover:shadow-[#4a90e2]/50 transition-all"
            >
              {currentCard.content.cta}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
