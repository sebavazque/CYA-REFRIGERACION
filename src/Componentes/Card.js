import React from 'react'

const Card = (props) => {

    const {id, url, active} = props.data



  return (
    
         <div className={`panel ${active && 'active'} `} key={id} style={{backgroundImage: `url(${url})`, borderRadius:'50px'}} onClick={() => props.onCardClick(id) }>
            
        

</div>
  )
}

export default Card