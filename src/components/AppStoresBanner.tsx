import { motion } from "motion/react";
import { Smartphone, Apple, PlayCircle } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface AppStoresBannerProps {
  language: string;
}

export const AppStoresBanner = ({ language }: AppStoresBannerProps) => {
  const { theme } = useTheme();

  const content = {
    en: {
      title: "Caspian Global Finance Mobile App",
      subtitle: "Coming Soon to App Store & Google Play",
      description: "Manage your finances on the go with our powerful mobile banking application. Available soon on iOS and Android.",
      notify: "Get Notified",
    },
    ru: {
      title: "Мобильное Приложение Caspian Global Finance",
      subtitle: "Скоро в App Store и Google Play",
      description: "Управляйте финансами в движении с нашим мощным мобильным банковским приложением. Скоро доступно на iOS и Android.",
      notify: "Уведомить Меня",
    },
    az: {
      title: "Caspian Global Finance Mobil Tətbiqi",
      subtitle: "Tezliklə App Store və Google Play-də",
      description: "Güclü mobil bank tətbiqimizlə maliyyənizi hər yerdən idarə edin. Tezliklə iOS və Android-də mövcuddur.",
      notify: "Xəbərdar Et",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-3xl p-8 md:p-12 ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#1e2749] via-[#2d3e82] to-[#4a90e2]"
          : "bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5dd9d9] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm mb-4">
              <Smartphone className="w-4 h-4" />
              <span>{t.subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white mb-4">{t.title}</h2>
            <p className="text-white/80 text-lg">{t.description}</p>
          </motion.div>

          {/* Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <button className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm">App Store</div>
              </div>
            </button>

            <button className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors">
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm">Google Play</div>
              </div>
            </button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#5dd9d9] text-[#0a1128] rounded-full hover:bg-[#5dd9d9]/90 transition-colors"
          >
            {t.notify}
          </motion.button>
        </div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 20, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-96 bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-[#4a90e2] to-[#5dd9d9] rounded-[2.5rem] overflow-hidden">
              <div className="p-6 text-white">
                <div className="text-center mb-8 mt-12">
                  <div className="text-2xl mb-2">CGF</div>
                  <div className="text-xs opacity-60">Mobile Banking</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-xs opacity-60 mb-1">Total Balance</div>
                    <div className="text-2xl">$24,567.89</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-xs opacity-60">Send</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
                      <div className="text-xs opacity-60">Request</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
