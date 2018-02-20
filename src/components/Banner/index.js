import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

// import mouse from './../images/mouse.gif'

const Banner = styled.div`
  height: 100vh;
  background: black;
  ${'' /* background: ${props => props.theme.background}; */}
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`

const Empty = styled.div``

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
  color: black;
  font-family: 'Lato';
  font-weight: 900;
`

export default class BannerComp extends React.Component {
  render () {
    return (
      <Banner>
        <Empty />
        <Logo>
          <svg width="206px" height="206px" viewBox="0 0 206 206" version="1.1">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Home-page" transform="translate(-547.000000, -176.000000)">
                <g id="Logo" transform="translate(554.000000, 183.000000)">
                  <path d="M72.9406773,46.5170068 L59.1997748,75.8922475 L86.7969295,75.8922475 L72.9406773,46.5170068 Z M101.471616,107 L91.6888578,86.3004107 L54.3078465,86.3004107 L44.5283843,107 L33,107 L72.9406773,22 L113,107 L101.471616,107 Z" id="Fill-1" fill="#FFFFFF"></path>
                  <polygon id="Fill-3" fill="#FFFFFF" points="119.923077 169 108.5 169 119.347242 145.654391 92 87 103.423077 87 125 133.342776 146.576923 87 158 87"></polygon>
                  <path d="M72.9406773,46.5170068 L59.1997748,75.8922475 L86.7969295,75.8922475 L72.9406773,46.5170068 Z M101.471616,107 L91.6888578,86.3004107 L54.3078465,86.3004107 L44.5283843,107 L33,107 L72.9406773,22 L113,107 L101.471616,107 Z" id="Fill-4" fill="#FFFFFF"></path>
                  <polygon id="Fill-5" fill="#FFFFFF" points="119.923077 169 108.5 169 119.347242 145.654391 92 87 103.423077 87 125 133.342776 146.576923 87 158 87"></polygon>
                  <path d="M192,96 C192,149.019104 149.020198,192 96,192 C42.9808961,192 0,149.019104 0,96 C0,42.9808961 42.9808961,0 96,0 C149.020198,0 192,42.9808961 192,96 Z" id="Stroke-6" stroke="#FFFFFF" stroke-width="14"></path>
                </g>
              </g>
            </g>
          </svg>
        </Logo>
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
          <NavItem>Contact</NavItem>
        </NavMenu>
      </Banner>
    )
  }
}
