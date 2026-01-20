'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/theme';
import { WeatherEffects } from '@/components/theme';

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider autoDetectSeason>
            <WeatherEffects intensity="medium" />
            {children}
        </ThemeProvider>
    );
}
