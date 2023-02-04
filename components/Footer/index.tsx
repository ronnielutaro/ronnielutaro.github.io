import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io5';
import { Spacing, Section, Container, Row, Col } from '../Layout';
import { H3 } from '../Heading';
import Button from '../Button';
import Subtitle from '../Subtitle';
import {
  callToAction,
  socialLinks,
  copyrightText,
  copyrightUrl,
} from '../../global/defaultValues';
import footerStyles from './Footer.styles';
import { FooterProps } from './Footer.types';

function Footer({
  hideHire = false,
  hideSocial = false,
  secondary = false,
}: FooterProps) {
  return (
    <footer css={footerStyles()}>
      <Section className={`${hideHire && hideSocial ? 'mt-0' : ''}`}>
        <Container>
          {!hideHire && (
            <>
              <Row data-aos="fade-up">
                <Col fraction={1}>
                  <Subtitle color={secondary ? 'secondary' : 'primary'}>
                    Reach Out
                  </Subtitle>
                  <H3 color={secondary ? 'secondary' : 'primary'} className="mt-2 mb-5 small-mobile">{callToAction}</H3>
                  <Button
                    href="/contact"
                    color={secondary ? 'secondary' : 'primary'}
                  >
                    <span>Get in Touch</span>
                    <HiArrowRight />
                  </Button>
                </Col>
              </Row>
              <Spacing size={3} />
            </>
          )}
          <Row>
            {!hideSocial && (
              <>
                <Col fraction={2}>
                  <p className="fade-text mb-0">E-MAIL</p>
                  <p
                    className="big-text-3 mb-0"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
                    <a
                      className="white-link-secondary"
                      href={`mailto:${socialLinks.mail}`}
                    >
                      {socialLinks.mail}
                    </a>
                  </p>
                </Col>
                <Col fraction={2} className="col-right-desktop">
                  <p className="fade-text mb-2">CONNECT</p>
                  <ul
                    className="footer-social pb-4"
                    data-aos="fade-up"
                    data-aos-duration={600}
                  >
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
                        </a>
                      </li>
                    )}
                    {socialLinks.facebook && (
                      <li className="facebook">
                        <a
                          href={socialLinks.facebook}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="social-icon">
                            <IoLogoFacebook />
                          </span>
                        </a>
                      </li>
                    )}
                  </ul>
                </Col>
              </>
            )}
          </Row>
          <Spacing size={1} />
          <Row className="copyright-row">
            <div>
              <hr />
              <Spacing size={1} />
            </div>
            <Col fraction={2} className="w-30-all">
              <Link href="/">
                <a>
                  <Image
                    src="/assets/logos/logo.png"
                    alt="Logo"
                    className="footer-logo"
                    width="92.8px"
                    height="40px"
                  />
                </a>
              </Link>
            </Col>
            <Col className="col-right-desktop copyright w-70-all" fraction={2}>
              <a href={copyrightUrl}>
                <small className="mt-3 block fade-text">{copyrightText}</small>
              </a>
            </Col>
          </Row>
        </Container>
      </Section>
    </footer>
  );
}

export default Footer;
