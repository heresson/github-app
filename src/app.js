'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>

    <Search />

    <UserInfo />

    <Actions />

    <Repos
      className='repos'
      title='Repositórios'
      repos={[
        {
          name: 'Nome do Repositorio 1',
          link: '#'
        }
      ]}
    />

    <Repos
      className='starred'
      title='Favoritos'
      repos={[
        {
          name: 'Nome do Repositorio Fav 1',
          link: '#'
        }
      ]}
    />

  </div>
)

export default App
