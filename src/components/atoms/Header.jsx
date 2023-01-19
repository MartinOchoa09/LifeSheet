import Mifoto from "../../assets/imgs/Mifoto.jpg";
import "../../assets/Styles/Header.css";

function Header() {
    return ( 
        <header>
            <img src={Mifoto} alt="React"/>
            <h1>Martin de Jesus Ochoa Espinosa
            <h2>Estudiante en Ingenieria de Software</h2>
</h1>
        </header>
     );
}

export default Header;