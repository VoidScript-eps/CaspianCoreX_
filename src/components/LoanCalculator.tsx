import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, TrendingUp } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

interface LoanCalculatorProps {
  language: string;
}

export const LoanCalculator = ({ language }: LoanCalculatorProps) => {
  const { theme } = useTheme();
  const [amount, setAmount] = useState(10000);
  const [term, setTerm] = useState(12);
  const [rate, setRate] = useState(12);

  const monthlyRate = rate / 100 / 12;
  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
    (Math.pow(1 + monthlyRate, term) - 1);
  const totalPayment = monthlyPayment * term;
  const totalInterest = totalPayment - amount;

  const content = {
    en: {
      title: "Loan Calculator",
      subtitle: "Calculate your monthly payment",
      amountLabel: "Loan Amount",
      termLabel: "Loan Term (months)",
      rateLabel: "Interest Rate (%)",
      monthlyPayment: "Monthly Payment",
      totalPayment: "Total Payment",
      totalInterest: "Total Interest",
      apply: "Apply for Loan",
    },
    ru: {
      title: "Кредитный Калькулятор",
      subtitle: "Рассчитайте ежемесячный платеж",
      amountLabel: "Сумма Кредита",
      termLabel: "Срок Кредита (месяцев)",
      rateLabel: "Процентная Ставка (%)",
      monthlyPayment: "Ежемесячный Платеж",
      totalPayment: "Общая Сумма",
      totalInterest: "Переплата",
      apply: "Подать Заявку",
    },
    az: {
      title: "Kredit Kalkulyatoru",
      subtitle: "Aylıq ödənişi hesablayın",
      amountLabel: "Kredit Məbləği",
      termLabel: "Kredit Müddəti (ay)",
      rateLabel: "Faiz Dərəcəsi (%)",
      monthlyPayment: "Aylıq Ödəniş",
      totalPayment: "Ümumi Ödəniş",
      totalInterest: "Ümumi Faiz",
      apply: "Müraciət Et",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className={`rounded-2xl p-8 ${
      theme === "dark"
        ? "bg-[#1e2749]/50 border border-white/10"
        : "bg-gray-50 border border-gray-200"
    }`}>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          theme === "dark" ? "bg-[#4a90e2]/20" : "bg-blue-100"
        }`}>
          <Calculator className={`w-6 h-6 ${
            theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
          }`} />
        </div>
        <div>
          <h3 className={`text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {t.title}
          </h3>
          <p className={`text-sm ${theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"}`}>
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Input Controls */}
      <div className="space-y-6 mb-8">
        {/* Loan Amount */}
        <div>
          <label className={`block text-sm mb-2 ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.amountLabel}: {amount.toLocaleString()} AZN
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: theme === "dark"
                ? `linear-gradient(to right, #4a90e2 0%, #5dd9d9 ${(amount / 100000) * 100}%, #1e2749 ${(amount / 100000) * 100}%, #1e2749 100%)`
                : `linear-gradient(to right, #3b82f6 0%, #06b6d4 ${(amount / 100000) * 100}%, #e5e7eb ${(amount / 100000) * 100}%, #e5e7eb 100%)`,
            }}
          />
        </div>

        {/* Loan Term */}
        <div>
          <label className={`block text-sm mb-2 ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.termLabel}: {term}
          </label>
          <input
            type="range"
            min="6"
            max="60"
            step="6"
            value={term}
            onChange={(e) => setTerm(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: theme === "dark"
                ? `linear-gradient(to right, #4a90e2 0%, #5dd9d9 ${(term / 60) * 100}%, #1e2749 ${(term / 60) * 100}%, #1e2749 100%)`
                : `linear-gradient(to right, #3b82f6 0%, #06b6d4 ${(term / 60) * 100}%, #e5e7eb ${(term / 60) * 100}%, #e5e7eb 100%)`,
            }}
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className={`block text-sm mb-2 ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.rateLabel}: {rate}%
          </label>
          <input
            type="range"
            min="5"
            max="25"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: theme === "dark"
                ? `linear-gradient(to right, #4a90e2 0%, #5dd9d9 ${((rate - 5) / 20) * 100}%, #1e2749 ${((rate - 5) / 20) * 100}%, #1e2749 100%)`
                : `linear-gradient(to right, #3b82f6 0%, #06b6d4 ${((rate - 5) / 20) * 100}%, #e5e7eb ${((rate - 5) / 20) * 100}%, #e5e7eb 100%)`,
            }}
          />
        </div>
      </div>

      {/* Results */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-6 rounded-xl ${
        theme === "dark"
          ? "bg-gradient-to-br from-[#4a90e2]/20 to-[#5dd9d9]/20"
          : "bg-gradient-to-br from-blue-50 to-cyan-50"
      }`}>
        <div className="text-center">
          <div className={`text-sm mb-1 ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.monthlyPayment}
          </div>
          <div className={`text-2xl ${
            theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
          }`}>
            {monthlyPayment.toFixed(2)} AZN
          </div>
        </div>

        <div className="text-center">
          <div className={`text-sm mb-1 ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.totalPayment}
          </div>
          <div className={`text-xl ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {totalPayment.toFixed(2)} AZN
          </div>
        </div>

        <div className="text-center">
          <div className={`text-sm mb-1 ${
            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
          }`}>
            {t.totalInterest}
          </div>
          <div className={`text-xl ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            {totalInterest.toFixed(2)} AZN
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-colors ${
          theme === "dark"
            ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white hover:shadow-lg hover:shadow-[#4a90e2]/50"
            : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg"
        }`}
      >
        <TrendingUp className="w-5 h-5" />
        {t.apply}
      </motion.button>
    </div>
  );
};
