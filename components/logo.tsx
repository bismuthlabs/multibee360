"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative h-10 flex items-center">
        {/* Logo Mark */}
        <div className="mr-3 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-12 h-12"
          >
            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border-2 border-primary"></div>

            {/* 360 Arc */}
            <svg viewBox="0 0 48 48" className="absolute inset-0">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="#EA1826"
                strokeWidth="3"
                strokeDasharray="94.2 31.4"
                strokeLinecap="round"
                transform="rotate(-90, 24, 24)"
              />
            </svg>

            {/* Roof Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 10.25V20H21V10.25L12 3L3 10.25Z"
                  stroke="#102039"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 20V14H15V20"
                  stroke="#102039"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Bee Icon */}
            <div className="absolute top-0 right-0 bg-white rounded-full w-5 h-5 flex items-center justify-center border border-primary">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 4L14 2H18L20 4L18 6H14L12 4Z"
                  fill="#EA1826"
                  stroke="#EA1826"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 8L12 5L15 8L12 11L9 8Z"
                  fill="#EA1826"
                  stroke="#EA1826"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L7 16M20 19L17 16M12 11V19M12 19L8 21M12 19L16 21"
                  stroke="#102039"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Logo Text */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-bold text-2xl tracking-tight"
          >
            <span className="text-primary">multi-bee</span>
            <span className="text-white ml-1">360</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white text-xs tracking-widest font-medium mt-0.5"
          >
            ROOFING SYSTEM
          </motion.div>
        </div>
      </div>
    </div>
  )
}

