import React, { useEffect, useRef } from "react"
import styles from './ToolList.module.sass'
import { Stack } from "../../../assets/data"
import { useHover } from "../../../hooks/useHover"
import classNames from "classnames"

type ToolListProps = {
  stack: Stack
}

const ToolList: React.FC<ToolListProps> = ({ stack }) => {



  const titleRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLDivElement | null>(null)

  const [isHover] = useHover(titleRef)

  useEffect(() => {
    const node = barRef.current?.childNodes as HTMLDivElement[] | undefined

    if (node) {
      node.forEach((div, index) =>
        index <= stack.lvl - 1 ? div.className = styles.active : null
      )
    }
  }, [barRef.current])

  return (
    <li className={styles.li}>
      <span ref={titleRef} className={styles.tool_title}>{stack.title}</span>
      <div ref={barRef} className={isHover ? classNames(styles.bar, styles.isHover) : styles.bar}>
        <div /><div /><div /><div /><div />
        <div /><div /><div /><div /><div />
      </div>
    </li>
  )
}

export default ToolList