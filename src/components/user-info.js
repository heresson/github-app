'use strict'

import React from 'react'

const UserInfo = () => (

  <div className='user-info'>
    <img src='https://avatars.githubusercontent.com/u/877339?v=4' />
    <h1>
      <a href='https://api.github.com/users/heresson'>Heresson Mendes</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 122</li>
      <li>Seguidores: 10</li>
      <li>Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
