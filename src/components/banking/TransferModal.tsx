import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useBankContext } from "../../contexts/BankContext";
import { toast } from "sonner@2.0.3";

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: string;
}

export const TransferModal = ({ isOpen, onClose, language }: TransferModalProps) => {
  const { theme } = useTheme();
  const { accounts, updateAccountBalance, addTransaction } = useBankContext();
  const [fromAccount, setFromAccount] = useState("");
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const content = {
    en: {
      title: "Transfer Money",
      from: "From Account",
      to: "To Account / Card Number",
      amount: "Amount",
      selectAccount: "Select account",
      enterCard: "Enter card number or select account",
      process: "Process Transfer",
      processing: "Processing...",
      success: "Transfer successful!",
      error: "Transfer failed. Please check your inputs.",
      insufficient: "Insufficient funds",
    },
    ru: {
      title: "Перевод Средств",
      from: "С Счёта",
      to: "На Счёт / Номер Карты",
      amount: "Сумма",
      selectAccount: "Выберите счёт",
      enterCard: "Введите номер карты или выберите счёт",
      process: "Выполнить Перевод",
      processing: "Обработка...",
      success: "Перевод выполнен успешно!",
      error: "Ошибка перевода. Проверьте данные.",
      insufficient: "Недостаточно средств",
    },
    az: {
      title: "Pul Köçürməsi",
      from: "Hesabdan",
      to: "Hesaba / Kart Nömrəsi",
      amount: "Məbləğ",
      selectAccount: "Hesab seçin",
      enterCard: "Kart nömrəsi daxil edin və ya hesab seçin",
      process: "Köçürməni Həyata Keçir",
      processing: "İşlənir...",
      success: "Köçürmə uğurlu oldu!",
      error: "Köçürmə uğursuz oldu. Məlumatları yoxlayın.",
      insufficient: "Kifayət qədər vəsait yoxdur",
    },
  };

  const t = content[language as keyof typeof content];

  const handleTransfer = async () => {
    if (!fromAccount || !toAccount || !amount) {
      toast.error(t.error);
      return;
    }

    const transferAmount = parseFloat(amount);
    const sourceAccount = accounts.find((acc) => acc.id === fromAccount);

    if (!sourceAccount || sourceAccount.balance < transferAmount) {
      toast.error(t.insufficient);
      return;
    }

    setIsProcessing(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Update balances
    updateAccountBalance(fromAccount, -transferAmount);
    
    const destAccount = accounts.find((acc) => acc.id === toAccount);
    if (destAccount) {
      updateAccountBalance(toAccount, transferAmount);
    }

    // Add transaction
    addTransaction({
      description: `Transfer to ${destAccount?.name || toAccount}`,
      amount: -transferAmount,
      type: "transfer",
      accountId: fromAccount,
      fromAccount,
      toAccount,
    });

    toast.success(t.success);
    setIsProcessing(false);
    setFromAccount("");
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
                  {accounts
                    .filter((acc) => acc.id !== fromAccount)
                    .map((acc) => (
                      <option key={acc.id} value={acc.id}>
                        {acc.name}
                      </option>
                    ))}
                  <option value="external">External Card (Demo)</option>
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

              {/* Transfer Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTransfer}
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
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <Send className="w-5 h-5" />
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
