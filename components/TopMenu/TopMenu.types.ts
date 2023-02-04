export interface TopMenuProps {
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type toggleOpen = (o: boolean) => void;

export interface MenuProps extends React.HTMLAttributes<any> {
  toggleOpen: toggleOpen;
  showLinks1: boolean;
  showSocials: boolean;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuSwitchProps {
  open: boolean;
  toggleOpen: toggleOpen;
}

export interface TopNavProps {
  toggleOpen: toggleOpen;
}
