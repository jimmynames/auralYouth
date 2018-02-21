import React from 'react'
import styled from 'styled-components'
// import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom'

const NavMenu = styled.div`
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
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 900;

    &:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 693px) {}
`

export default class Links extends React.Component {
  render () {
    return (
      <NavMenu>
        <NavLink exact to='/'
                 activeStyle={{
                      borderBottom: '3px solid white',
                      transition: 'all 0.3s ease-in-out'
                     }}
                     >About</NavLink>
        <NavLink to='/services/'
                 activeStyle={{
                      borderBottom: '3px solid white',
                      transition: 'all 0.3s ease-in-out'
                     }}
                     >Services</NavLink>
         <NavLink to='/clients/'
                  activeStyle={{
                       borderBottom: '3px solid white',
                       transition: 'all 0.3s ease-in-out'
                      }}
                      >Clients</NavLink>
      </NavMenu>
    )
  }
}
