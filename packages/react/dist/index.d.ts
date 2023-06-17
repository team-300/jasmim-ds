import React, { ButtonHTMLAttributes } from 'react';
import { IconProps } from 'react-icomoon';

interface AvatarProfileProps {
    size?: 'sm' | 'lg';
    avatarUrl?: string;
    avatarName?: string;
}
declare const AvatarProfile: React.FC<AvatarProfileProps>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    size: 'lg' | 'md' | 'sm';
    variation?: 'primary' | 'secondary' | 'tertiary';
    leftIcon?: string;
    rightIcon?: string;
    fullSize?: boolean;
    isLoading?: boolean;
}
declare const Button: React.FC<ButtonProps>;

declare const Icon: React.FC<IconProps>;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    size: 'lg' | 'md' | 'sm';
    variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
    appearance?: 'square' | 'circle';
    mode?: 'light' | 'dark';
    icon: string;
}
declare const IconButton: React.FC<IconButtonProps>;

interface LoadingProps {
    className?: string;
    spinColor?: 'black' | 'green';
    elipseColor?: 'gray' | 'success';
}
declare const Loading: React.FC<LoadingProps>;

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    application?: 'on-white' | 'on-dark';
    kind?: 'back-single' | 'back-full' | 'back-arrow' | 'close';
    size?: 'md' | 'sm';
}
declare const NavButton: React.FC<NavButtonProps>;

interface Step {
    title: string;
}
interface StepperBarProps {
    steps: Step[];
    currentStep?: number;
}
declare const StepperBar: React.FC<StepperBarProps>;

export { AvatarProfile, Button, Icon, IconButton, Loading, NavButton, StepperBar };
