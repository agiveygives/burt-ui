import { MouseEventHandler } from 'react';
export type ButtonType = {
    children: string;
    size?: 'lg' | 'md' | 'sm';
    variation?: 'primary' | 'secondary' | 'ghost';
    onClick?: MouseEventHandler<HTMLButtonElement>;
    rounded?: 'soft' | 'hard';
    isActive?: boolean;
    isDisabled?: boolean;
    className?: string;
    styles?: object;
};
