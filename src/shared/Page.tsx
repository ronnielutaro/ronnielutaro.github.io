import React from 'react';
import Helmet from 'react-helmet';
import { IconContext } from 'react-icons/lib';
import { getAbsoluteUrl } from '../infra/utils';
import Link from './Link';
import './Page.css';
import useSiteMetadata from './useSiteMetadata';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
  rssUrl?: string;
}

function Meta({ title, description, keywords, imageUrl, rssUrl }: MetaProps) {
  const siteMetadata = useSiteMetadata();

  const defaults = {
    title: 'Ronnie Lutalo',
    description:
      'Ronnie Lutalo (@r_lutalo) is a Computer Scientist and Filmmaker from Uganda'
  };

  const actual = {
    title: title ? `${title} | ${defaults.title}` : defaults.title,
    description: description || defaults.description,
    keywords: keywords?.join(', '),
    imageUrl: imageUrl && getAbsoluteUrl(siteMetadata.siteUrl, imageUrl),
    rssUrl: rssUrl && getAbsoluteUrl(siteMetadata.siteUrl, rssUrl)
  };

  return (
    <Helmet>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{actual.title}</title>

      <meta name="description" content={actual.description} />
      {actual.keywords && <meta name="keywords" content={actual.keywords} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={actual.title} />
      <meta property="og:description" content={actual.description} />
      {actual.imageUrl && <meta property="og:image" content={actual.imageUrl} />}

      <meta name="twitter:title" content={actual.title} />
      <meta name="twitter:site" content="@r_lutalo" />
      <meta name="twitter:creator" content="@r_lutalo" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={actual.description} />
      {actual.imageUrl && <meta name="twitter:image" content={actual.imageUrl} />}

      {actual.rssUrl && (
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href={actual.rssUrl} />
      )}
    </Helmet>
  );
}

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="navbar-logo-link" href="/">
          Ronnie Lutalo
        </Link>
      </div>

      <div className="navbar-links">
        <Link className="navbar-link" activeClassName="navbar-link--active" activeExact href="/">
          Home
        </Link>

        <Link className="navbar-link" activeClassName="navbar-link--active" href="/blog">
          Blog
        </Link>

        <Link className="navbar-link" activeClassName="navbar-link--active" href="/projects">
          Projects
        </Link>
      </div>
    </nav>
  );
}

interface PageProps extends MetaProps {
  children: React.ReactNode;
}

export default function Page({ children, ...props }: PageProps) {
  return (
    <IconContext.Provider value={{ style: { marginTop: '0.2rem' } }}>
      <div className="page-container">
        <Meta {...props} />
        <Navigation />

        <main>{children}</main>
      </div>
    </IconContext.Provider>
  );
}