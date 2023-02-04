import { css, Theme } from '@emotion/react';
import { Breakpoints, mq } from '../../global/mq';

export const filterStyles = (theme: Theme) => css`
  margin-bottom: ${theme.spacing.spacer * 1.5}px;

  & button {
    background: none;
    border: none;
    color: ${theme.colors.grey};
    font-size: 14px;
    font-weight: 500;
    padding: 3px;
    margin: 0 5px 5px 0;
    border: none;
    border-bottom: solid 2px ${theme.colors.dark};

    &:hover,
    &:focus {
      color: ${theme.colors.white};
    }

    ${mq(Breakpoints.mb)} {
      font-size: 16px;
    }

    ${mq(Breakpoints.tb)} {
      font-size: 17px;
      padding: 5px;
      margin: 0 10px 5px 0;
    }

    ${mq(Breakpoints.bs)} {
      font-size: 18px;
      padding: 5px;
      margin: 0 15px 5px 0;
    }

    &.active {
      color: ${theme.colors.white};
      border-bottom: solid 2px ${theme.colors.primary};
    }
  }
`;

export const gridStyles = (theme: Theme) => css`
  & .card-holder {
    display: block;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    width: calc(100% - ${theme.spacing.spacer}px);
    margin: 0 ${theme.spacing.spacer / 2}px ${theme.spacing.spacer}px;
    float: left;

    ${mq(Breakpoints.tb)} {
      width: 50%;
      width: calc(50% - ${theme.spacing.spacer * 2}px);
      margin: 0 ${theme.spacing.spacer}px ${theme.spacing.spacer * 2}px;
    }

    &.show {
      display: block;
    }
    &.hide {
      display: none;
    }
    &.transition-start {
      opacity: 0;
    }
    &.transition-finish {
      opacity: 1;
    }
    &.transition-start,
    .transition-finish {
      transition: opacity 1s;
    }
    & .image-holder {
      position: relative;
      font-size: 0;
      min-height: 200px;
      background: ${theme.colors.darkGrey};

      & .brand-holder {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        ${mq(Breakpoints.tb)} {
          top: 15px;
          right: 15px;
        }
        ${mq(Breakpoints.ds)} {
          top: 20px;
          right: 20px;
        }

        .icon-holder {
          background: ${theme.colors.darkGrey};
          color: ${theme.colors.light};
          box-shadow: 0 0 1px 1px ${theme.colors.grey};
          display: flex;
          margin-left: 5px;
          padding: 5px;
          width: 26px;
          height: 26px;
          border-radius: 3px;
          justify-content: flex-start;
          align-items: center;
          text-align: left;
          font-size: ${theme.sizes.text.size.mobile}px;
          transition: background 0.5s, color 0.5s, box-shadow 0.5s;

          ${mq(Breakpoints.tb)} {
            font-size: 20px;
            padding: 6px;
            width: 32px;
            height: 32px;
          }
        }
      }
      & .image-hover {
        position: absolute;
        font-size: ${theme.sizes.text.size.mobile}px;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${theme.colors.transparentGrey};
        opacity: 0;
        transition: opacity 0.5s;

        & .zoom-holder {
          text-align: center;
          line-height: 1.3;
          padding: 30px 25px;
          width: 100px;
          height: 100px;
          background: ${theme.colors.dark};
          border-radius: 50px;
          color: ${theme.colors.light};
          box-shadow: 0 0 2px 2px ${theme.colors.dark};
          transform: scale(0);
          transition: transform 0.5s;

          & svg {
            height: 30px;
            width: 30px;
          }
        }
      }
    }
    & .card-title {
      padding: 10px 15px;
      background: ${theme.colors.darkGrey};
      transition: background 0.5s;
      ${mq(Breakpoints.tb)} {
        padding: 15px 18px;
      }
      ${mq(Breakpoints.ds)} {
        padding: 20px 30px;
      }

      & h4 {
        font-weight: 400;
        color: ${theme.colors.white};
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        ${mq(Breakpoints.tb)} {
          font-size: 20px;
        }
        ${mq(Breakpoints.ds)} {
          font-size: 23px;
        }
      }
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 3px 3px ${theme.colors.darkest};
      ${mq(Breakpoints.tb)} {
        box-shadow: 0 0 6px 6px ${theme.colors.darkest};
      }

      & .card-title {
        background: ${theme.colors.darkerGrey};
      }

      & .image-hover {
        opacity: 1;
        transition: opacity 0.5s;

        & .zoom-holder {
          transform: scale(1);
        }
      }
    }
  }
`;
