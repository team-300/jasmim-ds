import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ButtonHTMLAttributes } from 'react';

interface IconFacebookProps {
    width?: number;
    height?: number;
    className?: string;
}
declare function IconFacebook({ width, height, className }: IconFacebookProps): react_jsx_runtime.JSX.Element;

interface IconGoogleProps {
    width?: number;
    height?: number;
    className?: string;
}
declare function IconGoogle({ width, height, className }: IconGoogleProps): react_jsx_runtime.JSX.Element;

interface LogoProps {
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}
declare function Logo({ width, height, color, className, }: LogoProps): react_jsx_runtime.JSX.Element;

interface AtentionButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    variation?: 'primary' | 'secondary';
    icon?: string;
    title: string;
    fullSize?: boolean;
}
declare const AtentionButton: React.FC<AtentionButtonProps>;

interface AvatarProfileProps {
    size?: 'sm' | 'lg';
    avatarUrl?: string;
    avatarName?: string;
}
declare const AvatarProfile: React.FC<AvatarProfileProps>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    size: 'lg' | 'md' | 'sm';
    application?: 'on-white' | 'on-dark';
    variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quintinary' | 'danger';
    leftIcon?: string;
    rightIcon?: string;
    fullSize?: boolean;
    isLoading?: boolean;
}
declare const Button: React.FC<ButtonProps>;

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    application?: 'on-white' | 'on-dark';
    isSelected?: boolean;
    isClosable?: boolean;
    size?: 'sm' | 'md';
    title: string;
}
declare const Chip: React.FC<ChipProps>;

interface IconProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
}
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

interface LoadingBrandProps {
    text?: string;
}
declare const LoadingBrand: React.FC<LoadingBrandProps>;

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    application?: 'on-white' | 'on-dark';
    kind?: 'back-single' | 'back-full' | 'back-arrow' | 'close';
    size?: 'md' | 'sm';
}
declare const NavButton: React.FC<NavButtonProps>;

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    variation: 'google' | 'facebook';
}
declare const SocialButton: React.FC<SocialButtonProps>;

interface StatusBadgeProps {
    variation: 'success' | 'danger' | 'warning' | 'neutral';
    fullWidth?: boolean;
    title: string;
}
declare const StatusBadge: React.FC<StatusBadgeProps>;

interface Step {
    title: string;
}
interface StepperBarProps {
    steps: Step[];
    currentStep?: number;
}
declare const StepperBar: React.FC<StepperBarProps>;

interface ToggleSwitchProps {
    label: string;
    labelDir?: 'left' | 'right';
    description?: string;
    disabled?: boolean;
}
declare const ToggleSwitch: React.FC<ToggleSwitchProps>;

export { AtentionButton, AvatarProfile, Button, Chip, Icon, IconButton, IconFacebook, IconGoogle, Loading, LoadingBrand, Logo, NavButton, SocialButton, StatusBadge, StepperBar, ToggleSwitch };
