import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRightLeft, TrendingUp, TrendingDown } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

interface CurrencyConverterProps {
  language: string;
}

export const CurrencyConverter = ({ language }: CurrencyConverterProps) => {
  const { theme } = useTheme();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("AZN");
  const [amount, setAmount] = useState("100");
  const [result, setResult] = useState(0);

  // Exchange rates (mock data)
  const rates: { [key: string]: { [key: string]: number } } = {
    USD: { AZN: 1.70, EUR: 0.92, USD: 1 },
    EUR: { AZN: 1.85, USD: 1.09, EUR: 1 },
    AZN: { USD: 0.59, EUR: 0.54, AZN: 1 },
  };

  useEffect(() => {
    const amountNum = parseFloat(amount) || 0;
    const rate = rates[fromCurrency]?.[toCurrency] || 1;
    setResult(amountNum * rate);
  }, [amount, fromCurrency, toCurrency]);

  const content = {
    en: {
      title: "Currency Converter",
      from: "From",
      to: "To",
      amount: "Amount",
      result: "Result",
      swap: "Swap currencies",
      rate: "Exchange Rate",
    },
    ru: {
      title: "Конвертер Валют",
      from: "Из",
      to: "В",
      amount: "Сумма",
      result: "Результат",
      swap: "Поменять валюты",
      rate: "Курс Обмена",
    },
    az: {
      title: "Valyuta Çeviricisi",
      from: "Haradan",
      to: "Hara",
      amount: "Məbləğ",
      result: "Nəticə",
      swap: "Valyutaları dəyişdir",
      rate: "Məzənnə",
    },
  };

  const t = content[language as keyof typeof content];

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const currencies = ["USD", "EUR", "AZN"];

  return (
    <div className={`p-6 rounded-2xl ${
      theme === "dark"
        ? "bg-[#1e2749]/50 border border-white/10"
        : "bg-white border border-gray-200 shadow-lg"
    }`}>
      <h2 className={`text-xl mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
        {t.title}
      </h2>

      <div className="space-y-4">
        {/* From Currency */}
        <div>
          <label className={`block mb-2 text-sm ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.from}
          </label>
          <div className="flex gap-2">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className={`px-4 py-3 rounded-lg border transition-colors ${
                theme === "dark"
                  ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                theme === "dark"
                  ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSwap}
            className={`p-3 rounded-full transition-colors ${
              theme === "dark"
                ? "bg-[#4a90e2]/20 text-[#5dd9d9] hover:bg-[#4a90e2]/30"
                : "bg-blue-100 text-blue-600 hover:bg-blue-200"
            }`}
          >
            <ArrowRightLeft className="w-5 h-5" />
          </motion.button>
        </div>

        {/* To Currency */}
        <div>
          <label className={`block mb-2 text-sm ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.to}
          </label>
          <div className="flex gap-2">
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className={`px-4 py-3 rounded-lg border transition-colors ${
                theme === "dark"
                  ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            >
              {currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
            <div className={`flex-1 px-4 py-3 rounded-lg border ${
              theme === "dark"
                ? "bg-[#0a1128]/50 border-white/10 text-white"
                : "bg-gray-50 border-gray-300 text-gray-900"
            }`}>
              {result.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className={`p-4 rounded-lg ${
          theme === "dark"
            ? "bg-[#0a1128] border border-white/10"
            : "bg-gray-50 border border-gray-200"
        }`}>
          <div className="flex items-center justify-between text-sm">
            <span className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
              {t.rate}:
            </span>
            <div className="flex items-center gap-2">
              <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                1 {fromCurrency} = {rates[fromCurrency]?.[toCurrency]?.toFixed(4)} {toCurrency}
              </span>
              {rates[fromCurrency]?.[toCurrency] > 1 ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
