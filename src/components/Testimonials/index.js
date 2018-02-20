import React from 'react'
import styled from 'styled-components'

import Title from './../../components/Title'
import Copy from './../../components/Copy'

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
          <Copy>“Aural Youth have been instrumental in implementing and running the Production at The Ned and have proved themselves to be a valuable part of our in-house team, delivering over 100 shows a Month.”
          <br /><strong>Dom Chung, Head of Entertainment & Production at The Ned</strong></Copy>

          <Copy>“Aural Youth have been instrumental in implementing and running the Production at The Ned and have proved themselves to be a valuable part of our in-house team, delivering over 100 shows a Month.”
          <br /><strong>Dom Chung, Head of Entertainment & Production at The Ned</strong></Copy>

          <Copy>“Aural Youth have been instrumental in implementing and running the Production at The Ned and have proved themselves to be a valuable part of our in-house team, delivering over 100 shows a Month.”
          <br /><strong>Dom Chung, Head of Entertainment & Production at The Ned</strong></Copy>
        </Testimonials>
      </TestimonialWrapper>
    )
  }
}
