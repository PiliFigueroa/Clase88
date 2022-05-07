import './Titulo.css'

const Titulo = () => {

    const titulo = "Soy un titulo!"
    const frutas = ["Manzana", "Pera", "Naranja"]
    const usuario = {
        nombre: "Pilar",
        apellido: "Figueroa"
    }
    const { nombre, apellido } = usuario
    const handleClick = () => {
        console.log("hice click")
    }

    return(
        <div>
            <h1>{titulo}</h1>
            <p>{frutas[0]}</p>
            <p>{nombre}, {apellido}</p>
            <button onClick={handleClick}>Dame click!</button>
        </div>
    )
}

export default Titulo;