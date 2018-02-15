import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 616px ) {}
`

export default class Index extends React.Component {
  render () {
    return (
      <Page />
    )
  }
}
