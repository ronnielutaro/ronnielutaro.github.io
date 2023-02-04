import { BackgroundColorChildren } from '../../global/types';

export interface ColProps extends BackgroundColorChildren {
  fraction?: 1 | 2 | 3 | 4;
  size?: 1 | 2 | 3;
}

export interface ContainerProps extends BackgroundColorChildren {
  fullWidth?: boolean;
}

export interface HeaderProps extends BackgroundColorChildren {}

export interface PageMainProps extends BackgroundColorChildren {}

export interface RowProps extends BackgroundColorChildren {}

export interface SectionProps extends BackgroundColorChildren {}

export interface SpacingProps {
  size?: number;
}
