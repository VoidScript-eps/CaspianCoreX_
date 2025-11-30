import { motion } from "motion/react";
import { Target, Eye, Shield, TrendingUp, Globe } from "lucide-react";
import headOfficeImage from "figma:asset/c939a2e93978bce6788c2c59a577679f694d5bf4.png";

interface AboutSectionProps {
  language: string;
}

export const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    en: {
      title: "About CGF",
      subtitle: "Depth of Perspective. Breadth of Trust.",
      heritage: {
        title: "Our Heritage",
        text: "Founded on the principles of excellence and innovation, Caspian Global Finance has grown to become a leading force in international banking. Our journey reflects the dynamic evolution of global finance and our unwavering commitment to our clients.",
      },
      values: {
        title: "Our Values",
        items: [
          {
            icon: Eye,
            title: "Transparency",
            text: "Clear, honest communication in every interaction.",
          },
          {
            icon: TrendingUp,
            title: "Innovation",
            text: "Embracing technology to stay ahead of the curve.",
          },
          {
            icon: Shield,
            title: "Responsibility",
            text: "Ethical practices and sustainable growth.",
          },
          {
            icon: Target,
            title: "Long-term Vision",
            text: "Building relationships that last generations.",
          },
          {
            icon: Globe,
            title: "Global Reach",
            text: "Connecting local expertise with worldwide opportunities.",
          },
        ],
      },
      building: {
        title: "Our Head Office",
        text: "Located in the heart of Baku, our iconic headquarters symbolizes the fusion of innovation and tradition. The distinctive wave-shaped architecture reflects our commitment to flowing with the tides of global finance while standing firm as a beacon of stability and trust in the Caspian region.",
      },
    },
    ru: {
      title: "О Банке",
      subtitle: "Глубина Перспективы. Широта Доверия.",
      heritage: {
        title: "Наше Наследие",
        text: "Основанный на принципах совершенства и инноваций, Caspian Global Finance стал ведущей силой в международном банкинге. Наш путь отражает динамичную эволюцию глобальных финансов и нашу непоколебимую приверженность клиентам.",
      },
      values: {
        title: "Наши Ценности",
        items: [
          {
            icon: Eye,
            title: "Прозрачность",
            text: "Четкое, честное общение в каждом взаимодействии.",
          },
          {
            icon: TrendingUp,
            title: "Инновации",
            text: "Использование технологий для опережения времени.",
          },
          {
            icon: Shield,
            title: "Ответственность",
            text: "Этичные практики и устойчивый рост.",
          },
          {
            icon: Target,
            title: "Долгосрочное Видение",
            text: "Построение отношений на поколения.",
          },
          {
            icon: Globe,
            title: "Глобальный Охват",
            text: "Соединение локальной экспертизы с мировыми возможностями.",
          },
        ],
      },
      building: {
        title: "Наш Главный Офис",
        text: "Расположенная в сердце Баку, наша знаковая штаб-квартира символизирует слияние инноваций и традиций. Отличительная волнообразная архитектура отражает нашу приверженность движению в ритме глобальных финансов, оставаясь надежным маяком стабильности и доверия в Каспийском регионе.",
      },
    },
    az: {
      title: "Bank Haqqında",
      subtitle: "Perspektivin Dərinliyi. Etimadın Genişliyi.",
      heritage: {
        title: "Bizim İrs",
        text: "Mükəmməllik və innovasiya prinsipləri üzərində qurulan Caspian Global Finance beynəlxalq bankçılıqda aparıcı qüvvəyə çevrilmişdir. Yolumuz qlobal maliyyənin dinamik təkamülünü və müştərilərə olan dəyişməz öhdəliyimizi əks etdirir.",
      },
      values: {
        title: "Dəyərlərimiz",
        items: [
          {
            icon: Eye,
            title: "Şəffaflıq",
            text: "Hər qarşılıqlı əlaqədə aydın, dürüst ünsiyyət.",
          },
          {
            icon: TrendingUp,
            title: "İnnovasiya",
            text: "Zamanın qabağında olmaq üçün texnologiyanı qəbul etmək.",
          },
          {
            icon: Shield,
            title: "Məsuliyyət",
            text: "Etik praktikalar və davamlı inkişaf.",
          },
          {
            icon: Target,
            title: "Uzunmüddətli Görüş",
            text: "Nəsillərlə davam edən əlaqələr qurmaq.",
          },
          {
            icon: Globe,
            title: "Qlobal Əhatə",
            text: "Yerli ekspertizanı dünya imkanları ilə birləşdirmək.",
          },
        ],
      },
      building: {
        title: "Baş Ofisimiz",
        text: "Bakının mərkəzində yerləşən ikonik baş ofisimiz innovasiya və ənənənin birləşməsini simvolizə edir. Fərqli dalğavari arxitektura qlobal maliyyənin axını ilə hərəkət etməyə sadiq qalarkən Xəzər bölgəsində sabitlik və etimadın mayakı kimi möhkəm duruşumuzu əks etdirir.",
      },
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="about" className="py-24 bg-[#0a1128]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-[#5dd9d9]">{t.subtitle}</p>
        </motion.div>

        {/* Heritage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <h3 className="mb-6 text-white text-center">{t.heritage.title}</h3>
          <p className="text-[#8b9dc3] text-lg text-center leading-relaxed">{t.heritage.text}</p>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-white text-center"
          >
            {t.values.title}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.values.items.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1e2749]/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#4a90e2] transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4a90e2] to-[#5dd9d9] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2 text-white">{value.title}</h4>
                  <p className="text-[#8b9dc3] text-sm">{value.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Building Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="mb-6 text-white">{t.building.title}</h3>
            <p className="text-[#8b9dc3] text-lg leading-relaxed">{t.building.text}</p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={headOfficeImage}
              alt="CGF Head Office"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
