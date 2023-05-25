import React from 'react'
import { Section } from './components/Section/Section'
import './styles/Global.sass'
import { sectionData } from './assets/data'

const App: React.FC = () => {

  return (
    <>
      {
        sectionData.map((item) => <Section data={item} key={item.title}/>)
      }
    </>
  )
}

export default App
