'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

function PasswordForm() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/case-studies/field-pilot';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/verify-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            if (response.ok) {
                router.push(redirectTo);
            } else {
                const data = await response.json();
                setError(data.error || 'Incorrect password');
            }
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
            <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    autoFocus
                    required
                />
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-500 text-sm"
                >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{error}</span>
                </motion.div>
            )}

            <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isLoading ? (
                    <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                    <>
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}

export default function PasswordPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md text-center"
            >
                {/* Icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
                    <Lock className="w-8 h-8 text-foreground" />
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-foreground mb-2">
                    Protected Content
                </h1>
                <p className="text-muted-foreground mb-8">
                    This case study is password protected. Please enter the password to continue.
                </p>

                {/* Form */}
                <div className="flex justify-center">
                    <Suspense fallback={<div className="w-full max-w-sm h-32 bg-muted animate-pulse rounded-xl" />}>
                        <PasswordForm />
                    </Suspense>
                </div>

                {/* Back link */}
                <a
                    href="/"
                    className="inline-block mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    ← Back to home
                </a>
            </motion.div>
        </div>
    );
}
