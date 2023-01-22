import data from "../data/data.js";
import Logo from "../assets/imgs/Software.png";
import "../assets/Styles/AcercaDeMi.css";

function AcercaDeMi() {
    return (
      <>
      <div className="acercaDeMi">
      <h2>ACERCA DE MI
      <h3>{data.AcercadeMi.informacion[0].hobby}</h3>
      </h2>
      <img src={Logo} alt="Logo1" className="software"/>
      </div>

      </>
    );
}

export default AcercaDeMi;