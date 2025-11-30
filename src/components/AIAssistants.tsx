import { motion } from "motion/react";
import { Brain, TrendingUp, PiggyBank, MessageSquare, BarChart2, Sparkles } from "lucide-react";
import { useState } from "react";

export const AIAssistants = () => {
  const [activeAssistant, setActiveAssistant] = useState<string | null>(null);

  const assistants = [
    {
      id: 'dr-caspian',
      name: 'Dr. Caspian',
      title: 'Финансовый Психолог',
      icon: Brain,
      color: '#4a90e2',
      description: 'AI-психолог для управления поведенческими финансами',
      features: [
        'Анализ финансового поведения',
        'Выявление иррациональных решений',
        'Стратегии устранения денежного стресса',
        'Достижение финансового спокойствия'
      ],
      chatExample: [
        { role: 'user', text: 'Я часто трачу больше, чем планирую...' },
        { role: 'assistant', text: 'Понимаю вашу обеспокоенность. Давайте проанализируем паттерн ваших расходов и разработаем стратегию осознанного потребления.' }
      ]
    },
    {
      id: 'cgf-advisor',
      name: 'CGF Advisor',
      title: 'Инвестиционный Аналитик',
      icon: TrendingUp,
      color: '#00b4d8',
      description: 'Точные рыночные данные, графики и прогнозы',
      features: [
        'Анализ мировых рынков в реальном времени',
        'Персонализированные инвестиционные рекомендации',
        'Оценка рисков портфеля',
        'Прогнозирование доходности'
      ],
      chartData: [
        { month: 'Янв', value: 65 },
        { month: 'Фев', value: 72 },
        { month: 'Мар', value: 68 },
        { month: 'Апр', value: 85 },
        { month: 'Май', value: 92 },
        { month: 'Июн', value: 88 }
      ]
    },
    {
      id: 'cgf-keeper',
      name: 'CGF Keeper',
      title: 'Оптимизатор Бюджета',
      icon: PiggyBank,
      color: '#2d3e82',
      description: 'Автоматическое управление бюджетом и прогнозирование',
      features: [
        'Автоматическая категоризация расходов',
        'Прогнозирование денежных потоков',
        'Оптимизация сбережений',
        'Умные уведомления о бюджете'
      ],
      budgetData: [
        { category: 'Жилье', spent: 35, budget: 40 },
        { category: 'Питание', spent: 20, budget: 25 },
        { category: 'Транспорт', spent: 12, budget: 15 },
        { category: 'Развлечения', spent: 8, budget: 10 }
      ]
    }
  ];

  return (
    <section id="ai-assistants" className="relative py-32 bg-gradient-to-b from-white via-[#f5f7fa] to-white overflow-hidden">
      {/* Ocean Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1759067360054-1fe6f9640b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwc2VhJTIwc3VyZmFjZXxlbnwxfHx8fDE3NjQ0MjQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#4a90e2] to-transparent mx-auto" />
          <h2 className="text-[#0a1128]">AI-Ассистенты</h2>
          <p className="text-[#1e2749]/60 max-w-lg mx-auto">
            Интеллектуальное течение вашего финансового пути
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {assistants.map((assistant, index) => {
            const Icon = assistant.icon;
            const isActive = activeAssistant === assistant.id;

            return (
              <motion.div
                key={assistant.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <motion.div
                  className={`relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border transition-all cursor-pointer ${
                    isActive ? 'border-[#4a90e2]/50 shadow-2xl bg-white' : 'border-gray-200/50 hover:border-[#4a90e2]/30'
                  }`}
                  onClick={() => setActiveAssistant(isActive ? null : assistant.id)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Minimal Icon */}
                  <div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Icon className="w-8 h-8 text-[#2d3e82]" />
                  </div>

                  {/* Header */}
                  <h3 className="text-[#0a1128] mb-2">{assistant.name}</h3>
                  <p className="text-[#4a90e2]/80 text-sm mb-6">{assistant.title}</p>
                  <p className="text-[#1e2749]/60 text-sm mb-8 leading-relaxed">
                    {assistant.description}
                  </p>

                  {/* Features - Minimal */}
                  <div className="space-y-2 mb-8">
                    {assistant.features.map((feature, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#4a90e2]/40" />
                        <p className="text-[#1e2749]/50 text-xs">{feature}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Demo */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 pt-6 mt-6"
                    >
                      {assistant.id === 'dr-caspian' && assistant.chatExample && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <MessageSquare className="w-4 h-4 text-[#4a90e2]" />
                            <span className="text-[#1e2749] text-sm">Пример диалога:</span>
                          </div>
                          {assistant.chatExample.map((msg, i) => (
                            <div
                              key={i}
                              className={`p-3 rounded-lg text-sm ${
                                msg.role === 'user'
                                  ? 'bg-[#f5f7fa] text-[#1e2749] ml-4'
                                  : 'bg-[#4a90e2]/10 text-[#0a1128] mr-4'
                              }`}
                            >
                              {msg.text}
                            </div>
                          ))}
                        </div>
                      )}

                      {assistant.id === 'cgf-advisor' && assistant.chartData && (
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <BarChart2 className="w-4 h-4 text-[#4a90e2]" />
                            <span className="text-[#1e2749] text-sm">Динамика портфеля:</span>
                          </div>
                          <div className="h-32 flex items-end gap-2">
                            {assistant.chartData.map((item, i) => (
                              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: `${item.value}%` }}
                                  transition={{ delay: i * 0.1 }}
                                  className="w-full bg-gradient-to-t from-[#2d3e82] to-[#4a90e2] rounded-t"
                                />
                                <span className="text-xs text-[#1e2749]">{item.month}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {assistant.id === 'cgf-keeper' && assistant.budgetData && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 mb-4">
                            <PiggyBank className="w-4 h-4 text-[#4a90e2]" />
                            <span className="text-[#1e2749] text-sm">Анализ расходов:</span>
                          </div>
                          {assistant.budgetData.map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-[#1e2749]">{item.category}</span>
                                <span className="text-[#2d3e82]">
                                  {item.spent}% / {item.budget}%
                                </span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${(item.spent / item.budget) * 100}%` }}
                                  transition={{ delay: i * 0.1 }}
                                  className="h-full bg-gradient-to-r from-[#2d3e82] to-[#4a90e2] rounded-full"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Minimal CTA */}
                  <div className="text-center pt-4 border-t border-gray-200/50">
                    <span className="text-[#4a90e2]/60 text-xs tracking-wider uppercase">
                      {isActive ? 'Скрыть' : 'Показать больше'}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-[1px] bg-[#4a90e2]/30 mx-auto mb-6" />
            <p className="text-[#1e2749]/50 text-sm leading-loose">
              Передовые алгоритмы для персонализированных рекомендаций
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
