import Footer from "../components/Footer.jsx"

function WhoAreWe() {
    return(
        <div>
            <div className="top_bar"></div>
            <div className="about_section">
            <img 
                className="logo"
                src="Logo.jpeg" 
                alt="logo" />
                <h1>¿Quienes somos?</h1>
                <p>Optim-flash S.A.S es una empresa de gestión administrativa virtual creada por tres estudiantes apasionados por la eficiencia y la tecnología. Nos especializamos en ofrecer soluciones administrativas flexibles y accesibles que permiten a pequeñas y medianas empresas optimizar sus operaciones sin necesidad de un espacio físico.
                </p>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default WhoAreWe