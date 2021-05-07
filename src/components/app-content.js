'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (

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

export default AppContent
