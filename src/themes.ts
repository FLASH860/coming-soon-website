import bgGreen from './assets/bg-green.png'
import bgUrban from './assets/bg-urban.png'
import bgResidential from './assets/bg-residential.png'

export interface Theme {
  id: string
  name: string
  tagline: string
  image: string
  accent: string
  accent2: string
  accentSoft: string
  glow: string
}

export const THEMES: Theme[] = [
  {
    id: 'green',
    name: 'Green Legacy',
    tagline: 'Family wealth, rooted for generations',
    image: bgGreen,
    accent: '#1f9d6b',
    accent2: '#0f6b48',
    accentSoft: 'rgba(31, 157, 107, 0.12)',
    glow: 'rgba(31, 157, 107, 0.35)',
  },
  {
    id: 'urban',
    name: 'Urban Commercial',
    tagline: 'Commercial assets, precisely tracked',
    image: bgUrban,
    accent: '#1f86c8',
    accent2: '#0f5586',
    accentSoft: 'rgba(31, 134, 200, 0.12)',
    glow: 'rgba(31, 134, 200, 0.35)',
  },
  {
    id: 'residential',
    name: 'Peaceful Residential',
    tagline: 'Homes passed down with care',
    image: bgResidential,
    accent: '#c79237',
    accent2: '#9a6c1e',
    accentSoft: 'rgba(199, 146, 55, 0.14)',
    glow: 'rgba(199, 146, 55, 0.38)',
  },
]
