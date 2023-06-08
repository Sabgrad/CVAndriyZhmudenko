import React, { ReactNode } from 'react'
import SvgWrapper from '../../SvgWrapper/SvgWrapper'
import styles from './LinkList.module.sass'

type LinkListProps = {
  link: string
  title: string
  image: ReactNode
}

const LinkList: React.FC<LinkListProps> = ({ link, title, image }) => {

  return (
      <li className={styles.li}>
        <SvgWrapper link={link}>
          {image}
        </SvgWrapper>
        {title}
      </li>
  )
}

export default LinkList
