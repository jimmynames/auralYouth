import React from 'react'
import styled from 'styled-components'
import { Wrap } from './../components/Wrap'

const Four = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: black;
`

const Oh = styled.h1`
  font-size: 166.6px;
  color: white;
  font-family: 'Lato', sans-serif;
`
export default class FourOhFour extends React.Component {
  render () {
    return (
      <Four>
        <Wrap>
          <Oh>404</Oh>
        </Wrap>
      </Four>
    )
  }
}
