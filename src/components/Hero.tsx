import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { OceanWaves } from "./OceanWaves";
import { Waves } from "lucide-react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#f5f7fa] to-[#e8f4f8]">
      {/* Ocean Texture Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity: backgroundOpacity }}
      >
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1759067360054-1fe6f9640b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwc2VhJTIwc3VyZmFjZXxlbnwxfHx8fDE3NjQ0MjQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Ocean Waves Animation */}
      <OceanWaves />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center space-y-20"
        >
          {/* Minimalist Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Ocean Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4a90e2]/10 to-[#00b4d8]/10 flex items-center justify-center">
                <Waves className="w-10 h-10 text-[#2d3e82]" />
              </div>
            </motion.div>

            <h1 className="text-[#0a1128] tracking-tight">
              Caspian Global Finance
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#4a90e2] to-transparent mx-auto"
            />

            <p className="text-[#1e2749] text-xl max-w-xl mx-auto leading-relaxed">
              Цифровой океан<br />финансового совершенства
            </p>
          </motion.div>

          {/* Minimal Building Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            style={{ scale: imageScale }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764270594264-4af7654f7cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXZ5JTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY0NDIzOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="CGF Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/30 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Minimalist Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center gap-20"
          >
            {[
              { value: "15", label: "Лет" },
              { value: "50K", label: "Клиентов" },
              { value: "$2B", label: "Активов" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + i * 0.2 }}
                className="text-center"
              >
                <div className="text-[#2d3e82] mb-2">{stat.value}</div>
                <div className="text-[#1e2749]/60 text-sm tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
