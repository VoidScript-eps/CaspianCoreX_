import { motion } from "motion/react";
import { useState } from "react";
import { Waves, Shield, Star, TrendingUp } from "lucide-react";

export const PremiumCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      {/* Minimal 3D Card */}
      <motion.div
        className="relative w-full max-w-lg mx-auto"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative aspect-[1.586/1] rounded-3xl bg-gradient-to-br from-[#0a1128] via-[#1e2749] to-[#2d3e82] p-10 overflow-hidden">
          {/* Ocean Wave Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1670364272583-c650374bf379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjQ0MjQzNjF8MA&ixlib=rb-4.1.0&q=80&w=1080)',
              backgroundSize: 'cover',
            }}
          />

          {/* Flowing Light */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{
              x: isHovered ? ['-100%', '200%'] : '-100%',
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Minimal Wave Lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ top: `${30 + i * 20}%` }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Card Content - Ultra Minimal */}
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/50 text-sm mb-2">CGF Premium</p>
                <p className="text-white tracking-wide">Platinum</p>
              </div>
              <Waves className="text-white/40 w-8 h-8" />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-xs mb-3 tracking-wider uppercase">Card Number</p>
                <p className="text-white tracking-[0.3em] text-lg">•••• 8492</p>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="text-white/40 text-xs mb-2 tracking-wider uppercase">Member</p>
                  <p className="text-white/90 text-sm">Premium</p>
                </div>
                <div className="text-right">
                  <p className="text-white/40 text-xs mb-2 tracking-wider uppercase">Valid</p>
                  <p className="text-white/90 text-sm">12/28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Premium Features - Ocean Minimal */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: Shield, title: 'Защита', description: 'Глубокая безопасность' },
          { icon: Star, title: 'Сервис', description: 'Персональный консьерж' },
          { icon: TrendingUp, title: 'Капитал', description: 'Стратегическое управление' }
        ].map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 mx-auto mb-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#4a90e2]/50 transition-colors"
              >
                <Icon className="w-5 h-5 text-white/60 group-hover:text-[#4a90e2] transition-colors" />
              </motion.div>
              <h4 className="text-white mb-2">{feature.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
