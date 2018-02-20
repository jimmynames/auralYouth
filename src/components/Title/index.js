import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  -webkit-margin-before: 0;
-webkit-margin-after: 0;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-family: Lato-Bold;
  font-size: 40px;
  ${'' /* font-size: ${props => props.theme.header}; */}
  color: #000000;
  ${'' /* background: ${props => props.theme.background} */}
  letter-spacing: -0.07px;
  margin-bottom: 50px;
`
export default Title
