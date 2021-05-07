'use strict'

import React from 'react'

const UserInfo = ({ userinfo }) => (

  <div className='user-info'>
    <img src='https://avatars.githubusercontent.com/u/877339?v=4' />
    <h1>
      <a href={userinfo.link}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

export default UserInfo
