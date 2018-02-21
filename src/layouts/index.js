import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import withRouter from 'react-router-dom/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
// import { StickyContainer, Sticky } from 'react-sticky'
import BurgerComp from './../components/Burger'
// import FooterComp from './../components/Footer'

import './animations.css'

require('normalize.css')

injectGlobal`
  body {
    background: black;
  }
`

const PageRender = styled.div`
  width: 100%;
  height: 100%;
	background: white;
  @media (max-width: 693px) {}
  @media (max-width: 414px) {}
`

const OuterContainer = styled.div`
  ${'' /* position: relative; */}
`

// const theme = {
// 	header: '40px',
// 	copy: '20px',
//   background: 'pink'
// }

const TransitionContainer = styled.div`
  ${'' /* height: 100%; */}
  display: flex;
  justify-content: center;
  align-items: center;
`

class TransitionHandler extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname
  }

  render () {
    const {children} = this.props
    return (
      <TransitionContainer className='transition-container'>
        {children}
      </TransitionContainer>
    )
  }
}

const TemplateWrapper = ({ children, location }) => (
		<OuterContainer id="outer-container">
    	<Helmet
      title='Aural Youth'
      meta={[
            { name: 'description', content: 'Aural Youth' },
            { name: 'keywords', content: 'Aural Youth' }
      ]}
        />
        <BurgerComp />
				<TransitionGroup>
      		<CSSTransition
          key={location.pathname}
          classNames="example"
          timeout={{ enter: 500, exit: 300 }}
      >
        		<TransitionHandler
            location={location}
        >
							<PageRender id="page-wrap">
		          	{children()}
		        	</PageRender>
						</TransitionHandler>
	 			</CSSTransition>
 		</TransitionGroup>
				{/* </StickyContainer> */}
				</OuterContainer>
    )

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default withRouter(TemplateWrapper)
