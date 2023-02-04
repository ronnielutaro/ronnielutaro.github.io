import theme from '../../global/theme';
import { menuSwitchStyles } from './TopMenu.styles';
import { MenuSwitchProps } from './TopMenu.types';

function MenuSwitch({ open, toggleOpen }: MenuSwitchProps) {
  return (
    <button
      type="button"
      className="menu"
      css={menuSwitchStyles(theme, open)}
      onClick={() => {
        toggleOpen(!open);
      }}
    >
      <span>Menu Switch Here</span>
    </button>
  );
}

export default MenuSwitch;
