import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    size: 'lg' | 'md' | 'sm' | 'tn';
    variation?: 'primary' | 'secondary' | 'tertiary';
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullSize?: boolean;
    isLoading?: boolean;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
