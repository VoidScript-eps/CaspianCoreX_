import { motion } from "motion/react";

export const WaveAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#4a90e2] to-transparent"
          style={{
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
};
