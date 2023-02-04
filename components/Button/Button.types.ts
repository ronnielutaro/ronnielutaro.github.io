export interface ButtonProps extends React.HTMLAttributes<any> {
  color:
    | 'primary'
    | 'secondary'
    | 'light'
    | 'primaryOutline'
    | 'secondaryOutline'
    | 'lightOutline';
  children: React.ReactNode;
  showIconOnHover?: boolean;
  externalLink?: boolean;
  leftIcon?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}
