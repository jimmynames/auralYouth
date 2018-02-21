import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import BannerComp from './../components/Banner'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import TestimonialComp from './../components/Testimonials'

import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'
import aboutBackground from './../images/dude.jpg'
import aboutBackground2x from './../images/dude@2x.jpg'

const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
	@media (max-width: 900px) {
		padding-left: 5%;
		padding-right: 5%;
	}
`

export default class Clients extends React.Component {
  render () {
    return (
      <div>
        <BannerComp background={aboutBackground} />
        <Wrap className="Wrap">
        <HeaderComp />
        <ImageTextComp src={dude} src2x={dude2x} title='Clients' para1="A forward-looking, sound production collective based in North London. We provide technical and creative services for the ever changing music industry." para2='Adapting our skill set to best suit the client’s needs. Our team believes creating a professional, yet socially interactive and fun working environment ultimately achieves the best result for everyone involved!' alt />
        <TestimonialComp />
        </Wrap>
      </div>
    )
  }
}
