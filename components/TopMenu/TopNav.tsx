import Link from 'next/link';
import { TopNavProps } from './TopMenu.types';

function TopNav({ toggleOpen, ...props }: TopNavProps) {
  return (
    <div {...props} id="top-nav">
      <Link href="/">
        <a onClick={() => toggleOpen(false)}>
          {/* <div className="logo-image" /> */}
        </a>
      </Link>
    </div>
  );
}

export default TopNav;
