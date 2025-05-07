import { useNavigate } from "react-router"
import Footer from "../components/Footer.jsx"

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="top_bar"></div>
            <div className="home">
                <img  
                className="logo"
                src="Logo.jpeg"
                 alt="logo" />
                <button
                    className="about"
                    onClick={() => navigate('/aboutUs')}>Sobre Nosotros</button>
                <button
                    className="offer"
                    onClick={() => navigate('/offer')}>¿Qué ofrecemos?</button>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home