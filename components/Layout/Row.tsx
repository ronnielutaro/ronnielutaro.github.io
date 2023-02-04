import theme from '../../global/theme';
import { rowStyles } from './layoutStyles.styles';
import { RowProps } from './Layout.types';

function Row({
  children,
  className,
  background = 'transparent',
  color = 'inherit',
  ...restProps
}: RowProps) {
  return (
    <div
      {...restProps}
      className={`row${className ? ` ${className}` : ''}`}
      css={rowStyles(theme, background, color)}
    >
      {children}
    </div>
  );
}

export default Row;
