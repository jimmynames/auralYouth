import React from 'react'
import styled from 'styled-components'
// import Sticky from 'react-stickynode'
import Navigation from './../../components/Navigation'


const Banner = styled.div`
  height: 100vh;
  background: black;
  ${'' /* background: ${props => props.theme.background}; */}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-image: url(${props => props.background})}};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  padding: 0 !important;

  @media
  (-webkit-min-device-pixel-ratio: 2),
  (min-resolution: 192dpi) {
    background-image: url(${props => props.background2x})}} !important;
  }
`

const Empty = styled.div``

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  #Stroke-6 {
    stroke-width: 14px;
  }
`

// const StickyNavWrapper = styled.div`
//   div {
//     &:first-child,
//     &:nth-child(2) {
//        width: 0px;
//     }
//   }
// `

// const handleStateChange = (status) => {
//     if (status.status === Sticky.STATUS_FIXED) {
//         console.log('JIMMY >>>>>> the component is sticky')
//     }
// }

// inline background style image style={{ backgroundImage: `url(${this.props.background})`}}

export default class BannerComp extends React.Component {
  render () {
    return (
      <Banner id="banner" background2x={this.props.background2x} background={this.props.background} >
        <Empty />
        <Logo>
          <svg width="210px" height="210px" viewBox="0 0 210 210" version="1.1">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Home-page" transform="translate(-546.000000, -174.000000)">
                      <g id="logo" transform="translate(546.000000, 174.000000)">
                          <path d="M65.9621475,85.1385198 L80.1021095,54.5390208 L94.3610158,85.1385198 L65.9621475,85.1385198 Z M156.13688,95.9498561 L133.727792,144.015903 L111.318704,95.9498561 L111.271752,95.9498561 L80.1021095,29 L39,117.543579 L50.8637456,117.543579 L60.9276775,95.9800642 L99.3954858,95.9800642 L109.461296,117.543579 L109.535792,117.543579 L127.85633,156.785728 L116.591062,181 L128.454808,181 L168,95.9498561 L156.13688,95.9498561 Z" id="Fill-1" fill="#FFFFFF"></path>
                          <g id="Group-4">
                              <mask id="mask-2" fill="white">
                                <polygon id="path-1" points="0.000251497006 0.442005988 209.558246 0.442005988 209.558246 209.999749 0.000251497006 209.999749"></polygon>
                              </mask>
                              <g id="Clip-3"></g>
                              <path d="M104.779563,10.6607066 C52.6385749,10.6607066 10.2192036,53.0800778 10.2192036,105.221066 C10.2192036,157.361425 52.6385749,199.780796 104.779563,199.780796 C156.919922,199.780796 199.339922,157.361425 199.339922,105.221066 C199.339922,53.0800778 156.919922,10.6607066 104.779563,10.6607066 M104.779563,209.999749 C47.0037844,209.999749 0.000251497006,162.996216 0.000251497006,105.221066 C0.000251497006,47.4452874 47.0037844,0.441754491 104.779563,0.441754491 C162.555341,0.441754491 209.558246,47.4452874 209.558246,105.221066 C209.558246,162.996216 162.555341,209.999749 104.779563,209.999749" id="Fill-2" fill="#FFFFFF" mask="url(#mask-2)"></path>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
        </Logo>

        {/* <StickyNavWrapper>
        <Sticky top={50} bottomBoundary='#footer' onStateChange={handleStateChange}>
          <Navigation />
        </Sticky>
      </StickyNavWrapper> */}

        <Navigation />

      </Banner>
    )
  }
}
