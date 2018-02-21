require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
// import { StickyContainer, Sticky } from 'react-sticky'

import withRouter from 'react-router-dom/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { Wrap } from './../components/Wrap'
import BannerComp from './../components/Banner'
import FooterComp from './../components/Footer'
import Navigation from './../components/Navigation'

import './animations.css'

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

const Container = styled.div`
  position: relative;
`

// const theme = {
// 	header: '40px',
// 	copy: '20px',
//   background: 'pink'
// }

class TransitionHandler extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.location.pathname === window.location.pathname;
  }

  render() {
    const {children} = this.props;
    return (
      <div className="transition-container">
        {children}
      </div>
    );
  }
}

const TemplateWrapper = ({ children, location }) => (
  // static propTypes = {
  //   children: PropTypes.func,
  // }
  //
  // render() {
	// 	return (

			<div>
    		<Helmet
          title="Aural Youth"
          meta={[
            { name: "description", content: "Aural Youth" },
            { name: "keywords", content: "Aural Youth" },
          ]}
        />

					{/* <BannerComp /> */}

					{/* <StickyContainer>
			<Sticky>
				{
					({
						style,

						// the following are also available but unused in this example
						isSticky,
						wasSticky,
						distanceFromTop,
						distanceFromBottom,
						calculatedHeight
					}) => {
						return (
							<header style={style}> */}
								{/* <Navigation /> */}
							{/* </header>
						)
					}
				}
			</Sticky> */}


		        {/* <PageRender id="page" className='page-render'> */}
						<TransitionGroup>
      <CSSTransition
          key={location.pathname}
          classNames="example"
          timeout={{ enter: 500, exit: 300 }}
      >
        <TransitionHandler
            location={location}

        >
					<PageRender>
		          {children()}
		        </PageRender>
						<FooterComp />
					</TransitionHandler>
	 		</CSSTransition>
 		</TransitionGroup>

				{/* </StickyContainer> */}
				</div>
    )

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default withRouter(TemplateWrapper)
