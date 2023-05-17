import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

const StyledSpan = styled.span`
  color: yellow;
`

const Span: FC<Props> = ({text}) => {
  return <StyledSpan>{text}</StyledSpan>
}

export default Span
