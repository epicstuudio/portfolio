interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function PageContainer({ children, className = '' }: PageContainerProps) {
    return (
        <div className={`max-w-[1280px] mx-auto px-8 border-l border-r border-border ${className}`}>
            {children}
        </div>
    );
}
