import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}) => {
    const variants = {
        primary: 'bg-white text-black hover:bg-neutral-200 shadow-sm',
        secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md',
        outline: 'border border-white/10 text-white hover:border-white/20 hover:bg-white/5',
        ghost: 'text-gray-500 hover:text-white transition-colors',
    };

    const sizes = {
        sm: 'px-4 py-2 text-[10px] uppercase tracking-widest font-medium',
        md: 'px-6 py-3 text-xs uppercase tracking-widest font-medium',
        lg: 'px-10 py-4 text-sm uppercase tracking-[0.2em] font-medium',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-full transition-all duration-500 disabled:opacity-30 disabled:cursor-not-allowed',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
};
