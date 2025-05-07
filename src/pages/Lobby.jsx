import { useNavigate } from "react-router"
import Footer from "../components/Footer"

function Lobby() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="top_bar"></div>
            <div className="lobby">
                <img 
                className="logo"
                src="Logo.jpeg" 
                alt="logo" />
                <button
                    onClick={() => navigate('/home')}>Entrar</button>
            </div>
        </div>
    )

}

export default Lobby