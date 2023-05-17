import { FC } from 'react'
import styled from 'styled-components'
import Span from './Span'

interface Props {
  text: string
  imgsrc?: string
  imgalt?: string
}

const StyledSection = styled.section`
  background-color: red;
  height: 30px;
`

const Section: FC<Props> = ({text}) => {
  return (
    <StyledSection>
      <Span text={text}/>
    </StyledSection>
  )
}

export default Section