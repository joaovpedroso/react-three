export enum EnumButtonVariants {
    primary = 'primary',
    secondary = 'secondary'
}

export enum EnumButtonStatus {
    'default' = 'default',
    'active-one' = 'active'
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: EnumButtonVariants;
    status?: EnumButtonStatus;
}