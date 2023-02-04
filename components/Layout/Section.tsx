import theme from '../../global/theme';
import { sectionStyles } from './layoutStyles.styles';
import { SectionProps } from './Layout.types';

function Section({
  children,
  background = 'transparent',
  color = 'inherit',
  ...restProps
}: SectionProps) {
  return (
    <section {...restProps} css={sectionStyles(theme, background, color)}>
      {children}
    </section>
  );
}

export default Section;
