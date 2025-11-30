import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingUp } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

interface DepositCalculatorProps {
  language: string;
}

export const DepositCalculator = ({ language }: DepositCalculatorProps) => {
  const { theme } = useTheme();
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("8");
  const [term, setTerm] = useState("12");
  const [result, setResult] = useState({ total: 0, interest: 0 });

  useEffect(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) / 100 / 12 || 0;
    const t = parseInt(term) || 0;

    // Simple compound interest formula
    const total = p * Math.pow(1 + r, t);
    const interest = total - p;

    setResult({ total, interest });
  }, [principal, rate, term]);

  const content = {
    en: {
      title: "Deposit Calculator",
      principal: "Initial Deposit",
      rate: "Annual Rate (%)",
      term: "Term (months)",
      totalAmount: "Total Amount",
      interestEarned: "Interest Earned",
      calculate: "Calculate",
    },
    ru: {
      title: "Калькулятор Депозита",
      principal: "Начальный Депозит",
      rate: "Годовая Ставка (%)",
      term: "Срок (месяцы)",
      totalAmount: "Общая Сумма",
      interestEarned: "Заработанные Проценты",
      calculate: "Рассчитать",
    },
    az: {
      title: "Depozit Kalkulyatoru",
      principal: "İlkin Depozit",
      rate: "İllik Faiz (%)",
      term: "Müddət (ay)",
      totalAmount: "Ümumi Məbləğ",
      interestEarned: "Qazanılan Faiz",
      calculate: "Hesabla",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className={`p-6 rounded-2xl ${
      theme === "dark"
        ? "bg-[#1e2749]/50 border border-white/10"
        : "bg-white border border-gray-200 shadow-lg"
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-lg ${
          theme === "dark" ? "bg-[#4a90e2]/20" : "bg-blue-100"
        }`}>
          <Calculator className={`w-6 h-6 ${
            theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
          }`} />
        </div>
        <h2 className={`text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {t.title}
        </h2>
      </div>

      <div className="space-y-4">
        {/* Principal */}
        <div>
          <label className={`block mb-2 text-sm ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.principal}
          </label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border transition-colors ${
              theme === "dark"
                ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
            } outline-none`}
            placeholder="10000"
          />
        </div>

        {/* Rate */}
        <div>
          <label className={`block mb-2 text-sm ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.rate}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="flex-1"
            />
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className={`w-20 px-3 py-2 rounded-lg border transition-colors ${
                theme === "dark"
                  ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            />
          </div>
        </div>

        {/* Term */}
        <div>
          <label className={`block mb-2 text-sm ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.term}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="1"
              max="60"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="flex-1"
            />
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className={`w-20 px-3 py-2 rounded-lg border transition-colors ${
                theme === "dark"
                  ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            />
          </div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#4a90e2]/20 to-[#5dd9d9]/20 border border-[#4a90e2]/30"
              : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200"
          }`}
        >
          <div className="space-y-4">
            <div>
              <div className={`text-sm mb-1 ${
                theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
              }`}>
                {t.totalAmount}
              </div>
              <div className={`text-3xl flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {result.total.toFixed(2)} AZN
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className={`pt-4 border-t ${
              theme === "dark" ? "border-white/10" : "border-gray-200"
            }`}>
              <div className={`text-sm mb-1 ${
                theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
              }`}>
                {t.interestEarned}
              </div>
              <div className={`text-xl ${
                theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
              }`}>
                +{result.interest.toFixed(2)} AZN
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
