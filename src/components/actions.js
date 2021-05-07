'use strict'

import React from 'react'

const Actions = ({handleClickRepos, handleClickStarred}) => (

  <div className='actions'>
    <button onClick={handleClickRepos}>Ver repositórios</button>
    <button onClick={handleClickStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  handleClickRepos: React.PropTypes.func.isRequired
}

export default Actions
