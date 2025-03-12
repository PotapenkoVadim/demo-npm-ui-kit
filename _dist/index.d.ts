import React, { FC, HTMLAttributes, ReactNode, HTMLProps } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
}
declare const Button: FC<ButtonProps>;

interface AccordionProps {
    isOpen?: boolean;
    onToggle?: () => void;
    children: ReactNode;
    title: string;
    innerControl?: boolean;
}
declare const Accordion: FC<AccordionProps>;

type IconProps = Partial<HTMLProps<SVGElement>>;
declare const CheckIcon: React.FC<Partial<React.HTMLProps<SVGElement>>>;
declare const QuestionMarkIcon: React.FC<Partial<React.HTMLProps<SVGElement>>>;
declare const UserIcon: React.FC<Partial<React.HTMLProps<SVGElement>>>;

export { Accordion, type AccordionProps, Button, type ButtonProps, CheckIcon, type IconProps, QuestionMarkIcon, UserIcon };
