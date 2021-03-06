import React from 'react'

import BannerComp from './../components/Banner'
import { Wrap } from './../components/Wrap'
import HeaderComp from './../components/Header'
import ImageTextComp from './../components/ImageText'
import FooterComp from './../components/Footer'

import aboutBackground from './../images/aboutHero.jpg'
import aboutBackground2x from './../images/aboutHero@2x.jpg'
import keys from './../images/keys.jpg'
import keys2x from './../images/keys@2x.jpg'
import dudes from './../images/dudes2.jpg'
import dudes2x from './../images/dudes2@2x.jpg'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <BannerComp background={aboutBackground} background2x={aboutBackground2x} />
        <Wrap className='Wrap'>
          <HeaderComp />
          <ImageTextComp
            src={keys}
            src2x={keys2x}
            title='About'
            para1="A forward-looking, sound production collective based in North London. We provide content production and technical services for the ever changing music industry, adapting our skill set to best suit the client's needs. Go to the 'Services' section of our website to see what we have to offer." />
          <ImageTextComp
            alt
            src={dudes}
            src2x={dudes2x}
            title='Bio'
            para1='After both graduating with BA (Hons) in music performing in a variety of musical acts and working in different areas of the music industry, Benjamin Nash and Matt Noades founded Aural Youth with the ambition to record and produce up and coming acts.'
            para2='With the desire to create a scene that helped exhibit the talent of the musical youth of today, the company eventually evolved into a fully fledged sound production company. Now a dedicated team of engineers and producers, we believe in creating a professional yet enjoyable work environment to maximise the best possible results for everyone involved.' />
        </Wrap>
        <FooterComp />
      </div>
    )
  }
}
