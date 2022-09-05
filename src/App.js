import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a>
        <button id='cierre' type="submit">x</button><button id='acc' type="submit">?</button><button id='mini' type="submit">-</button> <a className='titulo'>Aplicación de Compras</a>
        </a>
     {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      <div className='cuerpo'>
      <a className='Listatitulo'>Lista de Compras</a> 
      
      <Form></Form>
      </div>
    </div>
  );
}

export default App;
