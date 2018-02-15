import React from 'react'
import styled from 'styled-components'
// import Page from './../components/Page'

const Page = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export default class Index extends React.Component {
  render () {
    return (
      <Page />
    )
  }
}
