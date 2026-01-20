'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Snowflake, Leaf, Flower2, Moon, ChevronDown, Check, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { ThemeId, themes, themeOrder } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// THEME ICONS
// ═══════════════════════════════════════════════════════════════════════════════

const themeIcons: Record<ThemeId, React.ReactNode> = {
    summer: <Sun className="w-4 h-4" />,
    winter: <Snowflake className="w-4 h-4" />,
    autumn: <Leaf className="w-4 h-4" />,
    spring: <Flower2 className="w-4 h-4" />,
    cosmos: <Sparkles className="w-4 h-4" />,
};

// ═══════════════════════════════════════════════════════════════════════════════
// THEME SWITCHER COMPONENT (Dropdown Style)
// ═══════════════════════════════════════════════════════════════════════════════

interface ThemeSwitcherProps {
    className?: string;
    showLabels?: boolean;
    variant?: 'dropdown' | 'pills' | 'minimal';
}

export function ThemeSwitcher({
    className,
    showLabels = true,
    variant = 'dropdown'
}: ThemeSwitcherProps) {
    const { theme, setTheme, isDark, toggleDarkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close on escape key
    useEffect(() => {
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') setIsOpen(false);
        }
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, []);

    if (variant === 'pills') {
        return <PillsSwitcher className={className} showLabels={showLabels} />;
    }

    if (variant === 'minimal') {
        return <MinimalSwitcher className={className} />;
    }

    const currentTheme = themes[theme];

    return (
        <div className={cn('flex items-center gap-2', className)}>
            {/* Theme Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <motion.button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-lg',
                        'bg-secondary/50 backdrop-blur-sm border border-border/50',
                        'text-foreground hover:bg-secondary',
                        'transition-colors duration-200',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Select theme"
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span className="flex items-center gap-2">
                        {themeIcons[theme]}
                        <span className="text-sm font-medium">{currentTheme.name}</span>
                    </span>
                    <ChevronDown
                        className={cn(
                            'w-4 h-4 text-muted-foreground transition-transform duration-200',
                            isOpen && 'rotate-180'
                        )}
                    />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className={cn(
                                'absolute top-full left-0 mt-2 w-48 z-50',
                                'bg-popover backdrop-blur-md border border-border rounded-xl',
                                'shadow-lg overflow-hidden'
                            )}
                            role="listbox"
                        >
                            {themeOrder.map((themeId) => {
                                const config = themes[themeId];
                                const isActive = theme === themeId;

                                return (
                                    <motion.button
                                        key={themeId}
                                        onClick={() => {
                                            setTheme(themeId);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            'w-full flex items-center gap-3 px-4 py-3',
                                            'text-left text-sm transition-colors',
                                            'hover:bg-accent',
                                            isActive && 'bg-accent/50'
                                        )}
                                        whileHover={{ x: 4 }}
                                        role="option"
                                        aria-selected={isActive}
                                    >
                                        <span className={cn(
                                            'flex items-center justify-center w-8 h-8 rounded-lg',
                                            isActive ? 'bg-primary text-primary-foreground' : 'bg-muted'
                                        )}>
                                            {themeIcons[themeId]}
                                        </span>
                                        <div className="flex-1">
                                            <div className="font-medium">{config.name}</div>
                                            <div className="text-xs text-muted-foreground">{config.description}</div>
                                        </div>
                                        {isActive && (
                                            <Check className="w-4 h-4 text-primary" />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Dark Mode Toggle */}
            <motion.button
                onClick={toggleDarkMode}
                className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-lg',
                    'bg-secondary/50 backdrop-blur-sm border border-border/50',
                    'text-muted-foreground hover:text-foreground hover:bg-secondary',
                    'transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDark ? 'dark' : 'light'}
                        initial={{ y: -10, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 10, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PILLS SWITCHER (Original Style - kept for flexibility)
// ═══════════════════════════════════════════════════════════════════════════════

function PillsSwitcher({ className, showLabels = false }: { className?: string; showLabels?: boolean }) {
    const { theme, setTheme, isDark, toggleDarkMode } = useTheme();

    return (
        <div className={cn('flex items-center gap-2', className)}>
            <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50">
                {themeOrder.map((themeId) => {
                    const config = themes[themeId];
                    const isActive = theme === themeId;

                    return (
                        <motion.button
                            key={themeId}
                            onClick={() => setTheme(themeId)}
                            className={cn(
                                'relative flex items-center gap-1.5 px-3 py-1.5 rounded-full',
                                'text-sm font-medium transition-colors duration-200',
                                'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                isActive
                                    ? 'text-primary-foreground'
                                    : 'text-muted-foreground hover:text-foreground'
                            )}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            aria-label={`Switch to ${config.name} theme`}
                            aria-pressed={isActive}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="theme-pill-bg"
                                    className="absolute inset-0 rounded-full bg-primary"
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-1.5">
                                {themeIcons[themeId]}
                                {showLabels && <span>{config.name}</span>}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            <motion.button
                onClick={toggleDarkMode}
                className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-full',
                    'bg-secondary/50 backdrop-blur-sm border border-border/50',
                    'text-muted-foreground hover:text-foreground',
                    'transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDark ? 'dark' : 'light'}
                        initial={{ y: -10, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 10, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MINIMAL SWITCHER (Compact version)
// ═══════════════════════════════════════════════════════════════════════════════

function MinimalSwitcher({ className }: { className?: string }) {
    const { theme, setTheme, isDark, toggleDarkMode, availableThemes } = useTheme();

    const cycleTheme = () => {
        const currentIndex = availableThemes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % availableThemes.length;
        setTheme(availableThemes[nextIndex]);
    };

    return (
        <div className={cn('flex items-center gap-1', className)}>
            <motion.button
                onClick={cycleTheme}
                className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-full',
                    'bg-secondary/50 backdrop-blur-sm border border-border/50',
                    'text-foreground hover:bg-secondary',
                    'transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                )}
                whileHover={{ scale: 1.05, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Current theme: ${themes[theme].name}. Click to cycle themes.`}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={theme}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: 'spring', bounce: 0.5, duration: 0.4 }}
                    >
                        {themeIcons[theme]}
                    </motion.div>
                </AnimatePresence>
            </motion.button>

            <motion.button
                onClick={toggleDarkMode}
                className={cn(
                    'flex items-center justify-center w-9 h-9 rounded-full',
                    'bg-secondary/50 backdrop-blur-sm border border-border/50',
                    'text-foreground hover:bg-secondary',
                    'transition-colors duration-200',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDark ? 'dark' : 'light'}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.div>
                </AnimatePresence>
            </motion.button>
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export { themeIcons };
