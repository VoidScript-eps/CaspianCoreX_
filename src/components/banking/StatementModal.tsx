import { motion, AnimatePresence } from "motion/react";
import { X, Download, Filter, TrendingUp, TrendingDown, ArrowRightLeft } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useBankContext, Transaction } from "../../contexts/BankContext";
import { useState } from "react";

interface StatementModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const StatementModal = ({ isOpen, onClose, language }: StatementModalProps) => {
  const { theme } = useTheme();
  const { transactions, accounts } = useBankContext();
  const [filterType, setFilterType] = useState<string>("all");

  const content = {
    en: {
      title: "Account Statement",
      download: "Download",
      filter: "Filter",
      all: "All",
      income: "Income",
      expense: "Expense",
      transfer: "Transfer",
      deposit: "Deposit",
      payment: "Payment",
      noTransactions: "No transactions found",
      account: "Account",
    },
    ru: {
      title: "Выписка по Счёту",
      download: "Скачать",
      filter: "Фильтр",
      all: "Все",
      income: "Доход",
      expense: "Расход",
      transfer: "Перевод",
      deposit: "Депозит",
      payment: "Оплата",
      noTransactions: "Транзакции не найдены",
      account: "Счёт",
    },
    az: {
      title: "Hesab Çıxarışı",
      download: "Yüklə",
      filter: "Filtr",
      all: "Hamısı",
      income: "Gəlir",
      expense: "Xərc",
      transfer: "Köçürmə",
      deposit: "Depozit",
      payment: "Ödəniş",
      noTransactions: "Əməliyyat tapılmadı",
      account: "Hesab",
    },
  };

  const t = content[language as keyof typeof content];

  const filteredTransactions = transactions.filter((transaction) => {
    if (filterType === "all") return true;
    return transaction.type === filterType;
  });

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "income":
      case "deposit":
        return TrendingUp;
      case "expense":
      case "payment":
        return TrendingDown;
      case "transfer":
        return ArrowRightLeft;
      default:
        return TrendingUp;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return `${language === "en" ? "Today" : language === "ru" ? "Сегодня" : "Bu gün"}, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } else if (diffDays === 1) {
      return language === "en" ? "Yesterday" : language === "ru" ? "Вчера" : "Dünən";
    } else if (diffDays <= 7) {
      return `${diffDays} ${language === "en" ? "days ago" : language === "ru" ? "дней назад" : "gün əvvəl"}`;
    }
    return date.toLocaleDateString();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] overflow-hidden z-50 rounded-2xl ${
              theme === "dark"
                ? "bg-[#1e2749] border border-white/10"
                : "bg-white shadow-2xl"
            }`}
          >
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between mb-4">
                <h2 className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {t.title}
                </h2>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === "dark"
                        ? "hover:bg-white/10 text-[#5dd9d9]"
                        : "hover:bg-gray-100 text-blue-600"
                    }`}
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                  <button
                    onClick={onClose}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === "dark"
                        ? "hover:bg-white/10 text-white"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {["all", "income", "expense", "transfer", "deposit", "payment"].map((type) => (
                  <motion.button
                    key={type}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                      filterType === type
                        ? theme === "dark"
                          ? "bg-[#4a90e2] text-white"
                          : "bg-blue-600 text-white"
                        : theme === "dark"
                        ? "bg-[#0a1128] text-[#8b9dc3] hover:bg-white/10"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t[type as keyof typeof t]}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="overflow-y-auto max-h-[calc(80vh-180px)] p-6">
              {filteredTransactions.length === 0 ? (
                <div className={`text-center py-12 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                }`}>
                  {t.noTransactions}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredTransactions.map((transaction) => {
                    const Icon = getTransactionIcon(transaction.type);
                    const account = accounts.find((acc) => acc.id === transaction.accountId);
                    const isPositive = transaction.amount > 0;

                    return (
                      <motion.div
                        key={transaction.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 rounded-xl transition-colors ${
                          theme === "dark"
                            ? "bg-[#0a1128] hover:bg-[#0a1128]/80"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${
                              isPositive
                                ? theme === "dark"
                                  ? "bg-green-500/20"
                                  : "bg-green-100"
                                : theme === "dark"
                                ? "bg-red-500/20"
                                : "bg-red-100"
                            }`}>
                              <Icon className={`w-5 h-5 ${
                                isPositive ? "text-green-500" : "text-red-500"
                              }`} />
                            </div>
                            <div>
                              <div className={theme === "dark" ? "text-white" : "text-gray-900"}>
                                {transaction.description}
                              </div>
                              <div className={`text-sm ${
                                theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                              }`}>
                                {formatDate(transaction.date)} • {account?.name}
                              </div>
                            </div>
                          </div>
                          <div className={`text-lg ${
                            isPositive ? "text-green-500" : "text-red-500"
                          }`}>
                            {isPositive ? "+" : ""}{transaction.amount.toFixed(2)} {account?.currency || "AZN"}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
