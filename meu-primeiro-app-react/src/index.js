import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
const estilosBotão = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgb(95,164,48)', color: 'white', border: 'none', width: '100%', borderRadius: 8}
const textoRotulo = "Nome: ";

  return  <div style= {{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 17, borderRadius: 8}}>
        <label className="rotulo" htmlFor="nome" style= {{display: 'block', marginBottom: 4}}>{textoRotulo} </label>
        <input type="text" id="nome" style= {{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
        <button style={estilosBotão}>Enviar</button>
    </div>
  
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)