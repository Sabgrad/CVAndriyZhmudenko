import React, { useEffect, useRef, useState } from 'react'
import styles from './MyProject.module.sass'
import { projects } from '../../assets/data'
import cn from 'classnames'

export type MyProjectProps = {
  handleActive: () => void
}

const MyProject: React.FC<MyProjectProps> = ({ handleActive }) => {

  const [current, setCurrent] = useState<number>(0)
  const [size, setSize] = useState<number>(0)

  const refProjectList = useRef<HTMLDivElement>(null)

  // const size: number = useMemo(() => {
  //   let size = 0
  //   if (refProjectList.current) {
  //     size = refProjectList.current.children.length
  //   }
  //   return size
  // }, [refProjectList])

  const handleScroll = (onTop: boolean) => {
    if (onTop) {
      if (current !== 0) {
        setCurrent(prev => prev - 1)
      }
    } else {
      if (current !== size - 1) {
        setCurrent(prev => prev + 1)
      }
    }
  }

  // current === size - 1 ? false : true

  useEffect(() => {
    if (refProjectList.current) {
      let children = Array.from(refProjectList.current.children) as HTMLElement[]
      setSize(children.length)
      children.forEach((item, index) =>
        index === current ?
          (
            item.className = cn(styles.project_section, styles.current),
            item.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
          )
          :
          item.className = cn(styles.project_section)
      )
    }
  }, [current])

  return (
    <div className={styles.container}>
      <button
        onClick={handleActive}
        className={styles.close_btn}
      >
        X
      </button>
      <button
        className={styles.scroll_top}
        onClick={() => handleScroll(true)}
      >
        T
      </button>
      <button
        className={styles.scroll_bottom}
        onClick={() => handleScroll(false)}
      >
        B
      </button>
      <div
        className={styles.project_container}
        ref={refProjectList}
      >
        {
          projects.map((project, index) =>
            <section
              key={project.link}
              onClick={() => setCurrent(index)}
            >
              <span>
                {project.link}
              </span>
              <span>
                {project.description}
              </span>
              <ul className={styles.tools}>
                {
                  project.tools.map((tool, index) =>
                    <li key={index}>
                      {tool}
                    </li>
                  )}

              </ul>
            </section>
          )
        }
      </div>

    </div>
  )
}

export default MyProject
