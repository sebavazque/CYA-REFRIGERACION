import {Link} from 'react-router-dom'
import { IoSnow } from "react-icons/io5";

function Header () {
    return (

        <header >
            
            <Link to='/'> <a href="" className='logo'><IoSnow className='logoIcon'/> C&A  Refrigeracion</a></Link>
            <ul className='nav'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/productos'>Productos</Link></li>
                <li><Link to='/nosotros'>Nosotros</Link></li>
                <li><Link to='/contacto'>Contacto</Link></li>
            </ul>
            
        </header>


    )
}

export default Header