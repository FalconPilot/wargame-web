import React, { Component } from 'react'

import ReduxProvider, { ConnectedRouter as Router } from '../../redux-provider'

import Army from '../army'

class App extends Component {
  render () {
    return (
      <ReduxProvider>
        <Router>
          <Army />
        </Router>
      </ReduxProvider>
    )
  }
}

export default App
