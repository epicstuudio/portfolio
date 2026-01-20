'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme, useReducedMotion } from './ThemeProvider';
import { zIndex } from '@/lib/design-tokens';
import { cn } from '@/lib/utils';

// ═══════════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════════

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    rotation?: number;
    drift?: number;
}

// ═══════════════════════════════════════════════════════════════════════════════
// WEATHER EFFECTS COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════

interface WeatherEffectsProps {
    className?: string;
    intensity?: 'low' | 'medium' | 'high';
}

export function WeatherEffects({
    className,
    intensity = 'medium'
}: WeatherEffectsProps) {
    const [mounted, setMounted] = useState(false);

    // Only run on client-side after hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // During SSR or before hydration, render nothing
    if (!mounted) {
        return null;
    }

    return <WeatherEffectsInner className={className} intensity={intensity} />;
}

// Inner component that uses hooks - only rendered after hydration
function WeatherEffectsInner({
    className,
    intensity = 'medium'
}: WeatherEffectsProps) {
    const { weather } = useTheme();
    const prefersReducedMotion = useReducedMotion();

    // Don't render any effects if user prefers reduced motion
    if (prefersReducedMotion || weather === 'clear') {
        return null;
    }

    const particleCount = {
        low: 20,
        medium: 40,
        high: 70,
    }[intensity];

    return (
        <div
            className={cn(
                'fixed inset-0 pointer-events-none overflow-hidden',
                className
            )}
            style={{ zIndex: zIndex.weatherEffects }}
            aria-hidden="true"
        >
            {weather === 'snow' && <SnowEffect count={particleCount} />}
            {weather === 'rain' && <RainEffect count={particleCount} />}
            {weather === 'leaves' && <LeavesEffect count={Math.floor(particleCount / 2)} />}
            {weather === 'fireflies' && <FirefliesEffect count={Math.floor(particleCount / 3)} />}
            {weather === 'stars' && <StarsEffect count={particleCount} />}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// SNOW EFFECT
// ═══════════════════════════════════════════════════════════════════════════════

function SnowEffect({ count }: { count: number }) {
    const particles = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * -100,
            size: Math.random() * 4 + 2,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.6 + 0.4,
            drift: Math.random() * 2 - 1,
        }))
        , [count]);

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${particle.x}%`,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                        filter: 'blur(0.5px)',
                    }}
                    initial={{ y: '-10vh' }}
                    animate={{
                        y: '110vh',
                        x: [0, particle.drift * 50, 0, particle.drift * -30, 0],
                    }}
                    transition={{
                        y: {
                            duration: 10 / particle.speed,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: particle.y / -10,
                        },
                        x: {
                            duration: 5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    }}
                />
            ))}
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// RAIN EFFECT
// ═══════════════════════════════════════════════════════════════════════════════

function RainEffect({ count }: { count: number }) {
    const particles = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * -50,
            size: Math.random() * 15 + 10,
            speed: Math.random() * 0.5 + 0.8,
            opacity: Math.random() * 0.3 + 0.2,
        }))
        , [count]);

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-sky-300/50 to-sky-400/30"
                    style={{
                        left: `${particle.x}%`,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                    initial={{ y: '-10vh' }}
                    animate={{ y: '110vh' }}
                    transition={{
                        duration: 1 / particle.speed,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: particle.y / -10,
                    }}
                />
            ))}
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FALLING LEAVES EFFECT
// ═══════════════════════════════════════════════════════════════════════════════

function LeavesEffect({ count }: { count: number }) {
    const particles = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * -100,
            size: Math.random() * 12 + 8,
            speed: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.4 + 0.6,
            rotation: Math.random() * 360,
            drift: Math.random() * 4 - 2,
        }))
        , [count]);

    const leafColors = ['#ea580c', '#b45309', '#dc2626', '#d97706', '#92400e'];

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute"
                    style={{
                        left: `${particle.x}%`,
                        width: particle.size,
                        height: particle.size * 0.7,
                        opacity: particle.opacity,
                        backgroundColor: leafColors[particle.id % leafColors.length],
                        borderRadius: '0 80% 0 80%',
                        transformOrigin: 'center',
                    }}
                    initial={{
                        y: '-10vh',
                        rotate: particle.rotation,
                    }}
                    animate={{
                        y: '110vh',
                        x: [0, particle.drift * 80, particle.drift * -60, particle.drift * 40, 0],
                        rotate: [
                            particle.rotation,
                            particle.rotation + 180,
                            particle.rotation + 90,
                            particle.rotation + 270,
                            particle.rotation + 360,
                        ],
                    }}
                    transition={{
                        y: {
                            duration: 12 / particle.speed,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: particle.y / -10,
                        },
                        x: {
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                        rotate: {
                            duration: 6,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                />
            ))}
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FIREFLIES EFFECT
// ═══════════════════════════════════════════════════════════════════════════════

function FirefliesEffect({ count }: { count: number }) {
    const particles = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.5,
        }))
        , [count]);

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: '#fbbf24',
                        boxShadow: `0 0 ${particle.size * 3}px ${particle.size}px rgba(251, 191, 36, 0.4)`,
                    }}
                    animate={{
                        opacity: [particle.opacity, particle.opacity * 0.2, particle.opacity, particle.opacity * 0.5, particle.opacity],
                        scale: [1, 1.2, 1, 0.8, 1],
                        x: [0, 20, -15, 25, 0],
                        y: [0, -30, 20, -10, 0],
                    }}
                    transition={{
                        duration: 4 + particle.speed,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: particle.id * 0.2,
                    }}
                />
            ))}
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// STARS EFFECT (Cosmos theme)
// ═══════════════════════════════════════════════════════════════════════════════

function StarsEffect({ count }: { count: number }) {
    const particles = useMemo(() =>
        Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.7 + 0.3,
            twinkleSpeed: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }))
        , [count]);

    // Star colors - white, blue-white, and subtle purple
    const starColors = ['#ffffff', '#e0e7ff', '#c4b5fd', '#a5b4fc', '#f8fafc'];

    return (
        <>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: starColors[particle.id % starColors.length],
                        boxShadow: `0 0 ${particle.size * 2}px ${particle.size * 0.5}px ${starColors[particle.id % starColors.length]}40`,
                    }}
                    animate={{
                        opacity: [particle.opacity, particle.opacity * 0.2, particle.opacity, particle.opacity * 0.4, particle.opacity],
                        scale: [1, 1.3, 1, 0.8, 1],
                    }}
                    transition={{
                        duration: particle.twinkleSpeed,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: particle.delay,
                    }}
                />
            ))}
            {/* Add a few shooting stars */}
            {Array.from({ length: 3 }, (_, i) => (
                <motion.div
                    key={`shooting-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 40}%`,
                        boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.6)',
                    }}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        x: [0, 100, 200],
                        y: [0, 50, 100],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 8 + i * 5,
                        delay: i * 4,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </>
    );
}

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORTS
// ═══════════════════════════════════════════════════════════════════════════════

export default WeatherEffects;
