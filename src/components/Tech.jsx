import { BallCanvas } from './canvas'
import { SectionWraper } from '../HOC'
import { technologies } from '../constants'

import React from 'react'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWraper(Tech,"")