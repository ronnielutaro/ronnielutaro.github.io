import ReactMarkdown from 'react-markdown';
import theme from '../global/theme';

import Root from '../components/Root';
import { BigHeading } from '../components/Heading';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col } from '../components/Layout';
import Footer from '../components/Footer';
import SkillCloud from '../components/SkillCloud';
import {
  skillList,
  devFirstName,
  devName,
  siteMetaDescription,
  aboutMe,
} from '../global/defaultValues';

export default function About() {
  const heading = `About ${devFirstName}`;

  return (
    <Root title={`About - ${devName}`} description={siteMetaDescription}>
      <Section className="pb-0">
        <Container>
          <Row>
            <Col fraction={1}>
              <Subtitle data-aos="fade-up">Get to Know Me</Subtitle>
              <BigHeading
                color={theme.colors.white}
                className="playful"
                data-aos-delay={200}
                data-aos="fade-up"
              >
                {heading.split('').map((h, i) => (
                  <span key={`h-${i}`}>{h}</span>
                ))}
              </BigHeading>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="pt-2">
        <Container>
          <Row>
            <Col fraction={3} size={2} data-aos-delay={400} data-aos="fade-up">
              <div className="about-text">
                <ReactMarkdown>{aboutMe}</ReactMarkdown>
              </div>
            </Col>
            <Col
              fraction={3}
              data-aos-delay={400}
              data-aos="fade-up"
              className="margin-top-mobile"
            >
              <div>
                <img
                  src="/assets/img/portrait.jpg"
                  alt={`Portrait of ${devName}`}
                  className="portrait"
                />
              </div>
              <div>
                <SkillCloud className="mt-4" skillList={skillList} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </Root>
  );
}
