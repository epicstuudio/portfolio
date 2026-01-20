'use client';

import { motion } from 'framer-motion';
import { Sun, Snowflake, Leaf, Flower2, Moon, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { ThemeId, themes, themeOrder } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// MODE ICONS - Small, subtle icons for each mode
// ═══════════════════════════════════════════════════════════════════════════════

const modeIcons: Record<ThemeId, React.ReactNode> = {
    summer: <Sun className="w-3.5 h-3.5" />,
    winter: <Snowflake className="w-3.5 h-3.5" />,
    autumn: <Leaf className="w-3.5 h-3.5" />,
    spring: <Flower2 className="w-3.5 h-3.5" />,
    cosmos: <Sparkles className="w-3.5 h-3.5" />,
};

// ═══════════════════════════════════════════════════════════════════════════════
// MODE TABS COMPONENT - Segmented horizontal tabs for theme switching
// ═══════════════════════════════════════════════════════════════════════════════

interface ModeTabsProps {
    className?: string;
    showIcons?: boolean;
}

export function ModeTabs({ className, showIcons = true }: ModeTabsProps) {
    const { theme, setTheme } = useTheme();

    return (
        <div
            className={cn(
                'flex items-center gap-0.5 p-1 rounded-lg',
                'bg-muted/50 backdrop-blur-sm',
                className
            )}
            role="tablist"
            aria-label="Design perspective"
        >
            {themeOrder.map((themeId) => {
                const config = themes[themeId];
                const isActive = theme === themeId;

                return (
                    <motion.button
                        key={themeId}
                        onClick={() => setTheme(themeId)}
                        className={cn(
                            'relative flex items-center gap-1.5 px-3 py-1.5 rounded-md',
                            'text-xs font-medium whitespace-nowrap',
                            'transition-colors duration-150',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                            isActive
                                ? 'text-foreground'
                                : 'text-muted-foreground hover:text-foreground/80'
                        )}
                        whileHover={{ scale: isActive ? 1 : 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`${config.name} mode: ${config.description}`}
                    >
                        {/* Active Background */}
                        {isActive && (
                            <motion.div
                                layoutId="mode-tab-bg"
                                className="absolute inset-0 rounded-md bg-background shadow-sm border border-border/50"
                                transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                            />
                        )}

                        {/* Tab Content */}
                        <span className="relative z-10 flex items-center gap-1.5">
                            {showIcons && modeIcons[themeId]}
                            <span>{config.name}</span>
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// DARK MODE TOGGLE - Standalone toggle for dark/light mode
// ═══════════════════════════════════════════════════════════════════════════════

interface DarkModeToggleProps {
    className?: string;
}

export function DarkModeToggle({ className }: DarkModeToggleProps) {
    const { isDark, toggleDarkMode } = useTheme();

    return (
        <motion.button
            onClick={toggleDarkMode}
            className={cn(
                'flex items-center justify-center w-8 h-8 rounded-md',
                'bg-muted/50 backdrop-blur-sm',
                'text-muted-foreground hover:text-foreground',
                'transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
            >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.div>
        </motion.button>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export { modeIcons };
