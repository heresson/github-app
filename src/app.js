'use strict'

import React, {Component} from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Heresson Mendes',
        repos: '42',
        followers: '8',
        following: '2'
      },
      repos: [
        {
          name: 'Repo1',
          link: '#'
        }
      ],
      starred: [
        {
          name: 'Repo1',
          link: '#'
        }
      ]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
