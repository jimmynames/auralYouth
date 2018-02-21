import React from 'react'
import styled from 'styled-components'

import Title from './../../components/Title'

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const Header = styled.div`
  width: 75%;
  text-align: center;

  margin-bottom: 120px;
  margin-top: 90px;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const SVG = styled.svg`
  width: 100%;

  #Line-2,
  #Line-2-Copy {
    stroke-width: 2px;
  }
`

export default class HeaderComp extends React.Component {
  render () {
    return (
      <HeaderWrapper>
        <Header>
          <Title>Technical and creative audio services for  the modern music industy.</Title>

          <SVG width="485px" height="35px" viewBox="0 0 485 35" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Home-page" transform="translate(-408.000000, -797.000000)">
                      <g id="break" transform="translate(409.000000, 797.000000)">
                          <g id="Line-break" transform="translate(223.000000, 0.000000)" fill="#000000" fill-rule="nonzero">
                              <g id="noun_1187329">
                                  <path d="M22.7586207,35 C22.4482759,35 22.137931,34.7635135 22.0344828,34.4087838 L13.0344828,3.66554054 L9,17.7364865 C8.89655172,18.0912162 8.5862069,18.3277027 8.27586207,18.3277027 L0.827586207,18.3277027 C0.413793103,18.3277027 0,17.972973 0,17.3817568 C0,16.7905405 0.310344828,16.4358108 0.827586207,16.4358108 L7.75862069,16.4358108 L12.4137931,0.472972973 C12.4137931,0.236486486 12.7241379,0 13.137931,0 C13.5517241,0 13.7586207,0.236486486 13.862069,0.591216216 L22.862069,31.3344595 L27,17.2635135 C27.1034483,16.9087838 27.4137931,16.6722973 27.7241379,16.6722973 L35.1724138,16.6722973 C35.5862069,16.6722973 36,17.027027 36,17.6182432 C36,18.2094595 35.6896552,18.5641892 35.1724138,18.5641892 L28.2413793,18.5641892 L23.5862069,34.527027 C23.3793103,34.7635135 23.1724138,35 22.7586207,35 Z" id="Shape"></path>
                              </g>
                          </g>
                          <path d="M0.386281588,17 L213.613718,17" id="Line-2" stroke="#000000" stroke-width="2" stroke-linecap="square"></path>
                          <path d="M269.386282,17 L482.613718,17" id="Line-2-Copy" stroke="#000000" stroke-width="2" stroke-linecap="square"></path>
                      </g>
                  </g>
              </g>
          </SVG>
        </Header>
      </HeaderWrapper>

    )
  }
}
