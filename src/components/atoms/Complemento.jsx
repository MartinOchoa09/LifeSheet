import Logo from "../../assets/imgs/Software.png";
import "../../assets/Styles/Complemento.css";

function Complemento() {
    return ( 
        <div className="divmain">
            <div className="divsecundario">
                Me gusta mucho programar es uno de mis hobbies favoritos, he aprendido a saber <br />
                manejar  algunos lenguajes de programacion, aunque es un poco complicado al incio. Otra <br />
                cosa importante de mi, es que me gusta hacer ejercicio y mayormente voy en las mañanas <br />
                para poder tener tiempo libre en la tarde y asi realizar mis actividades pendientes.
            </div>
            <div className="tercerdiv">
                <img src={Logo} alt="Mi logo" />
            </div>
            <div>
                
            </div>

        </div>
     );
}


export default Complemento;