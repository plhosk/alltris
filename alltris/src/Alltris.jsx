import React from 'react'

import './Alltris.css'
import Matrix from './Matrix'
import Hud from './Hud'
import Controls from './Controls'
import GameLogic from './GameLogic'

const Alltris = () => (
  <div className="Alltris">
    <h2>alltris</h2>
    <div className="Alltris-ui-container">
      <Matrix />
      <Hud />
    </div>
    <Controls />
    <GameLogic />
  </div>
)

export default Alltris
