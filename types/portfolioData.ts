export interface ProjectData {
  title: string;
  uri: string;
  featured: boolean;
  type: string;
  tools: string[];
  viewOrder: number;
  thumb: string;
};

export interface PortfolioGridData {
  title: string;
  uri: string;
  featured: boolean;
  type: string;
  tools: {
    list: string[];
  };
  viewOrder: number;
  thumb: string;
}