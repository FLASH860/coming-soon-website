import bgGreen from './assets/bg-green.png'
import shieldGreen from './assets/shield-green.png'
import shieldResidential from './assets/shield-residential.png'
import shieldUrban from './assets/shield-urban.png'

// Single locked green palette for the whole site.
export const GREEN = {
  accent: '#1f9d6b',
  accent2: '#0f6b48',
  accentSoft: 'rgba(31, 157, 107, 0.12)',
  glow: 'rgba(31, 157, 107, 0.35)',
}

// Background image used behind the page.
export const BG_IMAGE = bgGreen

// Shield hero images that auto-rotate every 4 seconds.
export interface ShieldSlide {
  id: string
  src: string
  alt: string
}

export const SHIELD_SLIDES: ShieldSlide[] = [
  {
    id: 'green',
    src: shieldGreen,
    alt: 'Property Wallet shield standing in lush green countryside',
  },
  {
    id: 'residential',
    src: shieldResidential,
    alt: 'Property Wallet shield in a peaceful residential neighborhood',
  },
  {
    id: 'urban',
    src: shieldUrban,
    alt: 'Property Wallet shield in a modern urban commercial district',
  },
]
