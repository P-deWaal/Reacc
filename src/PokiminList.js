import React from 'react'
import './assets/Styles.css'

export default function PokiminList({ pokimin }) {
  return (
    <div>
    {pokimin.map(p => (
        <div key={p}>
            <button className='button-pokimin'>{p}</button>
        </div>
    ))}
    </div>
  )
}
