import theme from '../../global/theme';
import { spacingStyles } from './layoutStyles.styles';
import { SpacingProps } from './Layout.types';

function Spacing({ size = 1, ...restProps }: SpacingProps) {
  return <div {...restProps} css={spacingStyles(theme, size)} />;
}

export default Spacing;
