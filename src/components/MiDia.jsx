import data from "../data/data.js";
import Mifoto2 from "../assets/imgs/Mifoto2.jpg";
import "../assets/Styles/MiDia.css";

function MiDia() {
    return (  
        <>
        <div className="divmain">
            <h2>MI DIA A DIA
            <h3>{data.AcercadeMi.informacion[1].midia}</h3>
            </h2>
            <img src={Mifoto2} alt="Mifoto2" className="mifoto2" />
        </div>
        </>
    );
}

export default MiDia;