import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import TopNav from './TopNav';
import Menu from './Menu';
import MenuSwitch from './MenuSwitch';
import { Header, Container } from '../Layout';
import { TopMenuProps } from './TopMenu.types';

function TopMenu({ setShowLoading }: TopMenuProps) {
  const [open, setOpen] = useState(false);
  const [showLinks1, setShowLinks1] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const toggleOpen = (o: boolean) => {
    const html = document.querySelector('html');
    setOpen(o);
    if (html) {
      html.style.overflow = o ? 'hidden' : 'auto';
    }
  };

  return (
    <Header>
      <Container fullWidth>
        <TopNav toggleOpen={toggleOpen} />
        <CSSTransition
          in={open}
          timeout={300}
          classNames="opacity-transition"
          unmountOnExit
          onEnter={() => {
            setShowSocials(true);
            setShowLinks1(true);
          }}
          onExited={() => {
            setShowSocials(false);
            setShowLinks1(false);
          }}
        >
          <Menu
            toggleOpen={toggleOpen}
            showLinks1={showLinks1}
            showSocials={showSocials}
            setShowLoading={setShowLoading}
          />
        </CSSTransition>
        <MenuSwitch open={open} toggleOpen={toggleOpen} />
      </Container>
    </Header>
  );
}

export default TopMenu;
