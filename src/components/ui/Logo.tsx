'use client';

import { useTheme } from '@/components/theme';

interface LogoProps {
    size?: number;
    className?: string;
}

export function Logo({ size = 32, className = '' }: LogoProps) {
    const { themeConfig } = useTheme();

    // Use theme accent color for the logo, fallback to default
    const bgColor = 'currentColor';
    const fgColor = themeConfig?.id === 'cosmos' ? '#111111' : 'var(--background)';

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_logo)">
                <path
                    d="M15.9884 31.9999C24.8174 31.9999 31.9748 24.8472 31.9748 16.0239C31.9748 7.20056 24.8174 0.0478516 15.9884 0.0478516C7.15931 0.0478516 0.00195312 7.20056 0.00195312 16.0239C0.00195312 24.8472 7.15931 31.9999 15.9884 31.9999Z"
                    fill={bgColor}
                />
                <path
                    d="M15.8133 3.26074V6.73848H14.4365V25.7981H14.4349V28.6978C8.52534 27.9807 3.86054 23.2318 3.27734 17.2852H6.17094C6.59094 20.5847 8.63734 23.3773 11.4821 24.8331V21.2962C10.2973 20.2841 9.45814 18.8802 9.16614 17.2852H12.5581V14.7269H9.17254C9.47174 13.1471 10.3069 11.7576 11.4821 10.7535V7.21737C8.64854 8.66763 6.60694 11.4434 6.17654 14.7269H3.28054C3.92614 8.34384 9.27654 3.34948 15.8133 3.26074Z"
                    fill={fgColor}
                />
                <path
                    d="M28.7005 17.2852C28.0741 23.6714 22.7397 28.677 16.2109 28.7889V25.3111H17.6341V17.2852H17.6445V3.36621C23.4933 4.12332 28.1013 8.83226 28.6973 14.7268H25.8013C25.3677 11.4194 23.2989 8.62679 20.4325 7.18533V10.699C21.6413 11.7072 22.5005 13.1191 22.8045 14.7268H19.5229V17.2852H22.8117C22.5149 18.9081 21.6509 20.3344 20.4325 21.3505V24.8658C23.3101 23.4188 25.3837 20.6094 25.8069 17.2852H28.7005Z"
                    fill={fgColor}
                />
            </g>
            <defs>
                <clipPath id="clip0_logo">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

// Static version for use before theme is loaded (prevents hydration issues)
export function LogoStatic({ size = 32, className = '' }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g clipPath="url(#clip0_logo_static)">
                <path
                    d="M15.9884 31.9999C24.8174 31.9999 31.9748 24.8472 31.9748 16.0239C31.9748 7.20056 24.8174 0.0478516 15.9884 0.0478516C7.15931 0.0478516 0.00195312 7.20056 0.00195312 16.0239C0.00195312 24.8472 7.15931 31.9999 15.9884 31.9999Z"
                    fill="currentColor"
                />
                <path
                    d="M15.8133 3.26074V6.73848H14.4365V25.7981H14.4349V28.6978C8.52534 27.9807 3.86054 23.2318 3.27734 17.2852H6.17094C6.59094 20.5847 8.63734 23.3773 11.4821 24.8331V21.2962C10.2973 20.2841 9.45814 18.8802 9.16614 17.2852H12.5581V14.7269H9.17254C9.47174 13.1471 10.3069 11.7576 11.4821 10.7535V7.21737C8.64854 8.66763 6.60694 11.4434 6.17654 14.7269H3.28054C3.92614 8.34384 9.27654 3.34948 15.8133 3.26074Z"
                    fill="var(--background)"
                />
                <path
                    d="M28.7005 17.2852C28.0741 23.6714 22.7397 28.677 16.2109 28.7889V25.3111H17.6341V17.2852H17.6445V3.36621C23.4933 4.12332 28.1013 8.83226 28.6973 14.7268H25.8013C25.3677 11.4194 23.2989 8.62679 20.4325 7.18533V10.699C21.6413 11.7072 22.5005 13.1191 22.8045 14.7268H19.5229V17.2852H22.8117C22.5149 18.9081 21.6509 20.3344 20.4325 21.3505V24.8658C23.3101 23.4188 25.3837 20.6094 25.8069 17.2852H28.7005Z"
                    fill="var(--background)"
                />
            </g>
            <defs>
                <clipPath id="clip0_logo_static">
                    <rect width="32" height="32" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
