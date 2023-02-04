import { colStyles } from './layoutStyles.styles';
import { ColProps } from './Layout.types';

function Col({
  children,
  background = 'transparent',
  color = 'inherit',
  fraction = 1,
  size = 1,
  ...restProps
}: ColProps) {
  return (
    <div
      {...restProps}
      css={colStyles(background, color, fraction, size)}
    >
      <div className="col-inner">{children}</div>
    </div>
  );
}

export default Col;
