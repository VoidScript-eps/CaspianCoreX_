import { motion } from "motion/react";
import { Award, Users, Globe2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export const About = () => {
  const timeline = [
    { year: '2010', event: 'Основание CGF', description: 'Запуск банка в Баку' },
    { year: '2013', event: 'Международная экспансия', description: 'Открытие филиалов в 5 странах' },
    { year: '2017', event: 'Цифровая трансформация', description: 'Запуск AI-платформы' },
    { year: '2020', event: 'CGF Premium', description: 'Премиальный сегмент банкинга' },
    { year: '2023', event: 'Dr. Caspian AI', description: 'Финансовый психолог на базе AI' },
    { year: '2025', event: 'Лидер FinTech', description: 'Признание как технологический лидер' }
  ];

  const team = [
    {
      name: 'Александр Каспийский',
      role: 'CEO & Основатель',
      experience: '25 лет в банковской сфере',
      education: 'MBA, London Business School'
    },
    {
      name: 'Елена Волкова',
      role: 'CTO',
      experience: '15 лет в FinTech',
      education: 'PhD Computer Science, MIT'
    },
    {
      name: 'Рашид Мамедов',
      role: 'CFO',
      experience: '20 лет в финансах',
      education: 'CFA, Wharton School'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Надежность',
      description: 'Стабильность как скала Каспия'
    },
    {
      icon: Users,
      title: 'Доверие',
      description: 'Прозрачность во всех операциях'
    },
    {
      icon: Globe2,
      title: 'Инновации',
      description: 'Технологии на службе клиента'
    },
    {
      icon: TrendingUp,
      title: 'Рост',
      description: 'Взаимное финансовое процветание'
    }
  ];

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-white via-[#f5f7fa] to-white overflow-hidden">
      {/* Ocean Texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1759067360054-1fe6f9640b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwc2VhJTIwc3VyZmFjZXxlbnwxfHx8fDE3NjQ0MjQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Minimal Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 space-y-6"
        >
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#2d3e82] to-transparent mx-auto" />
          <h2 className="text-[#0a1128]">О Нас</h2>
          <p className="text-[#1e2749]/60 max-w-lg mx-auto">
            От глубин Каспия к вершинам финансов
          </p>
        </motion.div>

        {/* Core Values - Ocean Minimal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 mx-auto mb-6 rounded-full border border-[#4a90e2]/20 flex items-center justify-center group-hover:border-[#4a90e2]/50 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#2d3e82]/60 group-hover:text-[#4a90e2] transition-colors" />
                </motion.div>
                <h4 className="text-[#0a1128] mb-2">{value.title}</h4>
                <p className="text-[#1e2749]/50 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <div className="w-12 h-[1px] bg-[#2d3e82]/30 mx-auto mb-6" />
            <h3 className="text-[#0a1128]">Течение Времени</h3>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Flow Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#4a90e2]/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative pl-20 group"
                >
                  {/* Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full border-2 border-[#4a90e2]/30 bg-white group-hover:border-[#4a90e2] transition-colors" />
                  
                  <div className="text-[#4a90e2]/60 text-sm mb-2">{item.year}</div>
                  <h4 className="text-[#0a1128] mb-1">{item.event}</h4>
                  <p className="text-[#1e2749]/50 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Minimal Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="w-12 h-[1px] bg-[#2d3e82]/30 mx-auto mb-6" />
            <h3 className="text-[#0a1128]">Команда</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#2d3e82]/10 to-[#4a90e2]/10 flex items-center justify-center group-hover:from-[#2d3e82]/20 group-hover:to-[#4a90e2]/20 transition-all">
                    <Users className="w-10 h-10 text-[#2d3e82]/40" />
                  </div>
                </div>
                
                <h4 className="text-[#0a1128] mb-1">{member.name}</h4>
                <p className="text-[#4a90e2]/60 text-sm mb-4">{member.role}</p>
                <div className="space-y-1 text-xs text-[#1e2749]/40">
                  <p>{member.experience}</p>
                  <p>{member.education}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ocean Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#4a90e2] to-transparent mx-auto" />
            <h3 className="text-[#0a1128] leading-relaxed">
              Глубина Каспия<br />Чистота Технологий
            </h3>
            <p className="text-[#1e2749]/50 text-sm leading-loose max-w-lg mx-auto">
              15 лет в океане финансов. Ваш навигатор к совершенству.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
