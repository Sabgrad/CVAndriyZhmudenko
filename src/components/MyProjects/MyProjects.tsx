import React, { } from 'react'
import { projects } from '../../assets/data'
import Project from './Project/Project'

export type MyProjectProps = {

}

const MyProject: React.FC<MyProjectProps> = ({ }) => {


  return (
    <>
      {projects.map((project) =>
        <Project key={project.link} project={project} />
      )}
    </>

  )
}

export default MyProject