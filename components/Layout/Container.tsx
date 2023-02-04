import theme from '../../global/theme';
import { containerStyles } from './layoutStyles.styles';
import { ContainerProps } from './Layout.types';

function Container({
  fullWidth = false,
  children,
  className,
  background = 'transparent',
  color = 'inherit',
  ...restProps
}: ContainerProps) {
  return (
    <div
      {...restProps}
      className={`container${className ? ` ${className}` : ''}`}
      css={containerStyles(theme, fullWidth, background, color)}
    >
      {children}
    </div>
  );
}

export default Container;
