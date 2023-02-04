import { PageMainProps } from './Layout.types';

function PageMain({
  children,
  background = 'transparent',
  color = 'inherit',
  ...restProps
}: PageMainProps) {
  return (
    <main {...restProps} id="main">
      {children}
    </main>
  );
}

export default PageMain;
