import React, { useState } from 'react'
import styles from './Section.module.sass'
import { SectionDataItemType } from '../../assets/SectionData'
import MyProject from '../MyProjects/MyProject'

export type SectionProps = {
  data: SectionDataItemType
}

export const Section: React.FC<SectionProps> = ({ data }) => {

  const [active, setActive] = useState(false)

  const handleActive = () => {
    setActive(prev => !prev)
  }

  return (
    <section className={styles.section}>
      <div className={styles.img_container}>
        <img src={data.imgLink} alt={data.imgLink} />
      </div>
      <p className={styles.title}>
        {data.title}
      </p>
      <div className={styles.body_container}>
        <span className={styles.text}>
          {data.text}
        </span>
        {data.project ? <button onClick={handleActive}>show project</button> : null}
        {active ? <MyProject handleActive={handleActive}/> : null}
      </div>
    </section>
  )
}