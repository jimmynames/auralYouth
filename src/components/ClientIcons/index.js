import React from 'react'
import styled from 'styled-components'

import a from './../../images/clients/a.png'
import a2x from './../../images/clients/a@2x.png'
import bbc from './../../images/clients/bbc.png'
import bbc2x from './../../images/clients/bbc@2x.png'
import beggars from './../../images/clients/beggars.png'
import beggars2x from './../../images/clients/beggars@2x.png'
import craft from './../../images/clients/craft.png'
import craft2x from './../../images/clients/craft@2x.png'
import feeling from './../../images/clients/feeling.png'
import feeling2x from './../../images/clients/feeling@2x.png'
import ned from './../../images/clients/ned.png'
import ned2x from './../../images/clients/ned@2x.png'
import sofar from './../../images/clients/sofar.png'
import sofar2x from './../../images/clients/sofar@2x.png'

const ClientIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media (max-width: 1101px) {
    justify-content: center;
  }
`

const ClientIconsWrapper = styled.div`
  width: 88.5%;
  margin: 0 auto;
  margin-bottom: 90px;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const ClientIcon = styled.img`
  margin: 50px 35px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 585px) {
    margin-left: 100%;
    margin-right: 100%;

    &:first-child {
      margin-left: 100%;
    }
    &:last-child {
      margin-right: 100%;
    }
  }
`

export default class ClientIconsComp extends React.Component {
  render () {
    return (
      <ClientIconsWrapper>
        <ClientIcons>
          <ClientIcon src={sofar} srcSet={sofar + ' 1x, ' + sofar2x + ' 2x'} />
          <ClientIcon src={ned} srcSet={ned + ' 1x, ' + ned2x + ' 2x'} />
          <ClientIcon src={craft} srcSet={craft + ' 1x, ' + craft2x + ' 2x'} />
          <ClientIcon src={a} srcSet={a + ' 1x, ' + a2x + ' 2x'} />
          <ClientIcon src={bbc} srcSet={bbc + ' 1x, ' + bbc2x + ' 2x'} />
          <ClientIcon src={feeling} srcSet={feeling + ' 1x, ' + feeling2x + ' 2x'} />
          <ClientIcon src={beggars} srcSet={beggars + ' 1x, ' + beggars2x + ' 2x'} />
        </ClientIcons>
      </ClientIconsWrapper>
    )
  }
}
