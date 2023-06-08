import React, { useRef } from "react"
import styles from './Project.module.sass'
import { ProjectType } from "../../../assets/data"
import { useHover } from "../../../hooks/useHover"
import classNames from "classnames"
import SvgWrapper from "../../SvgWrapper/SvgWrapper"

type ProjectProps = {
  project: ProjectType
}

const Project: React.FC<ProjectProps> = ({ project }) => {

  const sectionRef = useRef<HTMLElement>(null)

  const [isHover] = useHover(sectionRef)

  return (
    <section
      ref={sectionRef}
      className={isHover ? classNames(styles.section, styles.current) : styles.section}
      key={project.link}
    >
      <SvgWrapper link={project.link}>
        {project.image}
      </SvgWrapper>
      <p className={styles.title}>{project.title}</p>
      {isHover ? <ProjectBody description={project.description} tools={project.tools} /> : null}
    </section>
  )
}

export default Project

const ProjectBody: React.FC<Pick<ProjectType, 'description' | 'tools'>> = ({ description, tools }) => {

  return (
    <div className={styles.body}>
      <span className={styles.description}>{description}</span>
      <span className={styles.tools}>{tools.join(', ')}</span>
    </div>
  )
}