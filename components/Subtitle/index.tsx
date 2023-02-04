import theme from '../../global/theme';
import { contentStyles, lineStyles } from './Subtitle.styles';
import { SubtitleProps } from './Subtitle.types';

function Subtitle({
  color = 'primary',
  align = 'left',
  children,
  ...restProps
}: SubtitleProps) {
  return (
    <div {...restProps} css={contentStyles(theme, color)}>
      {(align === 'left' || align === 'center') && (
        <span
          css={lineStyles(
            theme,
            color,
            align === 'center' ? 'leftCenter' : 'left'
          )}
        />
      )}
      {children}
      {(align === 'right' || align === 'center') && (
        <span
          css={lineStyles(
            theme,
            color,
            align === 'center' ? 'rightCenter' : 'right'
          )}
        />
      )}
    </div>
  );
}

export default Subtitle;
