/**
 * Design Tokens - TypeScript exports for use in components
 * These mirror the CSS custom properties for use in JS/React contexts
 */

// ═══════════════════════════════════════════════════════════════════════════════
// THEME TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type ThemeId = 'summer' | 'winter' | 'autumn' | 'spring' | 'cosmos';
export type WeatherType = 'clear' | 'rain' | 'snow' | 'leaves' | 'fireflies' | 'stars';

export interface ThemeCopy {
  heroTitle: string;
  heroSubtitle: string;
  tagline: string;
  ctaText: string;
  greeting: string;
}

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  emoji: string;
  description: string;
  defaultWeather: WeatherType;
  availableWeathers: WeatherType[];
  copy: ThemeCopy;
}

// ═══════════════════════════════════════════════════════════════════════════════
// THEME CONFIGURATIONS
// ═══════════════════════════════════════════════════════════════════════════════

export const themes: Record<ThemeId, ThemeConfig> = {
  summer: {
    id: 'summer',
    name: 'Core',
    emoji: '☀️',
    description: 'Clear, considered, human',
    defaultWeather: 'fireflies',
    availableWeathers: ['clear', 'fireflies'],
    copy: {
      heroTitle: 'I design digital products by bringing clarity to complexity.',
      heroSubtitle: 'My work focuses on structure, flow, and the decisions behind the interface. I help teams move from uncertainty to direction, and from ideas to products people can rely on.',
      tagline: 'Clear. Considered. Human.',
      ctaText: 'View My Work',
      greeting: 'Hello',
    },
  },
  winter: {
    id: 'winter',
    name: 'Craft',
    emoji: '❄️',
    description: 'Quality, systems, higher standards',
    defaultWeather: 'snow',
    availableWeathers: ['clear', 'snow'],
    copy: {
      heroTitle: 'Quality comes from shared understanding.',
      heroSubtitle: 'I care deeply about craft, consistency, and the systems behind the work. I bring a strong structural mindset, share context early, and help designers develop confidence in both their thinking and execution.',
      tagline: 'Calm process. Higher standards.',
      ctaText: 'Explore Projects',
      greeting: 'Welcome',
    },
  },
  autumn: {
    id: 'autumn',
    name: 'Experience',
    emoji: '🍂',
    description: 'Steady judgment, mature perspective',
    defaultWeather: 'leaves',
    availableWeathers: ['clear', 'leaves', 'rain'],
    copy: {
      heroTitle: 'A senior product designer with steady judgment.',
      heroSubtitle: 'With over eight years of experience, I\'ve worked across different teams and problem spaces, guiding products from early ambiguity through to delivery. I bring perspective, consistency, and care to both the work and the people around it.',
      tagline: 'Comfortable in senior and lead roles.',
      ctaText: 'See My Journey',
      greeting: 'Gather around',
    },
  },
  spring: {
    id: 'spring',
    name: 'Partnership',
    emoji: '🌸',
    description: 'Aligned teams, better decisions',
    defaultWeather: 'clear',
    availableWeathers: ['clear', 'rain'],
    copy: {
      heroTitle: 'Design that strengthens product thinking.',
      heroSubtitle: 'I partner closely with product managers to clarify problems early, surface trade-offs, and keep teams aligned as priorities evolve. I use design and AI as tools to explore options thoughtfully, without losing focus on users or outcomes.',
      tagline: 'Aligned teams. Better decisions.',
      ctaText: 'Let\'s Collaborate',
      greeting: 'New beginnings await',
    },
  },
  cosmos: {
    id: 'cosmos',
    name: 'Reflection',
    emoji: '🌌',
    description: 'Quiet focus, lasting value',
    defaultWeather: 'stars',
    availableWeathers: ['clear', 'stars'],
    copy: {
      heroTitle: 'Space to think before moving forward.',
      heroSubtitle: 'This mode is about stepping back when needed — making room for clearer thinking, better questions, and more durable decisions. It values intent over output, and long-term clarity over short-term speed.',
      tagline: 'Quiet focus. Lasting value.',
      ctaText: 'Explore Thoughtfully',
      greeting: 'Welcome, space traveler',
    },
  },
};

export const themeOrder: ThemeId[] = ['summer', 'winter', 'autumn', 'spring', 'cosmos'];

// ═══════════════════════════════════════════════════════════════════════════════
// SPACING TOKENS (for JS usage)
// ═══════════════════════════════════════════════════════════════════════════════

export const spacing = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// BREAKPOINTS
// ═══════════════════════════════════════════════════════════════════════════════

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// ANIMATION DURATIONS (for Framer Motion)
// ═══════════════════════════════════════════════════════════════════════════════

export const durations = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  theme: 0.5,
} as const;

export const easings = {
  default: [0.4, 0, 0.2, 1],
  in: [0.4, 0, 1, 1],
  out: [0, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
  spring: [0.175, 0.885, 0.32, 1.275],
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// Z-INDEX SCALE
// ═══════════════════════════════════════════════════════════════════════════════

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
  weatherEffects: 50,
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Get CSS variable value
 */
export function getCSSVar(name: string): string {
  if (typeof window === 'undefined') return '';
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/**
 * Set CSS variable value
 */
export function setCSSVar(name: string, value: string): void {
  if (typeof window === 'undefined') return;
  document.documentElement.style.setProperty(name, value);
}

/**
 * Get current season based on date (Northern hemisphere default)
 */
export function getCurrentSeason(isSouthernHemisphere: boolean = false): ThemeId {
  const month = new Date().getMonth();

  // Northern hemisphere seasons
  let season: ThemeId;
  if (month >= 2 && month <= 4) season = 'spring';
  else if (month >= 5 && month <= 7) season = 'summer';
  else if (month >= 8 && month <= 10) season = 'autumn';
  else season = 'winter';

  // Flip seasons for southern hemisphere
  if (isSouthernHemisphere) {
    const flipMap: Record<ThemeId, ThemeId> = {
      summer: 'winter',
      winter: 'summer',
      spring: 'autumn',
      autumn: 'spring',
    };
    season = flipMap[season];
  }

  return season;
}

/**
 * Get season based on user's location using geolocation
 * Returns a promise that resolves to the appropriate season
 */
export async function getSeasonByLocation(): Promise<ThemeId> {
  return new Promise((resolve) => {
    // Check if geolocation is available
    if (typeof window === 'undefined' || !navigator.geolocation) {
      resolve(getCurrentSeason(false));
      return;
    }

    // Set a timeout in case geolocation takes too long
    const timeout = setTimeout(() => {
      resolve(getCurrentSeason(false));
    }, 3000);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        clearTimeout(timeout);
        const latitude = position.coords.latitude;
        // Southern hemisphere is below the equator (negative latitude)
        const isSouthernHemisphere = latitude < 0;
        resolve(getCurrentSeason(isSouthernHemisphere));
      },
      () => {
        // On error (user denied, etc), fall back to northern hemisphere
        clearTimeout(timeout);
        resolve(getCurrentSeason(false));
      },
      { timeout: 3000, maximumAge: 86400000 } // Cache for 24 hours
    );
  });
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
