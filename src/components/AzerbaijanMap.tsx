import { motion } from "motion/react";

interface Location {
  city: string;
  country: string;
  x: number;
  y: number;
}

interface AzerbaijanMapProps {
  locations: Location[];
}

export const AzerbaijanMap = ({ locations }: AzerbaijanMapProps) => {
  return (
    <svg
      viewBox="0 0 800 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="azerbaijan-map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#5dd9d9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#4a90e2" stopOpacity="0.4" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Realistic Azerbaijan Shape - "Eagle" contour */}
      <motion.path
        d="M 180 290 
           Q 185 275 195 262 
           L 210 250 Q 230 242 255 238 
           L 285 235 Q 315 233 345 233 
           L 375 234 Q 405 236 435 240 
           L 460 246 Q 485 253 505 264 
           L 520 275 Q 532 287 540 300 
           L 546 315 Q 550 332 552 350 
           L 553 370 Q 552 388 548 405 
           L 542 420 Q 533 435 520 447 
           L 505 458 Q 485 468 460 475 
           L 435 480 Q 405 484 375 485 
           L 345 485 Q 315 484 285 481 
           L 255 476 Q 230 470 210 460 
           L 195 450 Q 185 438 178 423 
           L 172 406 Q 168 388 167 370 
           L 166 350 Q 167 332 170 315 
           L 175 300 Q 180 290 180 290 Z"
        fill="url(#azerbaijan-map-gradient)"
        stroke="#5dd9d9"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Caspian Sea coastline highlight (Eastern border) */}
      <motion.path
        d="M 520 275 Q 532 287 540 300 L 546 315 Q 550 332 552 350 
           L 553 370 Q 552 388 548 405 L 542 420 Q 533 435 520 447"
        stroke="#5dd9d9"
        strokeWidth="3"
        fill="none"
        strokeDasharray="8,4"
        opacity="0.7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />

      {/* Nakhchivan exclave (small separate region) */}
      <motion.path
        d="M 150 380 L 170 370 L 185 368 L 195 370 L 200 378 
           L 198 388 L 190 395 L 175 398 L 160 395 L 150 388 Z"
        fill="url(#azerbaijan-map-gradient)"
        stroke="#5dd9d9"
        strokeWidth="1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      />

      {/* Location Markers */}
      {locations.map((location, index) => {
        const xPos = (location.x / 100) * 800;
        const yPos = (location.y / 100) * 600;

        return (
          <g key={index}>
            {/* Pulsing Circle */}
            <motion.circle
              cx={xPos}
              cy={yPos}
              r="20"
              fill="none"
              stroke="#5dd9d9"
              strokeWidth="2"
              opacity="0.3"
              animate={{
                r: [20, 30, 20],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />

            {/* Main Marker */}
            <motion.circle
              cx={xPos}
              cy={yPos}
              r="6"
              fill="#5dd9d9"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.2, type: "spring" }}
            />

            {/* Location Label */}
            <motion.g
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2 }}
            >
              <rect
                x={xPos - 40}
                y={yPos - 45}
                width="80"
                height="30"
                rx="5"
                fill="#1e2749"
                opacity="0.95"
                stroke="#5dd9d9"
                strokeWidth="1"
              />
              <text
                x={xPos}
                y={yPos - 32}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                {location.city}
              </text>
              <text
                x={xPos}
                y={yPos - 20}
                textAnchor="middle"
                fill="#8b9dc3"
                fontSize="9"
              >
                {location.country}
              </text>
            </motion.g>
          </g>
        );
      })}

      {/* Decorative Grid */}
      <g opacity="0.05">
        {[...Array(20)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="600"
            stroke="white"
            strokeWidth="1"
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 40}
            x2="800"
            y2={i * 40}
            stroke="white"
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
};
