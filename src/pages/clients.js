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
          <ImageTextComp src={squad} src2x={squad2x} title='Clients' para1='We have formed working relationships with a variety of different companies in our time, please see some examples below.' para2='' />
          <TestimonialComp />
          <ClientIconsComp />
        </Wrap>
        <FooterComp />
      </div>
    )
  }
}
