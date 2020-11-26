import { render } from 'react-dom'
import styled from 'astroturf'

const Title = styled.h1`
  color: #c00;
`

let App = () => <Title>Red</Title>

render(<App />, document.body)
