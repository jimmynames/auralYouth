import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const NavMenu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;

  a {
    text-decoration: none;
    color: black;
    font-family: 'Lato';
    font-weight: 900;
  }

  @media (max-width: 693px) {}
`

const NavItem = styled.li`
  list-style-type: none;
  margin-left: ${props => props.first ? '0' : '3em'};
  font-size: 1.17em;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;

  text-decoration: none;
  color: white;
  font-family: 'Lato';
  font-weight: 900;
`

export default class NavMenuComp extends React.Component {
  render () {
    return (
      <NavMenu>
        <Link to='/'>
          <NavItem first>About</NavItem>
        </Link>
        <Link to='/services/'>
          <NavItem>Services</NavItem>
        </Link>
        <Link to='/services/'>
          <NavItem>Clients</NavItem>
        </Link>
    </NavMenu>
    )
  }
}
