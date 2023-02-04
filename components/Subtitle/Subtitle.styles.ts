import { css, themeColor, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

const contentStyles = (theme: Theme, color: themeColor) => css`
  color: ${theme.colors[`${color}`]};
  font-size: 18px;
  line-height: 30px;
  position: relative;

  ${mq(Breakpoints.tb)} {
    font-size: 20px;
  }
`;

const lineStyles = (theme: Theme, color: themeColor, align: string) => {
  const lineCss = `
    width: ${
      align === 'leftCenter' || align === 'rightCenter' ? '25px' : '45px'
    };
    height: 2px;
    display: inline-block;
    margin-top: 14px;
    vertical-align: top;
    background: ${theme.colors[`${color}`]};

    ${mq(Breakpoints.tb)} {
      width: 45px;
    }
  `;
  const lineMargin = '10px';

  return css`
    ${lineCss}

    ${(align === 'left' || align === 'leftCenter') &&
    css`
      margin-right: ${lineMargin};
    `}

    ${(align === 'right' || align === 'rightCenter') &&
    css`
      margin-left: ${lineMargin};
    `}
  `;
};

export { contentStyles, lineStyles };
