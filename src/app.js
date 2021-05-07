'use strict'

import React, {Component} from 'react'
import ajax from '@fdaciuk/ajax'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.wich || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  handleClickRepos (e) {
    const value = this.state.userinfo.login
    ajax().get(`https://api.github.com/users/${value}/repos`)
      .then((result) => {
        this.setState({
          repos: result
        })
      })
  }

  handleClickStarred (e) {
    const value = this.state.userinfo.login
    ajax().get(`https://api.github.com/users/${value}/starred`)
      .then((result) => {
        this.setState({
          starred: result
        })
      })
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        handleClickRepos={(e) => this.handleClickRepos(e)}
        handleClickStarred={(e) => this.handleClickStarred(e)}
      />
    )
  }
}

export default App
