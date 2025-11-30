import { motion } from "motion/react";
import { Target, TrendingUp, Plus } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useBankContext } from "../../contexts/BankContext";

interface FinancialGoalsProps {
  language: string;
}

export const FinancialGoals = ({ language }: FinancialGoalsProps) => {
  const { theme } = useTheme();
  const { goals } = useBankContext();

  const content = {
    en: {
      title: "Financial Goals",
      progress: "Progress",
      target: "Target",
      current: "Current",
      deadline: "Deadline",
      addGoal: "Add New Goal",
    },
    ru: {
      title: "Финансовые Цели",
      progress: "Прогресс",
      target: "Цель",
      current: "Текущий",
      deadline: "Срок",
      addGoal: "Добавить Цель",
    },
    az: {
      title: "Maliyyə Məqsədləri",
      progress: "Tərcüme",
      target: "Hədəf",
      current: "Cari",
      deadline: "Son tarix",
      addGoal: "Yeni Məqsəd Əlavə Et",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className={`text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {t.title}
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-lg transition-colors ${
            theme === "dark"
              ? "bg-[#4a90e2]/20 text-[#5dd9d9] hover:bg-[#4a90e2]/30"
              : "bg-blue-100 text-blue-600 hover:bg-blue-200"
          }`}
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="space-y-4">
        {goals.map((goal) => {
          const progressPercentage = (goal.currentAmount / goal.targetAmount) * 100;
          const deadline = new Date(goal.deadline);

          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl transition-all ${
                theme === "dark"
                  ? "bg-[#1e2749]/50 border border-white/10 hover:border-[#4a90e2]"
                  : "bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-lg ${
                    theme === "dark" ? "bg-[#4a90e2]/20" : "bg-blue-100"
                  }`}>
                    <Target className={`w-6 h-6 ${
                      theme === "dark" ? "text-[#5dd9d9]" : "text-blue-600"
                    }`} />
                  </div>
                  <div>
                    <h3 className={`mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}>
                      {goal.name}
                    </h3>
                    <p className={`text-sm ${
                      theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                    }`}>
                      {t.deadline}: {deadline.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm ${
                    theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"
                  }`}>
                    {progressPercentage.toFixed(0)}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className={`h-2 rounded-full mb-3 ${
                theme === "dark" ? "bg-[#0a1128]" : "bg-gray-200"
              }`}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    progressPercentage >= 100
                      ? "bg-green-500"
                      : theme === "dark"
                      ? "bg-gradient-to-r from-[#4a90e2] to-[#5dd9d9]"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600"
                  }`}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
                    {t.current}:{" "}
                  </span>
                  <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                    {goal.currentAmount.toFixed(2)} AZN
                  </span>
                </div>
                <div>
                  <span className={theme === "dark" ? "text-[#8b9dc3]" : "text-gray-600"}>
                    {t.target}:{" "}
                  </span>
                  <span className={theme === "dark" ? "text-white" : "text-gray-900"}>
                    {goal.targetAmount.toFixed(2)} AZN
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
