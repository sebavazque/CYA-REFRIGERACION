import React from 'react'
import './/Banner.css'
import logoCA from './imagen/logoCA.png'
import { useEffect } from 'react'

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    <section className="banner">
        <div className="banner-content">
            
            <img src={logoCA} />
            
        </div>
    </section>
  )
}

export default Banner