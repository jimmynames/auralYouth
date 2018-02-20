import React from 'react'
import styled from 'styled-components'

import Title from './../../components/Title'
import Copy from './../../components/Copy'

const ImageText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 440px;
  max-height: 100vh;
  margin-bottom: 115px;

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`

const ImageComp = styled.div`
  height: 100%;
  width: 45%;
  border: 3px solid black;
  position: relative;
  display: block;
  @media (max-width: 900px) {
    width: 66.6666%;
    margin-bottom: 130px;
  }
`

const ImageImage = styled.img`
  height: 100%;
  width: 100%;
  border: 3px solid black;

  position: absolute;
  top: 10px;
  left: 10px;

  @media (max-width: 900px) {
    width: 100%;
  }
`

const CopyComp = styled.div`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export default class ImageTextComp extends React.Component {
  render () {
    return (
      <ImageText>
        <ImageComp>
          <ImageImage src={this.props.src} srcSet={this.props.src + ' 1x, ' + this.props.src2x + ' 2x'} />
        </ImageComp>
        <CopyComp>
          <Title>{this.props.title}</Title>
          <Copy>A forward-looking, sound production collective based in North
            London. We provide technical and creative services for the ever c
            hanging music industry.  
          </Copy>
          <Copy>adapting our skill set to best suit the
            client’s needs. Our team believes creating a professional, yet
            socially interactive and fun working environment ultimately achieves
             the best result for everyone involved!</Copy>
        </CopyComp>
      </ImageText>
    )
  }
}
