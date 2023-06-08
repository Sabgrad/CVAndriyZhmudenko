import React from 'react'
import styles from './About.module.sass'
import { about } from '../../assets/data'
import ToolList from './ToolList/ToolList'
import LinkList from './LinkList/LinkList'



type AboutProps = {

}

const About: React.FC<AboutProps> = ({ }) => {


  return (
    <>
      <img className={styles.img} src={about.img} alt={about.img} />
      <section className={styles.personal_info}>
        <span>{about.name}</span>
        <span>{about.date}</span>
        <span>{about.city}</span>
        <span>{about.education}</span>
      </section>
      <section className={styles.about_me}>
        {about.about_me}
      </section>
      <section className={styles.links}>
        <ul>
          {about.links.map((link) =>
            <LinkList link={link.link} title={link.title} image={link.image} />
          )}
        </ul>
      </section>
      <section className={styles.tools}>
        <span>{'My stack = {'}</span>
        <ul>
          {about.stack.map((tool) =>
            <ToolList key={tool.title} stack={tool} />
          )}
        </ul>
        <span>{'}'}</span>
      </section>
    </>
  )
}

export default About