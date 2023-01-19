import Header from "../components/atoms/Header";
import Complemento from "../components/atoms/Complemento";
import Title from "../components/atoms/Title";
import Subtitle from "../components/atoms/Subtitle";
import "../assets/Styles/Home.css";

function Home() {
    return ( 
        <>
        <Header />
        <div id="divmayor">
            <div>
                <Title msn="ACERCA DE MI"></Title>
            </div>
            <div className="subtitle">
                <Subtitle msn2="MI DIA A DIA"></Subtitle>
            </div>
        </div>
        <Complemento />
        </>
     );
}

export default Home;