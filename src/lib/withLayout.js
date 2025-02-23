import React, { Component } from 'react'
import jQuery from 'jquery'

// import { initJquery } from '../../public/static/js/frontend';

var consoleHolder = console
function debug(bool) {
  if (!bool) {
    consoleHolder = console
    console = {}
    Object.keys(consoleHolder).forEach(function (key) {
      if (key == 'log') console[key] = function () {}
      else console = consoleHolder
    })
  } else {
    console = consoleHolder
  }
}
if (process.env.NODE_ENV == 'production') {
  debug(false)
} else {
  debug(true)
}

if (typeof window !== 'undefined') {
  window.jQuery = jQuery
  window.$ = jQuery
}

function getComponentDisplayName(component) {
  return component.displayName || component.name || 'Unknown'
}

const withLayout = (ComposedComponent) => {
  class WithLayout extends Component {
    static displayName = `WithLayout(${getComponentDisplayName(ComposedComponent)})`

    /* static async getInitialProps(context) {
      return {
        ...(ComposedComponent.getInitialProps ? await ComposedComponent.getInitialProps(context) : {}),
      };
    } */

    componentDidMount() {
      if (typeof window !== 'undefined') {
        require('../../public/static/js/main')
        require('../../public/static/js/scrollToTop')
      }
    }

    componentDidUpdate() {
      if (typeof window !== 'undefined') {
        require('../../public/static/js/main')
        require('../../public/static/js/scrollToTop')
      }
    }

    render() {
      return (
        <React.Fragment>
          <ComposedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }

  return WithLayout
}

export default withLayout
