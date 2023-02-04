export interface LoadingLinkProps {
  href: string;
  children: React.ReactNode;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
