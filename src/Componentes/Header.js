import {Link} from 'react-router-dom'
import { IoSnow } from "react-icons/io5";
import { useState } from 'react';
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import Bounce from 'react-reveal/Bounce';

function Header () {
    const [menu, setMenu] = useState(false);
    const [burger, setBurger] = useState(false)

    const cambiarMenu = () => {
        if(window.scrollY > 100){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    window.addEventListener('scroll', cambiarMenu);


    function handleClick(){
        setBurger(burger => !burger);
    }

    let changeClass = burger ? 'active' : 'menuBurger'; 
    let changeClass2 = burger ? 'active2' : 'menuBurger'; 
    let changeBurger = burger ? 'ac' : 'dropbtn';

    return (
        <header  className={menu ? 'headerScroll' : 'header' }  > 
            <Bounce top>
                <Link to='/'> <IoSnow className='logoIcon'/> </Link>
                </Bounce>
                <nav className='nav' >  
                            <div className='nav-content'>           
                                <button className={`${changeBurger}`}  onClick={handleClick}>
                                    <span className='line1'></span>
                                    <span className='line2'></span>
                                    <span className='line3'></span>
                                </button>
                                
                                <div className={`${changeClass}`} >
                                    <ul>
                                        <li><Link to='/'>Inicio</Link></li>
                                        <li><Link to='/contacto'>Contacto</Link></li>
                                        <li><Link to='/galeria'>Galeria</Link> </li>
                                        <li><a href='https://www.instagram.com/weareferoe/'><AiOutlineInstagram className='instaNav'/> </a> </li>
                                        <li><a href='https://wa.me/3413667323'><AiOutlineWhatsApp className='instaNav'/></a></li>
                                    </ul>
                                    

                                </div>
                                <div className={`${changeClass2}`}></div>
                            
                            </div> 


                        </nav>
        </header>


    )
}

export default Header