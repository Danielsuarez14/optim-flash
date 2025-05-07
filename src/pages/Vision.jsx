import Footer from "../components/Footer"

function Vision() {

    return (
        <div>
            <div className="top_bar"></div>
            <div className="about_section">
                <img
                    className="logo"
                    src="Logo.jpeg"
                    alt="logo" />
                <h1>Visión</h1>
                <p>Soñamos con un futuro donde cada empresa y
                    personas puedan enfocarse en lo realmente
                    importante, mientras nosotros transformamos
                    la gestión administrativa en un proceso ágil,
                    eficiente y libre de preocupaciones.
                    Comprometiéndonos a ser referentes en soluciones administrativas, brindando apoyo inmediato y confiable. En los próximos 5 a 7 años, visualizamos un mundo donde nuestra dedicación en la optimización y precisión sea
                    reconocida como la clave para el éxito
                    empresarial.
                </p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Vision