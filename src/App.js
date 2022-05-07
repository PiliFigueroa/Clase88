import './App.css';
import Titulo from './components/Titulo/Titulo'

const App = () => {

  const bienvenida = "Bienvenidos a mi app!"

  return (
    <div className="bienvenida">
      <Titulo />
      {bienvenida}
    </div>
  )
}

export default App;