import React from 'react'
import styled from 'styled-components'

import Title from './../../components/Title'
import Copy from './../../components/Copy'

const ImageText = styled.div`
  display: flex;
  flex-direction: ${props => props.alt ? 'row-reverse' : 'row'};
  justify-content: space-around;
  align-items: center;
  align-content: center;
  height: 440px;
  margin-bottom: 115px;

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 900px) {
    display: block;
    height: auto;
    margin-bottom: 80px;
    transition: all 0.3s ease-out;
  }
`

const ImageComp = styled.div`
  height: 100%;
  width: 45%;
  border: 3px solid black;
  position: relative;
  @media (max-width: 900px) {
    width: 66.6%;
    margin: 0 auto;
    margin-bottom: 3em;
    transition: all .3s ease-in-out;
  }
  @media (max-width: 750px) {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 3em;
    transition: all .3s ease-in-out;
  }
  @media (max-width: 500px) {
    width: 90%;
    transition: all .3s ease-in-out;
  }
`

const ImageImage = styled.img`
  height: 100%;
  width: 100%;
  border: 3px solid black;

  position: absolute;
  ${'' /* top: 10px;
  left: 10px; */}
  left: ${props => props.alt ? '' : '10px'};
  top: ${props => props.alt ? '15px' : '15px'};
  right: ${props => props.alt ? '15px' : '0'};

  @media (max-width: 900px) {
    width: 100%;
    position: relative;
    transition: all 3s ease;
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
    transition: all 3s ease;
  }
`

export default class ImageTextComp extends React.Component {
  render () {
    return (
      <ImageText alt={this.props.alt}>
        <ImageComp>
          <ImageImage alt={this.props.alt} src={this.props.src} srcSet={this.props.src + ' 1x, ' + this.props.src2x + ' 2x'} />
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
