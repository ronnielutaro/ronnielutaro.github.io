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
  },
  WindowsJunkCleaner: {
    id: 'WindowsJunkCleaner',
    name: '🧹 Windows Junk Cleaner',
    srcURL: { url: 'https://github.com/OSCA-Kampala-Chapter/Windows-Junk-Cleaner' },
    demoURL: { url: 'https://github.com/OSCA-Kampala-Chapter/Windows-Junk-Cleaner' },
    cover: { srcPath: 'projects/WindowsJunkCleaner/cover.png' },
    startDate: '2021-10-29',
    summary: [
      'Software that automatically runs in the background of your Windows-OS Device to routinely clean up Junk files & improve performance, without you having to do it manually every time.',
    ],
    tags: [
      { name: 'C#' },
      { name: '.NET' },
      { name: 'WPF' },
    ],
  },
};
