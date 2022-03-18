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

  const oscaKampalaLink = {
    url: 'https://oscakampala.github.io',
  };

  const dotnetCommunityLink = {
    url: 'https://chat.whatsapp.com/D8MPoXMBDvj9c9MLfoxOnL',
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

  const dotNetCommunity = (
    <div className="inline-block">
      <HyperLink link={dotnetCommunityLink} className="underline font-semibold">community</HyperLink>
    </div>
  );

  const oscaKampala = (
    <div className="inline-block">
      <HyperLink link={oscaKampalaLink} className="underline font-semibold">O.S.C.A Kampala</HyperLink>
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
        and exciting.
        Most of my endeavors are in C#, but every now and then
        I code in TypeScript/JavaScript as well.
        I&apos;m primarily interested in Distributed Systems and the Cloud.
        My professional hobbies involve contributing to Open-Source and blogging.
        I currently as well lead and run a .NET/C# Developer {dotNetCommunity} in Kampala
        under {oscaKampala}.
        Outside of that, I&apos;m also into Art.
        In my spare time I enjoy dancing.
        Other technologies I work with include: ASP.NET Core, React.js, SQL and NoSQL Databases.
        This site is where I get to write {blogLinkElement} about stuff I&apos;m working on while
        sharing my lessons along the way.
        I also write about my personal {projectsLink}. Most of them are solutions
        I created to solve a particular problem I was personally facing.
        The best way to reach me is through email: ronnielutaro@gmail.com
      </p>

    </>
  );
};

export default Greeting;
