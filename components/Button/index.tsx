import Link from 'next/link';

import theme from '../../global/theme';
import buttonStyles from './Button.styles';
import { ButtonProps } from './Button.types';

function Button({
  color = 'primary',
  showIconOnHover = false,
  externalLink = false,
  leftIcon = false,
  fullWidth = false,
  children,
  href,
  type = 'button',
  disabled = false,
  ...restProps
}: ButtonProps) {
  if (href) {
    return (
      <>
        {externalLink && (
          <a
            {...restProps}
            href={href}
            target="_blank"
            rel="noreferrer"
            css={buttonStyles(
              theme,
              color,
              fullWidth,
              leftIcon,
              showIconOnHover
            )}
          >
            {children}
          </a>
        )}
        {!externalLink && (
          <Link href={href}>
            <a
              {...restProps}
              css={buttonStyles(
                theme,
                color,
                fullWidth,
                leftIcon,
                showIconOnHover
              )}
            >
              {children}
            </a>
          </Link>
        )}
      </>
    );
  }

  return (
    <button
      {...restProps}
      disabled={disabled}
      type={type}
      css={buttonStyles(theme, color, fullWidth, leftIcon, showIconOnHover)}
    >
      {children}
    </button>
  );
}

export default Button;
