import React from 'react'
import styled from 'styled-components'

import Title from './../../components/Title'
import Copy from './../../components/Copy'


export default class Testimonial extends React.Component {
  render () {
    return (

        <Copy>{this.props.quote}
          <br /><strong>{this.props.source}</strong>
        </Copy>
    )
  }
}
