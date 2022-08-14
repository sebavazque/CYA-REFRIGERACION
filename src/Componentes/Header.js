import {Link} from 'react-router-dom'
import { IoSnow } from "react-icons/io5";
import { useState } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import Bounce from 'react-reveal/Bounce';

function Header () {
    const [navMenu , setNavMenu] = useState(false);


    const mobilMenu = () => {
        if(window.innerWidth < 840){
            setNavMenu(true);
        }else{
            setNavMenu(false);
        }
    }

    window.addEventListener('resize', mobilMenu);
    

    return (
        <header className='header' > 
            <Bounce top>
                <Link to='/'> <IoSnow className='logoIcon'/> </Link>
                </Bounce>
                <div className={navMenu ? 'dropdown' : 'nav'}>
                        <nav className='nav' >              
                            <ul>
                                <li><Link to='/'>Inicio</Link></li>
                                <li><Link to='/productos'>Productos</Link></li>
                                <li><Link to='/galeria'>Galeria</Link></li>
                                <li><Link to='/contacto'>Contacto</Link></li>
                            </ul>
                        </nav>

                    <div className='menu'>
                        <button class="dropbtn">
                            <AiOutlineBars/>
                        </button>
                        <div class='dropdown-content'>
                            <ul>
                                <li><Link to='/'>Inicio</Link></li>
                                <li><Link to='/productos'>Productos</Link></li>
                                <li><Link to='/galeria'>Galeria</Link></li>
                                <li><Link to='/contacto'>Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </header>


    )
}

export default Header