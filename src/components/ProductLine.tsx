import { motion } from "motion/react";
import { PremiumCard } from "./PremiumCard";
import { BarChart3, Calculator, Globe } from "lucide-react";

export const ProductLine = () => {
  return (
    <section id="products" className="relative py-32 bg-gradient-to-b from-[#0a1128] via-[#1e2749] to-[#0a1128] text-white overflow-hidden">
      {/* Ocean Depth Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1670364272583-c650374bf379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ0MjQzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Minimal Wave Lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ top: `${30 + i * 20}%` }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#4a90e2] to-transparent mx-auto" />
          <h2 className="text-white">CGF Premium</h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Персональный банкинг для тех, кто ценит глубину и прозрачность
          </p>
        </motion.div>

        {/* Premium Card */}
        <PremiumCard />

        {/* Investment Tools - Minimalist Ocean Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 space-y-16"
        >
          <div className="text-center">
            <div className="w-12 h-[1px] bg-white/20 mx-auto mb-6" />
            <h3 className="text-white/90">Инвестиционные Инструменты</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Wave Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                <BarChart3 className="w-8 h-8 text-[#4a90e2]" />
              </div>
              <h4 className="text-white mb-3">Волна Инвестиций</h4>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                Визуализация движения капитала
              </p>
              
              <div className="h-24 flex items-end gap-2">
                {[35, 55, 40, 70, 50, 80, 65, 85].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: `${height}%`, opacity: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="flex-1 bg-gradient-to-t from-[#4a90e2]/40 to-[#00b4d8]/60 rounded-t-sm"
                  />
                ))}
              </div>
            </motion.div>

            {/* Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                <Calculator className="w-8 h-8 text-[#4a90e2]" />
              </div>
              <h4 className="text-white mb-3">Расчет Глубины</h4>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                Прогнозирование доходности
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Доходность', value: '12.5%' },
                  { label: 'Горизонт', value: '5 лет' },
                  { label: 'Прогноз', value: '+$125K' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/40 text-sm">{item.label}</span>
                    <span className="text-[#4a90e2]">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Markets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                <Globe className="w-8 h-8 text-[#4a90e2]" />
              </div>
              <h4 className="text-white mb-3">Мировые Течения</h4>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">
                Глобальные рынки
              </p>
              
              <div className="space-y-4">
                {[
                  { market: 'S&P 500', change: '+2.3%' },
                  { market: 'NASDAQ', change: '+3.1%' },
                  { market: 'FTSE 100', change: '+1.2%' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/40 text-sm">{item.market}</span>
                    <span className="text-[#00b4d8]">{item.change}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
