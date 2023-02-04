export interface RootProps extends React.HTMLAttributes<any> {
  title?: string;
  description?: string;
  banner?: string;
  children: React.ReactNode;
}
