import { css, Theme } from '@emotion/react';

const skillCloudStyles = (theme: Theme) => css`
  span {
    color: ${theme.colors.grey};
    margin: 0 10px 0px 0;
    font-size: 13px;
    display: inline-block;
    transition: color 0.3s, transform 0.5s;

    &:hover,
    &:focus {
      transform: scale(1.1);
      color: ${theme.colors.secondary};
    }
  }
`;

export default skillCloudStyles;
