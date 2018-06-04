import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const TwitterView = () => (
  <div>
    <h4>TwitterView </h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)

export default TwitterView
