import React from 'react'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'

import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'

export default class Services extends React.Component {
  render () {
    return (
      <div>
        <HeaderComp />
        <ImageTextComp src={dude} src2x={dude2x} title='hhhhhhhh'  />
        <ImageTextComp src={dude} src2x={dude2x} title='Clients' alt />
        <ImageTextComp src={dude} src2x={dude2x} title='Clients' />
      </div>
    )
  }
}
