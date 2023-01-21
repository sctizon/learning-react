import './App.css';
import Contacto from './Components/Contacto/Contacto';

function App() {
  const contacto = {
    'nombre': 'Sara',
    'apellido': 'Chao',
    'email': 'sara@gmail.com',
    'conectado': true
  }
  return (
    <>
      <Contacto contacto={contacto} />
    </>
  );
}

export default App;
