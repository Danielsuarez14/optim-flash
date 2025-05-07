import Footer from "../components/Footer"

function Offer() {

    return (
        <div>
            <div className="top_bar"></div>
            <div className="about_section">
                <img
                    className="logo"
                    src="Logo.jpeg"
                    alt="logo" />
                <h1>¿Que ofrecemos?</h1>
                <p>Nos dedicamos a brindar servicios y asesorías en gestión administrativa que facilitan el funcionamiento de tu negocio. Nuestro enfoque se centra en ofrecer soluciones integrales y personalizadas que se adapten a las necesidades específicas de cada cliente.
                </p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Offer