import React from 'react'
import styled from 'styled-components'
// import Link from 'gatsby-link'
import Links from './../../components/Links'
import { Link } from 'react-scroll'

const NavMenu = styled.div`
  ${'' /* width: 100% !important; */}
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  a {
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    padding-bottom: 13px;

    list-style-type: none;
    margin-left: 3em;
    font-size: 1.17em;
    letter-spacing: 1px;
    -webkit-font-smoothing: antialiased;

    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 900;
    border-bottom: 3px solid transparent;

    &:first-child {
      margin-left: 0;
    }
    &:hover,
    &:active,
    &:focus {
      border-bottom: 3px solid white;
      transition: all 0.3s ease-in-out;
    }
  }

  @media (max-width: 560px) {
    visibility: hidden;
    transition: visibility .3s ease-in-out;
    div, a {
      width: 1px;
    }
  }
`

const NavJump = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export default class Navigation extends React.Component {
  render () {
    return (
      <NavMenu>
        <Links />
        <Link to='footer' spy smooth offset={50} duration={750}>
          <NavJump>Contact</NavJump>
        </Link>
      </NavMenu>
    )
  }
}
