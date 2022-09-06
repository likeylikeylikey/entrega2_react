import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={style.container}>
        <p>
        <code>Meraki: Productos personalizados</code> 
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <nav>
          <a href=''>Nosotros</a>
          <a href=''>Productos</a>
          <a href=''>Contacto</a>
        </nav>  
        </a>
      </header>
    </div>
  );
}
const style = {
  container:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  links:{
    padding: 10,
  }
}
export default App;