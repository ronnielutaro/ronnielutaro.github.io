import Link from 'next/link';
import { format } from 'date-fns';

import Root from '../components/Root';
import Footer from '../components/Footer';
import { BigHeading, H3 } from '../components/Heading';
import Button from '../components/Button';
import Subtitle from '../components/Subtitle';
import { Section, Container, Row, Col, Spacing } from '../components/Layout';
import { GetStaticProps } from 'next'
import theme from '../global/theme';

import {
  devName,
  devFirstName,
  siteMetaDescription,
  blogDescription,
} from '../global/defaultValues';
import { getSortedPosts } from '../helpers/posts'

export default function Blog({
  allPostsData
}: {
  allPostsData: {
    publishDate: string
    title: string
    slug: string
    shortDescription: string
  }[]
}) {
  const heading = `${devFirstName}’s Blog`;

  return (
    <Root title={`Blog - ${devName}`} description={siteMetaDescription}>
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <Col fraction={1}>
              <Subtitle data-aos="fade-up">My Thoughts</Subtitle>
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
              <p className="big-text-1" data-aos="fade-up" data-aos-delay={400}>
                {blogDescription}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="pb-0" data-aos="fade-up" data-aos-delay={600}>
        <Container>
          {allPostsData.map(({ slug: slug, publishDate, title, shortDescription }) => (
            <Row key={`blog-${slug}`} className="mb-5">
              <Col fraction={1}>
                <H3 className="mb-0" color={theme.colors.white}>
                  <Link href={`/blog/${slug}`}>
                    <a>{title}</a>
                  </Link>
                </H3>
                <small className="mb-1 fade-text">
                  {format(
                    new Date(publishDate),
                    'PPP'
                  )}
                </small>
                <p>{shortDescription}</p>
                <Button href={`/blog/${slug}`} color="primaryOutline">
                  Read More
                </Button>
              </Col>
            </Row>
          ))}
          <Spacing />
          <Row>
            <hr />
          </Row>
        </Container>
      </Section>
      <Footer />
    </Root>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPosts()
  return {
    props: {
      allPostsData
    }
  }
}
