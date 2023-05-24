import me from '../assets/Image/me.jpg'
import way from '../assets/Image/way.jpg'
import my_projects from '../assets/Image/my_projects.webp'
import goals from '../assets/Image/goals.png'

export type SectionDataItemType = {
  imgLink: string
  title: string
  text: string
  project: boolean
}

export type ProjectType = {
  link: string
  description: string
}

export const sectionData: SectionDataItemType[] = [
  {
    imgLink: me,
    title: 'first section',
    text: 'first section text',
    project: false
  },
  {
    imgLink: way,
    title: 'second section',
    text: 'second section text',
    project: false
  },
  {
    imgLink: my_projects,
    title: 'third section',
    text: 'third section text',
    project: true
  },
  {
    imgLink: goals,
    title: 'four section',
    text: 'four section text',
    project: false
  }
]

export const projects: ProjectType[] = [
  {
    link: 'github link 1',
    description: 'descriptiom 1',
  },
  {
    link: 'github link 2',
    description: 'descrtiption 2',
  },
  {
    link: 'github link 3',
    description: 'descritpion 3',
  },
  {
    link: 'github link 4',
    description: 'descritpion 4 ',
  },
  {
    link: 'githublink 5',
    description: 'descritpion 5',
  },
  {
    link: 'githublink 6',
    description: 'descritpion 6',
  }
]