import React, { useEffect, useRef, useState } from 'react'
import styles from './MyProject.module.sass'
import { projects } from '../../assets/SectionData'
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
      if (current === 0) {
        setCurrent(size - 1)
      } else {
        setCurrent(prev => prev - 1)
      }
    } else {
      if (current === size - 1) {
        setCurrent(0)
      } else {
        setCurrent(prev => prev + 1)
      }
    }
  }

  useEffect(() => {
    if (refProjectList.current) {
      let children = Array.from(refProjectList.current.children) as HTMLElement[]
      setSize(children.length)
      children.forEach((item, index) =>
        index === current ?
          (item.className = cn(styles.project_section, styles.current), item.scrollIntoView(current === size - 1 ? false : true)) :
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
        className={styles.projects_container}
        ref={refProjectList}
      >
        {
          projects.map((project) =>
            <section
              key={project.link}
            >
              <span>
                {project.link}
              </span>
              <span>
                {project.description}
              </span>
            </section>
          )
        }
      </div>

    </div>
  )
}

export default MyProject
