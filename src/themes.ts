import bgGreen from './assets/bg-green.png'
import bgUrban from './assets/bg-urban.png'
import bgResidential from './assets/bg-residential.png'
import shieldGreen from './assets/shield-green.png'
import shieldResidential from './assets/shield-residential.png'
import shieldUrban from './assets/shield-urban.png'
import brandShield from './assets/property-wallet-shield.png'

// The Property Wallet brand emblem (metallic shield) used in the nav + footer.
export const BRAND_SHIELD = brandShield

// Three rotating visual themes for the coming-soon experience.
export interface Theme {
  id: string
  label: string
  /** Accent palette driven into CSS custom properties. */
  accent: string
  accent2: string
  accentSoft: string
  glow: string
  /** Full-bleed background image behind the page. */
  bg: string
  /** Hero shield image. */
  shield: string
  shieldAlt: string
}

export const THEMES: Theme[] = [
  {
    id: 'green',
    label: 'Land & Farmland',
    accent: '#1f9d6b',
    accent2: '#0f6b48',
    accentSoft: 'rgba(31, 157, 107, 0.12)',
    glow: 'rgba(31, 157, 107, 0.35)',
    bg: bgGreen,
    shield: shieldGreen,
    shieldAlt: 'Property Wallet shield standing in lush green countryside',
  },
  {
    id: 'urban',
    label: 'Commercial City',
    accent: '#2f7ad6',
    accent2: '#175a9e',
    accentSoft: 'rgba(47, 122, 214, 0.12)',
    glow: 'rgba(47, 122, 214, 0.32)',
    bg: bgUrban,
    shield: shieldUrban,
    shieldAlt: 'Property Wallet shield in a modern urban commercial district',
  },
  {
    id: 'residential',
    label: 'Residential Living',
    accent: '#c08a3e',
    accent2: '#8a5f22',
    accentSoft: 'rgba(192, 138, 62, 0.13)',
    glow: 'rgba(192, 138, 62, 0.32)',
    bg: bgResidential,
    shield: shieldResidential,
    shieldAlt: 'Property Wallet shield in a peaceful residential neighborhood',
  },
]
