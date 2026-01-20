'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { ThemeId, WeatherType, themes, themeOrder, getCurrentSeason, getSeasonByLocation } from '@/lib/design-tokens';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

interface ThemeContextValue {
    // Current theme state
    theme: ThemeId;
    weather: WeatherType;
    isDark: boolean;

    // Theme actions
    setTheme: (theme: ThemeId) => void;
    setWeather: (weather: WeatherType) => void;
    toggleDarkMode: () => void;

    // Computed values
    themeConfig: typeof themes[ThemeId];
    availableThemes: typeof themeOrder;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTEXT
// ═══════════════════════════════════════════════════════════════════════════════

const ThemeContext = createContext<ThemeContextValue | null>(null);

// ═══════════════════════════════════════════════════════════════════════════════
// STORAGE KEYS
// ═══════════════════════════════════════════════════════════════════════════════

const STORAGE_KEYS = {
    theme: 'portfolio-theme',
    weather: 'portfolio-weather',
    darkMode: 'portfolio-dark-mode',
} as const;

// ═══════════════════════════════════════════════════════════════════════════════
// PROVIDER
// ═══════════════════════════════════════════════════════════════════════════════

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeId;
    autoDetectSeason?: boolean;
    useGeolocation?: boolean; // NEW: Use geolocation for hemisphere detection
}

export function ThemeProvider({
    children,
    defaultTheme,
    autoDetectSeason = true,
    useGeolocation = true, // Enable by default
}: ThemeProviderProps) {
    // Initialize state with defaults (will be hydrated from localStorage)
    const [theme, setThemeState] = useState<ThemeId>(() => {
        return defaultTheme || 'summer';
    });

    const [weather, setWeatherState] = useState<WeatherType>(() => {
        return themes[theme]?.defaultWeather || 'clear';
    });

    const [isDark, setIsDark] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    // ─────────────────────────────────────────────────────────────────────────────
    // HYDRATION - Load saved preferences from localStorage + geolocation
    // ─────────────────────────────────────────────────────────────────────────────
    useEffect(() => {
        async function hydrateTheme() {
            const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) as ThemeId | null;
            const savedWeather = localStorage.getItem(STORAGE_KEYS.weather) as WeatherType | null;
            const savedDarkMode = localStorage.getItem(STORAGE_KEYS.darkMode);

            // Determine initial theme
            let initialTheme: ThemeId;
            if (savedTheme && themeOrder.includes(savedTheme)) {
                // User has a saved preference - use it
                initialTheme = savedTheme;
            } else if (autoDetectSeason) {
                // No saved preference - detect based on location/season
                if (useGeolocation) {
                    // Try to get location for hemisphere-aware season
                    initialTheme = await getSeasonByLocation();
                } else {
                    // Fall back to simple date-based detection
                    initialTheme = getCurrentSeason();
                }
            } else {
                initialTheme = defaultTheme || 'summer';
            }

            setThemeState(initialTheme);

            // Set weather (use saved or theme default)
            const themeConfig = themes[initialTheme];
            if (savedWeather && themeConfig.availableWeathers.includes(savedWeather)) {
                setWeatherState(savedWeather);
            } else {
                setWeatherState(themeConfig.defaultWeather);
            }

            // Set dark mode (check system preference if not saved)
            if (savedDarkMode !== null) {
                setIsDark(savedDarkMode === 'true');
            } else {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setIsDark(prefersDark);
            }

            setIsHydrated(true);
        }

        hydrateTheme();
    }, [autoDetectSeason, defaultTheme, useGeolocation]);

    // ─────────────────────────────────────────────────────────────────────────────
    // APPLY THEME TO DOM
    // ─────────────────────────────────────────────────────────────────────────────
    useEffect(() => {
        if (!isHydrated) return;

        const root = document.documentElement;

        // Set theme data attribute
        root.setAttribute('data-theme', theme);

        // Set dark mode class
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        // Set weather data attribute (for CSS-based effects)
        root.setAttribute('data-weather', weather);

        // Persist to localStorage
        localStorage.setItem(STORAGE_KEYS.theme, theme);
        localStorage.setItem(STORAGE_KEYS.weather, weather);
        localStorage.setItem(STORAGE_KEYS.darkMode, String(isDark));
    }, [theme, weather, isDark, isHydrated]);

    // ─────────────────────────────────────────────────────────────────────────────
    // THEME ACTIONS
    // ─────────────────────────────────────────────────────────────────────────────
    const setTheme = useCallback((newTheme: ThemeId) => {
        setThemeState(newTheme);

        // Reset weather to new theme's default
        const newThemeConfig = themes[newTheme];
        setWeatherState(newThemeConfig.defaultWeather);
    }, []);

    const setWeather = useCallback((newWeather: WeatherType) => {
        // Validate weather is available for current theme
        const themeConfig = themes[theme];
        if (themeConfig.availableWeathers.includes(newWeather)) {
            setWeatherState(newWeather);
        }
    }, [theme]);

    const toggleDarkMode = useCallback(() => {
        setIsDark((prev) => !prev);
    }, []);

    // ─────────────────────────────────────────────────────────────────────────────
    // CONTEXT VALUE
    // ─────────────────────────────────────────────────────────────────────────────
    const value: ThemeContextValue = {
        theme,
        weather,
        isDark,
        setTheme,
        setWeather,
        toggleDarkMode,
        themeConfig: themes[theme],
        availableThemes: themeOrder,
    };

    // Prevent flash of wrong theme during hydration
    if (!isHydrated) {
        return (
            <div style={{ visibility: 'hidden' }}>
                {children}
            </div>
        );
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOOK
// ═══════════════════════════════════════════════════════════════════════════════

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);

    // Return safe defaults during SSR or before hydration
    if (!context) {
        const defaultTheme = 'summer' as ThemeId;
        return {
            theme: defaultTheme,
            weather: 'clear' as WeatherType,
            isDark: false,
            setTheme: () => { },
            setWeather: () => { },
            toggleDarkMode: () => { },
            themeConfig: themes[defaultTheme],
            availableThemes: themeOrder,
        };
    }

    return context;
}

// ═══════════════════════════════════════════════════════════════════════════════
// UTILITY HOOKS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Get the current theme's copy for dynamic text
 */
export function useThemeCopy() {
    const { themeConfig } = useTheme();
    return themeConfig.copy;
}

/**
 * Check if reduced motion is preferred
 */
export function useReducedMotion(): boolean {
    const [prefersReduced, setPrefersReduced] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReduced(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => {
            setPrefersReduced(e.matches);
        };

        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return prefersReduced;
}
