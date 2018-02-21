import React from 'react'
import styled, {ThemeProvider} from 'styled-components'

import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import BannerComp from './../components/Banner'
import aboutBackground from './../images/dude.jpg'
import aboutBackground2x from './../images/dude@2x.jpg'
import dude from './../images/dude.jpg'
import dude2x from './../images/dude@2x.jpg'

const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
	@media (max-width: 900px) {
		padding-left: 5%;
		padding-right: 5%;
	}
`

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <BannerComp background={aboutBackground} />
        <Wrap className="Wrap">
        <HeaderComp />
        <ImageTextComp src={dude} src2x={dude2x} title='About' para1='A forward-looking, sound production collective based in North London. We provide content production and technical services for the ever changing music industry, adapting our skill set to best suit the client’s needs. Go to the “Services” section of our website to see what we have to offer.
' />
        <ImageTextComp alt src={dude} src2x={dude2x} title='Bio' para1='After both graduating with BA (Hons) in music performing in a variety of musical acts and working in different areas of the music industry; Benjamin Nash and Matt Noades founded Aural Youth with the ambition to record/produce up and coming bands.' para2='With the desire to create a scene that helped exhibit the talent of the musical youth of today, the company eventually evolved into a fully fledged sound production company. Now a dedicated team of engineers and producers, we believe in creating a professional yet enjoyable work environment to maximise the best possible results for everyone involved.' />
        </Wrap>
      </div>
    )
  }
}
