const breakpoints = [520, 760, 1024, 1230, 1570];

const Breakpoints = {
  mb: 0,
  tb: 1,
  ds: 2,
  bs: 3,
  gs: 4,
};

const mq = (minWidth: number) =>
  `@media screen and (min-width: ${breakpoints[minWidth]}px)`;

export { mq, breakpoints, Breakpoints };
