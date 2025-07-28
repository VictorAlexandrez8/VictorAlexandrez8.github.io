module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1C1C3C", // Premium dark background
        secondary: "#2A2A5C", // Section separation
        accent: "#FFD700", // Conversion moments - gold
        
        // Background Colors
        background: "#0F0F1F", // Deep canvas
        surface: "#252547", // Card backgrounds
        
        // Text Colors
        'text-primary': "#FFFFFF", // Maximum contrast
        'text-secondary': "#B8B8D4", // Supporting text
        
        // Status Colors
        success: "#00FF88", // Positive testimonials
        warning: "#FF6B35", // Urgency elements
        error: "#FF4757", // Form validation
        
        // Neon Blue Accent
        'neon-blue': "#00D4FF", // Interactive elements
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      fontWeight: {
        'orbitron-normal': '400',
        'orbitron-bold': '700',
        'orbitron-black': '900',
        'inter-light': '300',
        'inter-normal': '400',
        'inter-medium': '500',
        'rajdhani-semibold': '600',
        'rajdhani-bold': '700',
        'space-mono-normal': '400',
        'space-mono-bold': '700',
      },
      boxShadow: {
        'cta': '0 8px 32px rgba(255, 215, 0, 0.15)',
        'cta-hover': '0 12px 40px rgba(255, 215, 0, 0.25)',
        'testimonial': '0 4px 16px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-gold': 'pulse-gold 2s infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': {
            boxShadow: '0 8px 32px rgba(255, 215, 0, 0.15)',
          },
          '50%': {
            boxShadow: '0 8px 32px rgba(255, 215, 0, 0.3)',
          },
        },
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
    },
  },
  plugins: [],
}