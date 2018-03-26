import React from 'react'
import styled from 'styled-components'

import Title from './../../components/Title'
import Copy from './../../components/Copy'
import Testimonial from './../../components/Testimonial'

const TestimonialWrapper = styled.div`
  text-align: center;
  margin-bottom: 100px;
`

const Testimonials = styled.div`
  width: 78.5%;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export default class TestimonialComp extends React.Component {
  render () {
    return (
      <TestimonialWrapper>
        <Title>Testimonials</Title>
        <Testimonials>
          <Testimonial
            quote='“Aural Youth have been instrumental in implementing and running
            the Production at The Ned and have proved themselves to be a valuable
            part of our in-house team, delivering over 100 shows a Month."'
            source="Dom Chung, Head of Entertainment & Production at The Ned"
          />
          <Testimonial
            quote='Ben and Matt have been considerably influential in shaping the
             London Sofar Sounds scene and have ultimately helped set the standard
              for Sofar production quality worldwide. A real pleasure to work with!'
            source="Rafe Offer - Founder and Director of Sofar Sounds"
          />
          <Testimonial
            quote='Absolute pleasure working with Aural Youth over the years. A
             friendly, professional and reliable bunch who have saved us from chaos
              on many occasions and continue to make each show run smoothly even when
                it means getting pretty creative.'
            source="Adam Maestro - Head of booking at Sofar Sounds"
          />
        </Testimonials>
      </TestimonialWrapper>
    )
  }
}
