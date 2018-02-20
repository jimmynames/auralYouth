require('normalize.css')

import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled, {ThemeProvider} from 'styled-components'
// import { StickyContainer } from 'react-sticky'
import BannerComp from './../components/Banner'
import FooterComp from './../components/Footer'

const Wrap = styled.div`
	max-width: 1200px;
  margin: 0 auto;
	@media (max-width: 900px) {
		padding-left: 5%;
		padding-right: 5%;
	}
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

// const theme = {
// 	header: '40px',
// 	copy: '20px',
//   background: 'pink'
// }

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

		      <Wrap className="Wrap">
		        <PageRender className='page-render'>
		          {this.props.children()}
		        </PageRender>
	  			</Wrap>

				<FooterComp />
				</div>
    )
  }
}
