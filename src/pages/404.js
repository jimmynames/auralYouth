import React from 'react'
import styled from 'styled-components'

const Four = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: white;
`

const Oh = styled.h1`
  font-size: 166.6px;
  color: black;
  font-family: 'Lato', sans-serif;
`
export default class FourOhFour extends React.Component {
  render () {
    return (
      <Four>
        <Oh>404</Oh>
      </Four>
    )
  }
}
