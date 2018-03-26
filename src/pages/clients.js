import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import BannerComp from './../components/Banner'
import { Wrap } from './../components/Wrap'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import TestimonialComp from './../components/Testimonials'
import ClientIconsComp from './../components/ClientIcons'
import FooterComp from './../components/Footer'

import squad from './../images/squad.jpg'
import squad2x from './../images/squad@2x.jpg'
import clientsBackground from './../images/clientsHero.jpg'
import clientsBackground2x from './../images/clientsHero@2x.jpg'

export default class Clients extends React.Component {
  render () {
    return (
      <div>
        <BannerComp background={clientsBackground} background2x={clientsBackground2x} />
        <Wrap className='Wrap'>
          <HeaderComp />
          <ImageTextComp src={squad} src2x={squad2x} title='Clients' para1='A forward-looking, sound production collective based in North London. We provide technical and creative services for the ever changing music industry.' para2='Adapting our skill set to best suit the client’s needs. Our team believes creating a professional, yet socially interactive and fun working environment ultimately achieves the best result for everyone involved.' />
          <TestimonialComp />
          <ClientIconsComp />
        </Wrap>
        <FooterComp />
      </div>
    )
  }
}
