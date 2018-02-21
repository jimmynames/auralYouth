import React from 'react'
import styled from 'styled-components'
import { reveal as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '20px',
    height: '15px',
    right: '30px',
    top: '21px'
  },
  bmBurgerBars: {
    background: 'black'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '8%',
    right: '10%'
  },
  bmCross: {
    background: 'white'
  },
  bmMenu: {
    background: 'black',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    'z-index': '4 !important'
  },
  bmMenuWrap: {
    transition: 'all 0.333s',
    position: 'fixed'
  },
  bmMorphShape: {
    fill: 'white'
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em',
    'WebkitTapHighlightColor': 'rgba(0, 0, 0, 0)'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.5)',
    left: '0'
  }
}

const BurgerMenuComp = styled.div`

  .bm-item-list a {
    padding: 1.5rem 0 0 0;
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    letter-spacing: -0.03px;
    line-height: 32px;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    text-decoration: none;
    position: relative;
    &:hover {
      cursor: pointer;
      &:after {
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        background: white;
        position: absolute;
        bottom: -16px;
        left: 0;
      }
    }
  }
`

export default class BurgerComp extends React.Component {
  constructor (props) {
   super(props)
   this.state = {
     menuOpen: false
   }
 }
 // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }
  showSettings (event) {
    event.preventDefault();
  }
  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }
  render () {
    return (
      <BurgerMenuComp>
        <Menu styles={styles}
              pageWrapId={ "page-wrap" }
              outerContainerId={ "outer-container" }
              isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
              >
          <NavLink className="menu-item"
                   exact
                   to='/'
                   activeStyle={{
                        // borderBottom: '3px solid white',
                        // transition: 'all 0.3s ease-in-out'
                       }}
                  onClick={() => this.closeMenu()}
                       >About</NavLink>
          <NavLink className="menu-item"
                   to='/services/'
                   activeStyle={{
                        // borderBottom: '3px solid white',
                        // transition: 'all 0.3s ease-in-out'
                       }}
                    onClick={() => this.closeMenu()}
                       >Services</NavLink>
           <NavLink className="menu-item"
                    to='/clients/'
                    activeStyle={{
                         // borderBottom: '3px solid white',
                         // transition: 'all 0.3s ease-in-out'
                        }}
                    onClick={() => this.closeMenu()}
                        >Clients</NavLink>
            <Link onClick={() => this.closeMenu()}
                  to='footer'
                  spy smooth  delay={666} offset={50} duration={750}>
              Contact
            </Link>
        </Menu>
      </BurgerMenuComp>
    )
  }
}
