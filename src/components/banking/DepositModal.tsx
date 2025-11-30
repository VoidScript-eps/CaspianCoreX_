import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, TrendingUp, Plus } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useBankContext } from "../../contexts/BankContext";
import { toast } from "sonner@2.0.3";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const DepositModal = ({ isOpen, onClose, language }: DepositModalProps) => {
  const { theme } = useTheme();
  const { accounts, updateAccountBalance, addTransaction } = useBankContext();
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const content = {
    en: {
      title: "Deposit Funds",
      to: "To Account",
      amount: "Amount",
      selectAccount: "Select account",
      process: "Deposit",
      processing: "Processing...",
      success: "Funds deposited successfully!",
      error: "Deposit failed. Please check your inputs.",
      description: "Add money to your account",
    },
    ru: {
      title: "Пополнение Счёта",
      to: "На Счёт",
      amount: "Сумма",
      selectAccount: "Выберите счёт",
      process: "Пополнить",
      processing: "Обработка...",
      success: "Средства успешно зачислены!",
      error: "Ошибка пополнения. Проверьте данные.",
      description: "Добавьте деньги на ваш счёт",
    },
    az: {
      title: "Hesabın Artırılması",
      to: "Hesaba",
      amount: "Məbləğ",
      selectAccount: "Hesab seçin",
      process: "Artır",
      processing: "İşlənir...",
      success: "Vəsait uğurla əlavə olundu!",
      error: "Əlavə etmə uğursuz oldu. Məlumatları yoxlayın.",
      description: "Hesabınıza pul əlavə edin",
    },
  };

  const t = content[language as keyof typeof content];

  const handleDeposit = async () => {
    if (!toAccount || !amount) {
      toast.error(t.error);
      return;
    }

    const depositAmount = parseFloat(amount);
    if (depositAmount <= 0) {
      toast.error(t.error);
      return;
    }

    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    updateAccountBalance(toAccount, depositAmount);
    addTransaction({
      description: `Deposit to ${accounts.find((acc) => acc.id === toAccount)?.name}`,
      amount: depositAmount,
      type: "deposit",
      accountId: toAccount,
    });

    toast.success(t.success);
    setIsProcessing(false);
    setToAccount("");
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
              <div>
                <h2 className={`text-2xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                  {t.title}
                </h2>
                <p className={`text-sm mt-1 ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.description}
                </p>
              </div>
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
              {/* To Account */}
              <div>
                <label className={`block mb-2 text-sm ${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.to}
                </label>
                <select
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
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
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className={`w-full p-3 pl-12 rounded-lg border transition-colors ${
                      theme === "dark"
                        ? "bg-[#0a1128] border-white/10 text-white focus:border-[#4a90e2]"
                        : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    } outline-none`}
                  />
                  <Plus className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                    theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                  }`} />
                </div>
                {/* Quick amounts */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {[100, 500, 1000, 5000].map((quickAmount) => (
                    <motion.button
                      key={quickAmount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setAmount(quickAmount.toString())}
                      className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                        theme === "dark"
                          ? "bg-[#0a1128] border border-white/10 text-white hover:border-[#4a90e2]"
                          : "bg-gray-50 border border-gray-200 text-gray-900 hover:border-blue-400"
                      }`}
                    >
                      {quickAmount}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Deposit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDeposit}
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
                    <TrendingUp className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <TrendingUp className="w-5 h-5" />
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
