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

        <ImageTextComp src={dude} src2x={dude2x} title='Clients' para1="A forward-looking, sound production collective based in North London. We provide technical and creative services for the ever changing music industry." para2='Adapting our skill set to best suit the client’s needs. Our team believes creating a professional, yet socially interactive and fun working environment ultimately achieves the best result for everyone involved!' alt />

        <TestimonialComp />
      </div>
    )
  }
}
