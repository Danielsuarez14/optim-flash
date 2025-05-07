import Footer from "../components/Footer.jsx"
import { useNavigate } from "react-router"

function AboutUs() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="top_bar"></div>
            <div className="aboutUs">
                <img
                    className="logo"
                    src="Logo.jpeg"
                    alt="logo" />
                <h1>Sobre Nosotros</h1>
                <button
                    onClick={() => navigate('/who')}>¿Quienes somos?</button>
                <button
                    onClick={() => navigate('/mission')}>Misión</button>
                <button
                    className="vision"
                    onClick={() => navigate('/vision')}> Visión</button>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default AboutUs