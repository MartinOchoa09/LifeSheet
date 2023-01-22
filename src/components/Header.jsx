import data from "../data/data.js";
import Foto from "../assets/imgs/Mifoto.jpg";
import "../assets/Styles/Header.css";

function Header() {
    return ( 
        <>
        <img className="HeaderIMG" src={Foto} alt="Mi foto"/>
        <header>
                <h1>{data.personal.nombre}</h1>
                <h2>{data.personal.profesion}</h2>
        </header>
        </>
     );
}

export default Header;