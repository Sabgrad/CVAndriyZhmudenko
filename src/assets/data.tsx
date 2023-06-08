import me from '../assets/Image/me.jpg'
import way from '../assets/Image/way.jpg'
import my_projects from '../assets/Image/my_projects.webp'
import goals from '../assets/Image/goals.png'
import { ReactNode } from 'react'
import { ReactComponent as ToDo } from '../assets/svg/ToDo.svg'
import { ReactComponent as SpotifyLogo } from '../assets/svg/spotify.svg'
import { ReactComponent as Mod } from '../assets/svg/modifications.svg'
import { ReactComponent as Linkedin } from '../assets/svg/linkedin.svg'
import { ReactComponent as GitHub } from '../assets/svg/github.svg'

export type SectionDataItemType = {
  imgLink: string
  title: string
  text: string
  type: boolean | string
}

export const sectionData: SectionDataItemType[] = [
  {
    imgLink: me,
    title: 'first section',
    text: 'first section text',
    type: 'about'
  },
  {
    imgLink: way,
    title: 'second section',
    text: 'second section text',
    type: false
  },
  {
    imgLink: my_projects,
    title: 'third section',
    text: 'third section text',
    type: 'project'
  },
  {
    imgLink: goals,
    title: 'four section',
    text: 'four section text',
    type: false
  }
]

export type ProjectType = {
  link: string
  title: string
  description: string
  tools: string[]
  image: ReactNode
}

export const projects: ProjectType[] = [
  {
    link: 'https://github.com/Sabgrad/spotify',
    title: 'My first project copy of Spotify',
    description: 'Here i was try my knowledge after learning js and react',
    tools: ['React', 'JavaScript', 'RestAPI', 'Axios', 'ContextApi', 'React Router Dom', 'CSSModule'],
    image: <SpotifyLogo />,
  },
  {
    link: 'https://github.com/Sabgrad/todo',
    title: 'My second project. Small ToDo List',
    description: 'here i was try first time typescript and reduxtoolkit',
    tools: ['React', 'TypeScript', 'ReduxToolkit', 'CSSModule'],
    image: <ToDo />,
  },
  {
    link: 'https://github.com/READYTOMASSACRE/league-rage',
    title: 'Worked on a mod for GTA 5',
    description: 'worked in small team on mod for gta 5 using RageApi',
    tools: ['React', 'TypeScript', 'SASS', 'Parcel', 'GitHub and GitLab'],
    image: <Mod />,
  },
  {
    link: 'https://github.com/Sabgrad/spotify2',
    title: 'Rewrote the first project using new tools',
    description: 'using this project for improve my TS an ReduxToolkit',
    tools: ['React', 'TypeScript', 'ReduxToolkit', 'RTKQuery', 'SASS', 'Vite', 'React Router Dom'],
    image: <SpotifyLogo />,
  },
]

export type Stack = {
  title: string
  lvl: number
}

export type AboutType = {
  img: string
  name: string
  date: string
  city: string
  education: string
  about_me: string
  links: {
    image: ReactNode
    title: string
    link: string
  }[]
  stack: Stack[]
}

export const about: AboutType = {
  img: me,
  name: 'Zhmudenko Andriy',
  date: '10.11.1999',
  city: 'Dnipro, Ukraine',
  education: 'bakalavr UMSF',
  about_me: 'Hodyachii Prekol',
  links: [
    {
      image: <Linkedin />,
      title: 'Linkedin',
      link: 'https://www.linkedin.com/in/andriy-zhmudenko-a99211246/'
    },
    {
      image: <GitHub />,
      title: 'Github',
      link: 'https://github.com/Sabgrad'
    },
  ],
  stack: [
    {title: 'React', lvl: 6},
    {title: 'JavaScript', lvl: 6},
    {title: 'TypeScript', lvl: 3},
    {title: 'ReduxToolkit', lvl: 4},
    {title: 'CSS', lvl: 6},
    {title: 'HTML', lvl: 6},
    {title: 'SASS', lvl: 5},
    {title: 'React Router Dom', lvl: 3},
    {title: 'Next.js', lvl: 1},
    {title: 'styled-components', lvl: 1},
  ],
}