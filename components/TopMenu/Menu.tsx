import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoMail,
} from 'react-icons/io5';
import { CSSTransition } from 'react-transition-group';

import { Container, Row, Col } from '../Layout';
import { H1, H2 } from '../Heading';
import { socialLinks } from '../../global/defaultValues';
import theme from '../../global/theme';

import { menuStyles } from './TopMenu.styles';
import { MenuProps } from './TopMenu.types';

function Menu({
  toggleOpen,
  showLinks1,
  showSocials,
  setShowLoading,
}: MenuProps) {
  const [showLinks2, setShowLinks2] = useState(false);
  const [showLinks3, setShowLinks3] = useState(false);
  const [showLinks4, setShowLinks4] = useState(false);
  const [showLinks5, setShowLinks5] = useState(false);
  const router = useRouter();

  return (
    <div className="menu" css={menuStyles(theme)}>
      <Container className="pl-4 pr-4 pt-8 pb-8">
        <Row>
          <Col className="col-links" fraction={2}>
            <H1 color={'#fff'}>
              <CSSTransition
                in={showLinks1}
                timeout={100}
                classNames="nav-transition"
                unmountOnExit
                onEntered={() => setShowLinks2(true)}
                onExited={() => setShowLinks2(false)}
              >
                <Link href="/">
                  <a
                    className={router.pathname === '/' ? 'active' : ''}
                    onClick={() => {
                      if (router.pathname !== '/') {
                        return setShowLoading(true);
                      }
                      return toggleOpen(false);
                    }}
                  >
                    Home
                  </a>
                </Link>
              </CSSTransition>
            </H1>
            <H1 color={'#fff'}>
              <CSSTransition
                in={showLinks2}
                timeout={100}
                classNames="nav-transition"
                unmountOnExit
                onEntered={() => setShowLinks3(true)}
                onExited={() => setShowLinks3(false)}
              >
                <Link href="/about">
                  <a
                    className={router.pathname === '/about' ? 'active' : ''}
                    onClick={() => {
                      if (router.pathname !== '/about') {
                        return setShowLoading(true);
                      }
                      return toggleOpen(false);
                    }}
                  >
                    About
                  </a>
                </Link>
              </CSSTransition>
            </H1>
            <H1 color={'#fff'}>
              <CSSTransition
                in={showLinks3}
                timeout={100}
                classNames="nav-transition"
                unmountOnExit
                onEntered={() => setShowLinks4(true)}
                onExited={() => setShowLinks4(false)}
              >
                <Link href="/portfolio">
                  <a
                    className={router.pathname === '/portfolio' ? 'active' : ''}
                    onClick={() => {
                      if (router.pathname !== '/portfolio') {
                        return setShowLoading(true);
                      }
                      return toggleOpen(false);
                    }}
                  >
                    Portfolio
                  </a>
                </Link>
              </CSSTransition>
            </H1>
            <H1 color={'#fff'}>
              <CSSTransition
                in={showLinks4}
                timeout={100}
                classNames="nav-transition"
                unmountOnExit
                onEntered={() => setShowLinks5(true)}
                onExited={() => setShowLinks5(false)}
              >
                <Link href="/blog">
                  <a
                    className={router.pathname === '/blog' ? 'active' : ''}
                    onClick={() => {
                      if (router.pathname !== '/blog') {
                        return setShowLoading(true);
                      }
                      return toggleOpen(false);
                    }}
                  >
                    Blog
                  </a>
                </Link>
              </CSSTransition>
            </H1>
            <H1 color={'#fff'}>
              <CSSTransition
                in={showLinks5}
                timeout={100}
                classNames="nav-transition"
                unmountOnExit
              >
                <Link href="/contact">
                  <a
                    className={router.pathname === '/contact' ? 'active' : ''}
                    onClick={() => {
                      if (router.pathname !== '/contact') {
                        return setShowLoading(true);
                      }
                      return toggleOpen(false);
                    }}
                  >
                    Contact
                  </a>
                </Link>
              </CSSTransition>
            </H1>
          </Col>
          <Col fraction={2} className="social-column">
            <CSSTransition
              in={showSocials}
              timeout={500}
              classNames="social-transition"
              unmountOnExit
            >
              <div>
                <H2
                  className="menu-social-title mb-4"
                  color={theme.colors.secondary}
                >
                  Connect
                </H2>
                <ul className="menu-social pb-5">
                  {socialLinks.github && (
                    <li className="github">
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoGithub />
                        </span>
                        <span className="big-text-2 social-text">Github</span>
                      </a>
                    </li>
                  )}
                  {socialLinks.twitter && (
                    <li className="twitter">
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoTwitter />
                        </span>
                        <span className="big-text-2 social-text">Twitter</span>
                      </a>
                    </li>
                  )}
                  {socialLinks.linkedin && (
                    <li className="linkedin">
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoLinkedin />
                        </span>
                        <span className="big-text-2 social-text">LinkedIn</span>
                      </a>
                    </li>
                  )}
                  {socialLinks.instagram && (
                    <li className="instagram">
                      <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoLogoInstagram />
                        </span>
                        <span className="big-text-2 social-text">
                          Instagram
                        </span>
                      </a>
                    </li>
                  )}
                  {socialLinks.mail && (
                    <li>
                      <a
                        href={`mailto:${socialLinks.mail}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="social-icon">
                          <IoMail />
                        </span>
                        <span className="big-text-2 social-text">Mail Me</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </CSSTransition>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Menu;
