import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import BannerComp from './../components/Banner'
import { Wrap } from './../components/Wrap'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import FooterComp from './../components/Footer'

import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'
import buttons from './../images/buttons.jpg'
import buttons2x from './../images/buttons@2x.jpg'
import amp from './../images/amp.jpg'
import amp2x from './../images/amp@2x.jpg'
import servicesBackground from './../images/servicesHero.jpg'
import servicesBackground2x from './../images/servicesHero@2x.jpg'

const CTA = styled.a`
  background: white;
  border: 2px solid black;
  padding: 32px 16px;
  width: auto;
  max-width: 20em;
  text-align: center;
  text-decoration: none;
  display: block;
  margin: 2em auto;
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 1.17em;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
  color: black;
  transition: all 0.3s ease-in-out;
  margin-bottom: 6.66em;
  &:hover {
    color: white;
    background: black;
  }
`

export default class Services extends React.Component {
  render () {
    return (
      <div>
        <BannerComp background={servicesBackground} background2x={servicesBackground2x} />
        <Wrap className='Wrap'>
          <HeaderComp />
          <ImageTextComp src={dude} src2x={dude2x}
            title='Live content production'
            para1='At the forefront of our workload, we specialise in the audio recording of live content for online promotion. Whether it’s a gig, live video session or other creative concept, we will work with you to capture your live sound and produce it to a professional standard.'
            para2='For the complete audio & visual package, we have a unique relationship with ROPO films - a video production team whom we have worked with extensively to create a wide range of creative content. Please feel free to contact us for our different services and rates.' />
          <ImageTextComp src={buttons} src2x={buttons2x} title='Studio based recording and production' para1='Our true passion, we love to record and produce acts in the studio environment! Let us help you create, record and produce your musical vision to the best quality it can be.' para2='We have access to our own studio, we can come to a studio of your choice - or for the more ambitious projects we can turn various spaces into a recording studio.' alt />
          <ImageTextComp src={amp} src2x={amp2x} title='Sound engineering & location recording' para1='We have built a team of dedicated engineers who can cater to your live, pre and post production engineering needs.' para2='Furthermore, we have worked with film and advertising companies for location audio recording for video. Whatever your needs, get in touch.' />
          <CTA href="https://m.youtube.com/playlist?list=PLVjoksuGGfZIhKtfk-cGbGj2KhKRRsYti" rel='noopener' target='_blank'>Listen to our Work</CTA>
        </Wrap>
        <FooterComp />
      </div>
    )
  }
}
