import { useState } from "react";
import { motion } from "motion/react";
import { useOutletContext } from "react-router";
import { CreditCard, TrendingUp, Send, Download, Eye, EyeOff, LogIn, LogOut, User, Shield, Target } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useBankContext } from "../contexts/BankContext";
import { TransferModal } from "../components/banking/TransferModal";
import { PayBillsModal } from "../components/banking/PayBillsModal";
import { DepositModal } from "../components/banking/DepositModal";
import { StatementModal } from "../components/banking/StatementModal";
import { LoginModal } from "../components/banking/LoginModal";
import { FinancialGoals } from "../components/banking/FinancialGoals";
import { CurrencyConverter } from "../components/banking/CurrencyConverter";
import { DepositCalculator } from "../components/banking/DepositCalculator";

interface ContextType {
  language: string;
}

export const OnlineBankingPage = () => {
  const { language } = useOutletContext<ContextType>();
  const { theme } = useTheme();
  const { accounts, transactions, user, logout } = useBankContext();
  const [showBalance, setShowBalance] = useState(true);
  const [transferModalOpen, setTransferModalOpen] = useState(false);
  const [payBillsModalOpen, setPayBillsModalOpen] = useState(false);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [statementModalOpen, setStatementModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const content = {
    en: {
      title: "Online Banking",
      subtitle: "Experience the future of digital banking",
      demo: "Interactive Demo Mode",
      balance: "Total Balance",
      accounts: "My Accounts",
      quickActions: "Quick Actions",
      recentTransactions: "Recent Transactions",
      login: "Login",
      logout: "Logout",
      welcome: "Welcome back",
      loginPrompt: "Please login to access your account",
      actions: {
        transfer: "Transfer",
        pay: "Pay Bills",
        deposit: "Deposit",
        statement: "Statement",
      },
      personalInfo: "Personal Banking",
      myCards: "My Cards",
      hasLoan: "Active Loan",
      noLoan: "No Active Loans",
      financialTools: "Financial Tools",
    },
    ru: {
      title: "Онлайн-Банкинг",
      subtitle: "Испытайте будущее цифрового банкинга",
      demo: "Интерактивный Демо Режим",
      balance: "Общий Баланс",
      accounts: "Мои Счета",
      quickActions: "Быстрые Действия",
      recentTransactions: "Последние Транзакции",
      login: "Войти",
      logout: "Выйти",
      welcome: "С возвращением",
      loginPrompt: "Войдите для доступа к вашему счёту",
      actions: {
        transfer: "Перевод",
        pay: "Оплата Счетов",
        deposit: "Депозит",
        statement: "Выписка",
      },
      personalInfo: "Личный Банкинг",
      myCards: "Мои Карты",
      hasLoan: "Активный Кредит",
      noLoan: "Нет Активных Кредитов",
      financialTools: "Финансовые Инструменты",
    },
    az: {
      title: "Onlayn Bank",
      subtitle: "Rəqəmsal bankçılığın gələcəyini yaşayın",
      demo: "İnteraktiv Demo Rejim",
      balance: "Ümumi Balans",
      accounts: "Hesablarım",
      quickActions: "Sürətli Əməliyyatlar",
      recentTransactions: "Son Əməliyyatlar",
      login: "Giriş",
      logout: "Çıxış",
      welcome: "Xoş gəlmisiniz",
      loginPrompt: "Hesabınıza daxil olmaq üçün giriş edin",
      actions: {
        transfer: "Köçürmə",
        pay: "Ödənişlər",
        deposit: "Depozit",
        statement: "Çıxarış",
      },
      personalInfo: "Şəxsi Bankçılıq",
      myCards: "Kartlarım",
      hasLoan: "Aktiv Kredit",
      noLoan: "Aktiv Kredit Yoxdur",
      financialTools: "Maliyyə Alətləri",
    },
  };

  const t = content[language as keyof typeof content];
  const totalBalance = accounts.reduce((sum, acc) => {
    // Convert USD to AZN for total
    const balanceInAZN = acc.currency === "USD" ? acc.balance * 1.7 : acc.balance;
    return sum + balanceInAZN;
  }, 0);

  const recentTransactions = transactions.slice(0, 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return `${language === "en" ? "Today" : language === "ru" ? "Сегодня" : "Bu gün"}, ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } else if (diffDays === 1) {
      return language === "en" ? "Yesterday" : language === "ru" ? "Вчера" : "Dünən";
    }
    return date.toLocaleDateString();
  };

  return (
    <div className="pt-24">
      <section className={`py-12 min-h-screen ${ theme === "dark" ? "bg-[#0a1128]" : "bg-gray-50"
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className={`text-3xl mb-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {t.title}
                </h1>
                <p className={`${
                  theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                }`}>
                  {t.subtitle}
                </p>
              </div>
              
              {/* Login/Logout Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => user.isLoggedIn ? logout() : setLoginModalOpen(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                }`}
              >
                {user.isLoggedIn ? (
                  <>
                    <LogOut className="w-5 h-5" />
                    {t.logout}
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    {t.login}
                  </>
                )}
              </motion.button>
            </div>

            {/* Demo Badge */}
            <div className="flex items-center gap-3">
              <div className={`inline-block px-4 py-2 rounded-lg text-sm ${
                theme === "dark"
                  ? "bg-[#4a90e2]/20 text-[#5dd9d9] border border-[#4a90e2]/30"
                  : "bg-blue-50 text-blue-600 border border-blue-200"
              }`}>
                {t.demo}
              </div>
              
              {/* Status Indicator */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                  user.isLoggedIn
                    ? theme === "dark"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-green-50 text-green-600 border border-green-200"
                    : theme === "dark"
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "bg-orange-50 text-orange-600 border border-orange-200"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  user.isLoggedIn ? "bg-green-500 animate-pulse" : "bg-orange-500"
                }`} />
                {user.isLoggedIn ? (
                  <>
                    {language === "en" && `Logged in as ${user.username}`}
                    {language === "ru" && `Вы вошли как ${user.username}`}
                    {language === "az" && `${user.username} olaraq daxil olunub`}
                  </>
                ) : (
                  <>
                    {language === "en" && "Not logged in"}
                    {language === "ru" && "Не авторизован"}
                    {language === "az" && "Daxil olmayıb"}
                  </>
                )}
              </motion.div>
            </div>

            {/* User Welcome */}
            {user.isLoggedIn && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-xl ${
                  theme === "dark"
                    ? "bg-[#1e2749]/50 border border-white/10"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    theme === "dark" ? "bg-[#4a90e2]/20" : "bg-blue-100"
                  }`}>
                    <User className={`w-5 h-5 ${
                      theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                    }`} />
                  </div>
                  <div>
                    <div className={`text-sm ${
                      theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                    }`}>
                      {t.welcome}
                    </div>
                    <div className={theme === "dark" ? "text-white" : "text-gray-900"}>
                      {user.username}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {!user.isLoggedIn ? (
            // Login Prompt
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center py-20 rounded-2xl ${
                theme === "dark"
                  ? "bg-[#1e2749]/50 border border-white/10"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              <Shield className={`w-16 h-16 mx-auto mb-4 ${
                theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
              }`} />
              <h2 className={`text-2xl mb-2 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                {t.loginPrompt}
              </h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLoginModalOpen(true)}
                className={`mt-6 px-8 py-4 rounded-xl transition-all ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9] text-white"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                }`}
              >
                {t.login}
              </motion.button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Total Balance Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-8 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-[#1e2749] to-[#2d3e82]"
                      : "bg-gradient-to-br from-blue-600 to-cyan-600"
                  } text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80">{t.balance}</span>
                    <button
                      onClick={() => setShowBalance(!showBalance)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                    </button>
                  </div>
                  <motion.div
                    key={totalBalance}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl mb-2"
                  >
                    {showBalance ? `${totalBalance.toFixed(2)} AZN` : "••••••"}
                  </motion.div>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <TrendingUp className="w-4 h-4" />
                    +12.5% {language === "en" ? "this month" : language === "ru" ? "в этом месяце" : "bu ay"}
                  </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h2 className={`text-xl mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {t.quickActions}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Send, label: t.actions.transfer, onClick: () => setTransferModalOpen(true) },
                      { icon: CreditCard, label: t.actions.pay, onClick: () => setPayBillsModalOpen(true) },
                      { icon: TrendingUp, label: t.actions.deposit, onClick: () => setDepositModalOpen(true) },
                      { icon: Download, label: t.actions.statement, onClick: () => setStatementModalOpen(true) },
                    ].map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={action.onClick}
                          className={`p-6 rounded-2xl text-center transition-all ${
                            theme === "dark"
                              ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2] hover:shadow-lg hover:shadow-[#4a90e2]/20"
                              : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
                          }`}
                        >
                          <Icon className={`w-8 h-8 mx-auto mb-3 ${
                            theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                          }`} />
                          <span className={`text-sm ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>
                            {action.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Recent Transactions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className={`text-xl mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {t.recentTransactions}
                  </h2>
                  <div className={`rounded-2xl overflow-hidden ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10"
                      : "bg-white border border-gray-200"
                  }`}>
                    {recentTransactions.length === 0 ? (
                      <div className={`p-8 text-center ${
                        theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                      }`}>
                        No transactions yet
                      </div>
                    ) : (
                      recentTransactions.map((transaction, index) => {
                        const account = accounts.find((acc) => acc.id === transaction.accountId);
                        return (
                          <motion.div
                            key={transaction.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-4 flex items-center justify-between ${
                              index !== recentTransactions.length - 1
                                ? theme === "dark"
                                  ? "border-b border-white/10"
                                  : "border-b border-gray-200"
                                : ""
                            }`}
                          >
                            <div>
                              <div className={theme === "dark" ? "text-white" : "text-gray-900"}>
                                {transaction.description}
                              </div>
                              <div className={`text-sm ${
                                theme === "dark" ? "text-[#8b9dc3]" : "text-gray-500"
                              }`}>
                                {formatDate(transaction.date)}
                              </div>
                            </div>
                            <div className={`${
                              transaction.amount > 0
                                ? "text-green-500"
                                : "text-red-500"
                            }`}>
                              {transaction.amount > 0 ? "+" : ""}{transaction.amount.toFixed(2)} {account?.currency || "AZN"}
                            </div>
                          </motion.div>
                        );
                      })
                    )}
                  </div>
                </motion.div>

                {/* Financial Goals */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FinancialGoals language={language} />
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Accounts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className={`text-xl mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {t.accounts}
                  </h2>
                  <div className="space-y-4">
                    {accounts.map((account, index) => (
                      <motion.div
                        key={account.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className={`p-6 rounded-2xl transition-all cursor-pointer ${
                          theme === "dark"
                            ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2]"
                            : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-sm ${
                            theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                          }`}>
                            {account.name}
                          </span>
                          <CreditCard className={`w-5 h-5 ${
                            theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                          }`} />
                        </div>
                        <motion.div
                          key={account.balance}
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className={`text-2xl ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {showBalance
                            ? `${account.balance.toFixed(2)} ${account.currency}`
                            : "•••••••"
                          }
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Personal Info */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className={`p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-[#1e2749]/50 border border-white/10"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  <h3 className={`mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {t.personalInfo}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className={`text-sm mb-1 ${
                        theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                      }`}>
                        {t.myCards}
                      </div>
                      <div className="space-y-2">
                        {user.cards.map((card, idx) => (
                          <div
                            key={idx}
                            className={`text-sm ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {card}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`pt-3 border-t ${
                      theme === "dark" ? "border-white/10" : "border-gray-200"
                    }`}>
                      <div className={`text-sm ${
                        theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                      }`}>
                        {user.hasLoan ? t.hasLoan : t.noLoan}
                      </div>
                      {user.hasLoan && user.loanAmount && (
                        <div className={`text-lg ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>
                          {user.loanAmount.toFixed(2)} AZN
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                {/* Currency Converter */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <CurrencyConverter language={language} />
                </motion.div>

                {/* Deposit Calculator */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <DepositCalculator language={language} />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      <TransferModal
        isOpen={transferModalOpen}
        onClose={() => setTransferModalOpen(false)}
        language={language}
      />
      <PayBillsModal
        isOpen={payBillsModalOpen}
        onClose={() => setPayBillsModalOpen(false)}
        language={language}
      />
      <DepositModal
        isOpen={depositModalOpen}
        onClose={() => setDepositModalOpen(false)}
        language={language}
      />
      <StatementModal
        isOpen={statementModalOpen}
        onClose={() => setStatementModalOpen(false)}
        language={language}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        language={language}
      />
    </div>
  );
};