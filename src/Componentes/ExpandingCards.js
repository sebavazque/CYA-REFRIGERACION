import React from 'react'
import Card from './Card'
import { useState } from 'react'

const ExpandingCards = (props) => {


    const [data, setDataType] = useState(props.data)
    
    const onCardClick = (id) => {
        const newState=[...data]
        newState.map((item) => {
            item.id === id ? item.active = item.active = true  : item.active = false;
            setDataType(newState)
            })


    }

  return (
    <div className="sliderContainer">
        <h2>Algunas fotos</h2>
        <div className='container'>
            
        {
            data.map(item => { return <Card key={item.id} data={item} onCardClick={onCardClick} /> })
        }
        </div>
    </div>
  )
}


export default ExpandingCards