import Link from 'next/link';
import { LoadingLinkProps } from './LoadingLink.types';

export default function LoadingLink({
  href,
  setShowLoading,
  children,
}: LoadingLinkProps) {
  return (
    <Link href={href}>
      <a onClick={() => setShowLoading(true)}>{children}</a>
    </Link>
  );
}
