import React from 'react';
import HyperLink from './HyperLink';
import type { Link } from '../../types/Link';
import { routes } from '../../constants/routes';

const Greeting = (): React.ReactElement => {
  const projectsLink: Link = {
    url: `${routes.projects.path}/`,
  };

  const blogLink: Link = {
    url: `${routes.blog.path}/`,
  };

  const projectsLinkElement = (
    <div className="inline-block">
      <HyperLink link={projectsLink} className="underline font-semibold">projects</HyperLink>
    </div>
  );

  const blogLinkElement = (
    <div className="inline-block">
      <HyperLink link={blogLink} className="underline font-semibold">articles</HyperLink>
    </div>
  );

  return (
    <>
      <p className="font-light">
        Hi there!
        I&apos;m Ronnie. Welcome to my personal website.
        I am a Software Engineer based in Uganda,
        currently building technology and experiences for humans.
        I enjoy converting complex problems into technology and experiences that are both intuitive
        and exciting. Over time I&apos;ve worked on {projectsLinkElement} in different areas
        of Computer Science.
        Most of my endeavors are in C#, but every now and then
        I code in TypeScript/JavaScript as well. I&apos;m primarily focused on
        Distributed Systems and the Cloud.
        My professional hobbies involve contributing to Open-Source and blogging. Outside of that,
        I&apos;m also into Filmmaking.
        Other technologies I work with include: ASP.NET Core, WPF, Microsoft SQL Server, PostgreSQL, 
        React.js, ML.NET, Blazor WebAssembly, Android, Docker.
        This site is where I get to write {blogLinkElement} about stuff I&apos;m working on while
        sharing my lessons along the way.
        The best way to reach me is through email: ronnielutaro@gmail.com
      </p>

    </>
  );
};

export default Greeting;
