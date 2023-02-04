import { HiChevronRight } from 'react-icons/hi';
import { format } from 'date-fns';

import Root from '../../components/Root';
import Button from '../../components/Button';
import { Section, Container, Row, Col, Spacing } from '../../components/Layout';
import Footer from '../../components/Footer';
import BlogBanner from '../../components/BlogBanner';

import { fileBaseUrl } from '../../global/defaultValues';
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostSlugs, getSinglePost } from '../../helpers/posts'

interface PostProps {
  singlePost: {
    title: string
    publishDate: string
    lastUpdateDate: string
    shortDescription: string
    bannerUrl: string
    contentHtml: string
  }
}

export default function Blog({
  singlePost: singlePost
}: PostProps
) {

  return (
    <Root
      title={singlePost.title}
      description={singlePost.shortDescription}
      banner={`${fileBaseUrl}${singlePost.bannerUrl}`}
    >
      <Section>
        <Container>
          <BlogBanner
            title={singlePost.title}
            publishDateTime={format(
              new Date(singlePost.publishDate),
              'PPP'
            )}
            lastUpdateDateTime={format(
              new Date(singlePost.publishDate),
              'PPP'
            )}
            image={singlePost.bannerUrl}
          />
          <Spacing />
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col fraction={1}>
              <div className="blog-content">
                  <div dangerouslySetInnerHTML={{ __html: singlePost.contentHtml }} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section data-aos="fade-up" className="pt-0 pb-0">
        <Container>
          <Row>
            <hr />
          </Row>
          <Spacing size={3} />
          <Row>
            <Col fraction={1}>
              <Button href={`/blog`} color="secondaryOutline">
                <span>More Articles</span>
                <HiChevronRight />
              </Button>
            </Col>
          </Row>
          <Spacing size={3} />
          <Row>
            <hr />
          </Row>
        </Container>
      </Section>
      <Footer />
    </Root>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const singlePost = await getSinglePost(params?.slug as string)
  return {
    props: {
      singlePost
    }
  }
}
