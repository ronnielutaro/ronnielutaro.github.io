export interface BrandIconProps {
  brand: string;
}

interface CardData {
  title: string;
  uri: string;
  featured: boolean;
  type: string;
  viewOrder: number;
  tools: { list: string[] };
  thumb: string;
}

export interface CardProps {
  data: CardData;
  visible: boolean;
}

export interface GridProps extends React.HTMLAttributes<any> {
  featured?: boolean;
  filters?: { label: string; type: string }[];
  data: CardData[];
}
