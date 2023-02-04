import headingStyles from './Heading.styles';
import theme from '../../global/theme';
import { SizedHeadingProps } from './Heading.types';

function Heading({
  size = 3,
  color = 'white',
  children,
  ...restProps
}: SizedHeadingProps) {
  switch (size) {
    case 1:
      return (
        <h1 {...restProps} css={headingStyles(theme, color, 1)}>
          {children}
        </h1>
      );

    case 2:
      return (
        <h2 {...restProps} css={headingStyles(theme, color, 2)}>
          {children}
        </h2>
      );

    case 3:
      return (
        <h3 {...restProps} css={headingStyles(theme, color, 3)}>
          {children}
        </h3>
      );

    case 4:
      return (
        <h4 {...restProps} css={headingStyles(theme, color, 4)}>
          {children}
        </h4>
      );

    case 5:
      return (
        <h5 {...restProps} css={headingStyles(theme, color, 5)}>
          {children}
        </h5>
      );

    case 6:
      return (
        <h6 {...restProps} css={headingStyles(theme, color, 6)}>
          {children}
        </h6>
      );

    case 'bigHeading':
      return (
        <h1 {...restProps} css={headingStyles(theme, color, 'bigHeading')}>
          {children}
        </h1>
      );

    default:
      return (
        <h3 {...restProps} css={headingStyles(theme, color, 3)}>
          {children}
        </h3>
      );
  }
}

export default Heading;
