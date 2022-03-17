import { Projects } from '../types/Project';

export const projects: Projects = {
  'ronnielutalo.github.io': {
    id: 'ronnielutalo-personal-site',
    name: '🛰 ronnielutalo.github.io',
    srcURL: { url: 'https://github.com/RonnieLutalo/ronnielutalo.github.io/' },
    demoURL: { url: 'https://ronnielutalo.github.io/' },
    cover: { srcPath: 'projects/ronnielutalo.github.io/cover.png' },
    startDate: '2021-12-15',
    summary: [
      'My Official Personal Website, where I get to write about stuff I\'m working on while sharing my lessons along the way.',
    ],
    tags: [
      { name: 'TypeScript' },
      { name: 'GraphQL' },
      { name: 'React.js' },
      { name: 'Gatsby' },
      { name: 'TailWindCSS' },
      { name: 'Portfolio' },
    ],
    gitHubRepo: {
      owner: 'RonnieLutalo',
      repo: 'ronnielutalo.github.io',
    },
  },
  ExpenseTracker: {
    id: 'Expense-Tracker',
    name: '💲 Expense Tracker',
    srcURL: { url: 'https://github.com/RonnieLutalo/ExpenseTracker' },
    demoURL: { url: 'https://github.com/RonnieLutalo/ExpenseTracker' },
    cover: { srcPath: 'projects/ExpenseTracker/cover.png' },
    startDate: '2022-03-03',
    summary: [
      'Solution aimed at helping users keep track of their expenses easily with as much free as possible the burden of manual calculation.',
    ],
    tags: [
      { name: 'C#' },
      { name: 'ASP.NET' },
      { name: 'Clean-Architecture' },
      { name: 'React.js' },
      { name: 'MVC-Razor-Pages' },
    ],
    gitHubRepo: {
      owner: 'RonnieLutalo',
      repo: 'ExpenseTracker',
    },
  }
};
