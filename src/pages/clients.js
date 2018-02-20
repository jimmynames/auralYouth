import React from 'react'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import TestimonialComp from './../components/Testimonials'

import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'

export default class Clients extends React.Component {
  render () {
    return (
      <div>
        <HeaderComp />

        <ImageTextComp src={dude} src2x={dude2x} title="Clients" alt />

        <TestimonialComp />
      </div>
    )
  }
}
