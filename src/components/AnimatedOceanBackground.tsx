import { motion } from "motion/react";

export const AnimatedOceanBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] via-[#1e2749] to-[#0a1128]" />

      {/* Animated Wave Layers */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <defs>
          <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#5dd9d9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#4a90e2" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5dd9d9" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#4a90e2" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#5dd9d9" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#5dd9d9" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#4a90e2" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Wave Layer 1 - Front */}
        <motion.path
          d="M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-1)"
          initial={{ d: "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z" }}
          animate={{
            d: [
              "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
              "M0,420 C320,520 420,320 720,420 C1020,520 1120,320 1440,420 L1440,800 L0,800 Z",
              "M0,400 C320,300 420,500 720,400 C1020,300 1120,500 1440,400 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wave Layer 2 - Middle */}
        <motion.path
          d="M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-2)"
          initial={{ d: "M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z" }}
          animate={{
            d: [
              "M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z",
              "M0,480 C360,580 480,380 840,480 C1200,580 1320,380 1440,480 L1440,800 L0,800 Z",
              "M0,500 C360,400 480,600 840,500 C1200,400 1320,600 1440,500 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Wave Layer 3 - Back */}
        <motion.path
          d="M0,600 C400,500 560,700 960,600 C1360,500 1440,700 1440,600 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-3)"
          initial={{ d: "M0,600 C400,500 560,700 960,600 C1360,500 1440,700 1440,600 L1440,800 L0,800 Z" }}
          animate={{
            d: [
              "M0,600 C400,500 560,700 960,600 C1360,500 1440,700 1440,600 L1440,800 L0,800 Z",
              "M0,620 C400,720 560,520 960,620 C1360,720 1440,520 1440,620 L1440,800 L0,800 Z",
              "M0,600 C400,500 560,700 960,600 C1360,500 1440,700 1440,600 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#5dd9d9] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 via-[#0a1128]/60 to-[#0a1128]" />
    </div>
  );
};
