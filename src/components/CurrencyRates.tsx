import { motion } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface CurrencyRatesProps {
  language: string;
}

export const CurrencyRates = ({ language }: CurrencyRatesProps) => {
  const { theme } = useTheme();

  const currencies = [
    { code: "USD", name: "US Dollar", rate: 1.7000, change: 0.12, trend: "up" },
    { code: "EUR", name: "Euro", rate: 1.8450, change: -0.08, trend: "down" },
    { code: "TRY", name: "Turkish Lira", rate: 0.0635, change: 0.05, trend: "up" },
    { code: "RUB", name: "Russian Ruble", rate: 0.0185, change: -0.02, trend: "down" },
  ];

  const content = {
    en: {
      title: "Currency Rates",
      subtitle: "Exchange rates for AZN",
      updated: "Updated: Just now",
    },
    ru: {
      title: "Курсы Валют",
      subtitle: "Обменные курсы к манату",
      updated: "Обновлено: Только что",
    },
    az: {
      title: "Valyuta Məzənnələri",
      subtitle: "AZN üçün məzənnələr",
      updated: "Yeniləndi: İndicə",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className={`rounded-2xl p-6 ${
      theme === "dark"
        ? "bg-[#1e2749]/50 border border-white/10"
        : "bg-gray-50 border border-gray-200"
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {t.title}
          </h3>
          <p className={`text-xs ${theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"}`}>
            {t.subtitle}
          </p>
        </div>
        <span className={`text-xs ${theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"}`}>
          {t.updated}
        </span>
      </div>

      <div className="space-y-3">
        {currencies.map((currency, index) => (
          <motion.div
            key={currency.code}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-3 rounded-lg ${
              theme === "dark"
                ? "bg-[#0a1128]/50 hover:bg-[#0a1128]/70"
                : "bg-white hover:bg-gray-50"
            } transition-colors`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                theme === "dark" ? "bg-[#4a90e2]/20" : "bg-blue-100"
              }`}>
                <span className={theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"}>
                  {currency.code}
                </span>
              </div>
              <div>
                <div className={theme === "dark" ? "text-white" : "text-gray-900"}>
                  {currency.code}
                </div>
                <div className={`text-xs ${theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"}`}>
                  {currency.name}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className={theme === "dark" ? "text-white" : "text-gray-900"}>
                {currency.rate.toFixed(4)} AZN
              </div>
              <div className={`flex items-center gap-1 text-xs ${
                currency.trend === "up" 
                  ? "text-green-500" 
                  : "text-red-500"
              }`}>
                {currency.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {Math.abs(currency.change)}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
