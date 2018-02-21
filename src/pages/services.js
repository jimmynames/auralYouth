import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import BannerComp from './../components/Banner'
import { Wrap } from './../components/Wrap'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'

import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'
import aboutBackground from './../images/dude.jpg'
import aboutBackground2x from './../images/dude@2x.jpg'

export default class Services extends React.Component {
  render () {
    return (
      <div>
        <BannerComp background={aboutBackground} />
        <Wrap className="Wrap">
        <HeaderComp />
        <ImageTextComp src={dude} src2x={dude2x} title='Live content production' para1="At the forefront of our workload, we specialise in the audio recording of live content for online promotion. Whether it’s a gig, live video session or other creative concept, we will work with you to capture your live “Vibe” and produce it to a professional standard." para2='For the complete audio & visual package, we have a unique relationship with ROPO films;  a video production team whom we have worked with extensively to create a wide range of creative content. Please feel free to contact us for our different services and rates.'  />
        <ImageTextComp src={dude} src2x={dude2x} title='Studio based recording and  production' para1='Our true passion, we love to record and produce acts in the studio environment! Let us help you create, record and produce your musical vision to the best quality it can be.' para2='We have access to our own studio, we can come to a studio of your choice - or for the more ambitious projects we can turn various spaces into a recording studio.' alt />
        <ImageTextComp src={dude} src2x={dude2x} title='Sound engineering & location recording' para1='We have a whole team of dedicated engineers under our belt, and can cater to your live, pre and post production engineering needs.' para2=' Furthermore, we have worked with film and advertising companies for location audio recording for video. Whatever your needs, get in touch.' />
        </Wrap>
      </div>
    )
  }
}
