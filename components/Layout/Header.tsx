import { HeaderProps } from './Layout.types';

function Header({
  children,
  background = 'transparent',
  color = 'inherit',
  ...restProps
}: HeaderProps) {
  return (
    <header id="header" {...restProps}>
      {children}
    </header>
  );
}

export default Header;
