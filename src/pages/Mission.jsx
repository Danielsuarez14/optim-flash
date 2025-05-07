import Footer from "../components/Footer"

function Mission() {

    return (
        <div>
            <div className="top_bar"></div>
            <div className="about_section">
                <img
                    className="logo"
                    src="Logo.jpeg"
                    alt="logo" />
                <h1>Misión</h1>
                <p>En OPTIM-FLASH S.A.S, queremos ser el aliado
                    estratégico que impulse la eficiencia y la
                    precisión en cada aspecto de los procesos
                    administrativos. Nos comprometemos a
                    ofrecer soluciones inmediatas y seguras,
                    permitiendo que las empresas y personas se
                    concentren en nuestra dedicación a la
                    optimización, transformando desafíos en
                    oportunidades, brindando apoyo ágil y
                    confiable e inspirando confianza y
                    tranquilidad.
                </p>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Mission