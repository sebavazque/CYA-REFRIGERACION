import React from 'react'
import './Slider.css'
import ExpandingCards from './ExpandingCards'

const images =[
    {
        id: 1,
        url: 'https://cyarefrigeracion.com/static/media/freezer.18b95b3689ca18a50833.jpeg',
        active: false
    },

    {
        id: 2,
        url: 'https://cyarefrigeracion.com/static/media/batea6.b6a953865e37449f5d0b.jpg',
        active: false
    },
    {
        id: 3,
        url: 'https://cyarefrigeracion.com/static/media/camara8.fe363de0cc51ff0b6bb2.jpeg',
        active: false
    },
    {
        id: 4,
        url: 'https://cyarefrigeracion.com/static/media/camara7.4c791aaa3a8eed0fe704.jpeg',
        active: false
    }
];
const Slider = () => {
    return <ExpandingCards data={images} />
    
  
}

export default Slider