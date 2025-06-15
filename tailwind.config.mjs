/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Royal Yellow Theme
        'royal-gold': '#FFD700',
        'golden-yellow': '#FFC107',
        'amber-glow': '#FFAB00',
        'honey-yellow': '#FFB300',
        'cream-luxury': '#FFF8E1',
        'champagne': '#F7E7CE',
        
        // Supporting Colors
        'forest-green': '#1B5E20',
        'sage-green': '#4CAF50',
        'mint-fresh': '#81C784',
        'earth-brown': '#5D4037',
        'warm-beige': '#F5F5DC',
        'pearl-white': '#FAFAFA',
        'charcoal': '#2E2E2E',
        
        // Organic gradients
        'sunrise-start': '#FFD54F',
        'sunrise-end': '#FF8F00',
        'nature-start': '#4CAF50',
        'nature-end': '#1B5E20',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Lato', 'Inter', 'system-ui', 'sans-serif'],
        'elegant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 15px #FFD700' },
          '100%': { boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'golden-gradient': 'linear-gradient(135deg, #FFD700 0%, #FFC107 50%, #FF8F00 100%)',
        'nature-gradient': 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 50%, #1B5E20 100%)',
        'luxury-gradient': 'linear-gradient(135deg, #FFF8E1 0%, #FFD700 100%)',
        'organic-texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFD700\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      boxShadow: {
        'golden': '0 4px 20px rgba(255, 215, 0, 0.3)',
        'luxury': '0 8px 32px rgba(255, 215, 0, 0.2)',
        'royal': '0 12px 40px rgba(255, 215, 0, 0.4)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}