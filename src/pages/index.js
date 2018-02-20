import React from 'react'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import FooterComp from './../components/Footer'

import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <HeaderComp />

        <ImageTextComp src={dude} src2x={dude2x} title="Lol" alt />
        <ImageTextComp src={dude} src2x={dude2x} title="2222222" />

      </div>
    )
  }
}
