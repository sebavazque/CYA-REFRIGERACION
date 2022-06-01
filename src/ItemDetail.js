import { Link } from "react-router-dom";

const ItemDetail = ({producto}) => {
    

    return (
        <div className="detailContainer">
            <div className="detailContent" key={producto.id}>
                
                    <div className="detailColum" > 
                        <img src={producto.img} alt="" />
                    </div>
                    
                    <div className="detailColum" >
                        <h2>{producto.titulo}</h2>
                        <span>{producto.descripcion}</span>
                    </div>
            </div>
            <Link to="/productos" ><button>Ver otros productos</button></Link>
        </div>
    );
}

export default ItemDetail