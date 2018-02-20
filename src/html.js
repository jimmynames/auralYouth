import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled, {ThemeProvider} from 'styled-components'
// import { background, headerSize } from './../../global-variables'

const HTML = styled.html`
`

const Body = styled.body`
`

const App = styled.div`
`


const theme = {
	header: '40px',
	copy: '20px',
  background: 'pink'
}



const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    const head = Helmet.rewind()

    // let css
    // if (process.env.NODE_ENV === "production") {
    //   css = (
    //     <style
    //       dangerouslySetInnerHTML={{
    //         __html: require("!raw!../public/styles.css"),
    //         'background': 'black !important;'
    //       }}
    //     />
    //   )
    // }

    return (
      // <ThemeProvider className="themeprovider" theme={theme}>
      <HTML lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
        </head>
        <Body>
          <App
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />

          {this.props.postBodyComponents}

        </Body>
      </HTML>
      // </ThemeProvider>
    )
  }
}
