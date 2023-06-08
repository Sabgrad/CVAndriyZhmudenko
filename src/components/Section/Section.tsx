import React, { } from 'react'
import styles from './Section.module.sass'
import { SectionDataItemType } from '../../assets/data'
import MyProjects from '../MyProjects/MyProjects'
import About from '../About/About'
import classNames from 'classnames'

export type SectionProps = {
  data: SectionDataItemType
}

export const Section: React.FC<SectionProps> = ({ data }) => {

 

  const classNameSection = () => {
    if(data.type === 'project') {
      return classNames(styles.section, styles.project)
    } if (data.type === 'about') {
      return classNames(styles.section, styles.about)
    } 
    else return styles.section
  }

  return (
    <section className={classNameSection()}>
      <div className={styles.body_container}>
        {data.type === 'about' ? <About data={data}/> : null}
        {data.type === 'project' ? <MyProjects /> : null}
      </div> 
    </section>
  )
}