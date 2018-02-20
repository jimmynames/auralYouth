import styled from 'styled-components'

const Copy = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  color: #000000;
  letter-spacing: -0.03px;
  line-height: 32px;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  margin-bottom: 32px;

  @media (max-width:589px) {
    font-size: 18px;
  }
  @media (max-width:453px) {
    font-size: 16px;
  }
`

export default Copy
