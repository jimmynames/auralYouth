require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled  from 'styled-components'

import BannerComp from './../components/Banner'
import FooterComp from './../components/Footer'

const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
`

const PageRender = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 693px) {}
  @media (max-width: 414px) {}
`

const Container = styled.div`
  position: relative;
`


const NavMenu = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: 0;

  @media (max-width: 693px) {}
`

const NavItem = styled.li`
  list-style-type: none;
  text-decoration: none;
  margin-left: 3em;
  text-decoration: none;
  font-size: 1.17em;
  color: black;
  letter-spacing: 1px;
  -webkit-font-smoothing: antialiased;
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
		return (
			<div>
        <Helmet
          title="Aural Youth"
          meta={[
            { name: "description", content: "Aural Youth" },
            { name: "keywords", content: "Aural Youth" },
          ]}
        />

					<BannerComp />
		      <Wrap>
		        <PageRender className='page-render'>
		          {this.props.children()}
		        </PageRender>
	  			</Wrap>
	        <FooterComp />

			</div>
    )
  }
}
