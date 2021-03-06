import React from 'react'
import styled from 'styled-components'

// import Img from 'gatsby-image'
import Title from './../../components/Title'
import Copy from './../../components/Copy'

const ImageText = styled.div`
  display: flex;
  flex-direction: ${props => props.alt ? 'row-reverse' : 'row'};
  justify-content: space-around;
  align-items: center;
  align-content: center;
  min-height: 440px;
  height: 440px;
  margin-bottom: 145px;

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
  height: 440px;
  width: 440px;
  border: 3px solid black;
  position: relative;
  transition: all .3s ease-in-out;
  @media (max-width: 900px) {
    ${'' /* width: 66.6%; */}
    margin: 0 auto;
    margin-bottom: 3em;
  }
  @media (max-width: 750px) {
    ${'' /* width: 70%; */}
    height: auto;
  }
  @media (max-width: 500px) {
    width: 90%;
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
  justify-content: flex-start;
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
          <Copy>{this.props.para1}  </Copy>
          <Copy>{this.props.para2}</Copy>
        </CopyComp>
      </ImageText>
    )
  }
}
