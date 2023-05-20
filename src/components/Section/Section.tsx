import React from 'react'
import styles from './Section.module.sass'
import cn from 'classnames'

export type SectionProps = {
  text: string
}

export const Section: React.FC<SectionProps> = ({ text }) => {

  const sectionCn = cn(
    styles.section,
  )

  return (
    <section className={sectionCn}>
      {text}
    </section>
  )
}