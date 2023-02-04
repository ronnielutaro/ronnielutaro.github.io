import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { ProjectData } from '../types/portfolioData'

const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getSingleProject(slug: string) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...(matterResult.data as { 
      title: string; 
      uri: string; 
      featured: boolean; 
      type: string; 
      tools: string[];
      viewOrder: number;
      thumb: string; 
    })
  }
}

export async function getAllProjects(): Promise<Array<ProjectData>> {
  const allProjectSlugs = getAllProjectSlugs();
  const allProjectsData = [];

  // This loop iterates over all project slugs, fetches data for each project and 
  // transforms the data into a uniform object, which is then added to the allProjectsData array.
  for (const projectSlug of allProjectSlugs) {
    const projectData = await getSingleProject(projectSlug.params.slug);
    const projectDataObject = {
      title: projectData.title,
      uri: projectData.slug,
      featured: projectData.featured,
      type: projectData.type,
      tools: projectData.tools,
      viewOrder: projectData.viewOrder,
      thumb: projectData.thumb,
    };
    allProjectsData.push(projectDataObject);
  }

  return allProjectsData;
}