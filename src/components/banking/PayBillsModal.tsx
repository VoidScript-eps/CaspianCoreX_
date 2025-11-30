import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Zap, Droplet, Flame, Wifi, Phone, CreditCard } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useBankContext } from "../../contexts/BankContext";
import { toast } from "sonner@2.0.3";

interface PayBillsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const PayBillsModal = ({ isOpen, onClose, language }: PayBillsModalProps) => {
  const { theme } = useTheme();
  const { accounts, updateAccountBalance, addTransaction } = useBankContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [fromAccount, setFromAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const content = {
    en: {
      title: "Pay Bills",
      category: "Bill Category",
      from: "From Account",
      amount: "Amount",
      selectCategory: "Select category",
      selectAccount: "Select account",
      process: "Pay Bill",
      processing: "Processing...",
      success: "Bill paid successfully!",
      error: "Payment failed. Please check your inputs.",
      insufficient: "Insufficient funds",
      categories: {
        electricity: "Electricity",
        water: "Water",
        gas: "Gas",
        internet: "Internet",
        phone: "Phone",
        other: "Other",
      },
    },
    ru: {
      title: "Оплата Счетов",
      category: "Категория Счёта",
      from: "С Счёта",
      amount: "Сумма",
      selectCategory: "Выберите категорию",
      selectAccount: "Выберите счёт",
      process: "Оплатить",
      processing: "Обработка...",
      success: "Счёт оплачен успешно!",
      error: "Ошибка оплаты. Проверьте данные.",
      insufficient: "Недостаточно средств",
      categories: {
        electricity: "Электричество",
        water: "Вода",
        gas: "Газ",
        internet: "Интернет",
        phone: "Телефон",
        other: "Другое",
      },
    },
    az: {
      title: "Ödənişlər",
      category: "Ödəniş Kateqoriyası",
      from: "Hesabdan",
      amount: "Məbləğ",
      selectCategory: "Kateqoriya seçin",
      selectAccount: "Hesab seçin",
      process: "Ödə",
      processing: "İşlənir...",
      success: "Ödəniş uğurlu oldu!",
      error: "Ödəniş uğursuz oldu. Məlumatları yoxlayın.",
      insufficient: "Kifayət qədər vəsait yoxdur",
      categories: {
        electricity: "Elektrik",
        water: "Su",
        gas: "Qaz",
        internet: "İnternet",
        phone: "Telefon",
        other: "Digər",
      },
    },
  };

  const t = content[language as keyof typeof content];

  const categoryIcons = {
    electricity: Zap,
    water: Droplet,
    gas: Flame,
    internet: Wifi,
    phone: Phone,
    other: CreditCard,
  };

  const handlePayment = async () => {
    if (!selectedCategory || !fromAccount || !amount) {
      toast.error(t.error);
      return;
    }

    const paymentAmount = parseFloat(amount);
    const sourceAccount = accounts.find((acc) => acc.id === fromAccount);

    if (!sourceAccount || sourceAccount.balance < paymentAmount) {
      toast.error(t.insufficient);
      return;
    }

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    updateAccountBalance(fromAccount, -paymentAmount);
    addTransaction({
      description: `Bill Payment - ${t.categories[selectedCategory as keyof typeof t.categories]}`,
      amount: -paymentAmount,
      type: "payment",
      accountId: fromAccount,
    });

    toast.success(t.success);
    setIsProcessing(false);
    setSelectedCategory("");
    setFromAccount("");
    setAmount("");
    onClose();
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
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 rounded-2xl p-6 ${
              theme === "dark"
                ? "bg-[#1e2749] border border-white/10"
                : "bg-white shadow-2xl"
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                {t.title}
              </h2>
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

            <div className="space-y-4">
              {/* Category Selection */}
              <div>
                <label className={`block mb-3 text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.category}
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {Object.entries(categoryIcons).map(([key, Icon]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(key)}
                      className={`p-4 rounded-xl flex flex-col items-center gap-2 transition-all ${
                        selectedCategory === key
                          ? theme === "dark"
                            ? "bg-[#4a90e2]/20 border-2 border-[#4a90e2]"
                            : "bg-blue-50 border-2 border-blue-500"
                          : theme === "dark"
                          ? "bg-[#0a1128] border border-white/10 hover:border-[#4a90e2]"
                          : "bg-gray-50 border border-gray-200 hover:border-blue-400"
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${
                        selectedCategory === key
                          ? theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                          : theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                      }`} />
                      <span className={`text-xs ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        {t.categories[key as keyof typeof t.categories]}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* From Account */}
              <div>
                <label className={`block mb-2 text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.from}
                </label>
                <select
                  value={fromAccount}
                  onChange={(e) => setFromAccount(e.target.value)}
                  className={`w-full p-3 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  } outline-none`}
                >
                  <option value="">{t.selectAccount}</option>
                  {accounts.map((acc) => (
                    <option key={acc.id} value={acc.id}>
                      {acc.name} - {acc.balance.toFixed(2)} {acc.currency}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className={`block mb-2 text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.amount}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className={`w-full p-3 rounded-lg border transition-colors ${
                    theme === "dark"
                      ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                      : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  } outline-none`}
                />
              </div>

              {/* Pay Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isProcessing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <CreditCard className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <CreditCard className="w-5 h-5" />
                )}
                {isProcessing ? t.processing : t.process}
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
