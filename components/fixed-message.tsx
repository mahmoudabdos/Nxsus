'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function FixedMessage() {
  const [isVisible, setIsVisible] = React.useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          data-fixed-message
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-[100]"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
          }}
        >
          <div className="bg-[#8A2BE2] text-white px-4 py-3 shadow-lg">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between">
              <p className="text-sm md:text-base font-medium">
                🎉 Welcome to Nxsus AI - Transform your hiring process with intelligent automation
              </p>
              <button
                onClick={() => setIsVisible(false)}
                className="ml-4 p-1 hover:bg-white/20 rounded transition-colors cursor-pointer"
                aria-label="Close message"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

