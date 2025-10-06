import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const App = () => {
  return  <div style= {{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 17, borderRadius: 8}}>
        <label for="nome" style= {{display: 'block', marginBottom: 4}}>Nome: </label>
        <input type="text" id="nome" style= {{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
        <button style= {{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgb(248, 156, 51)', color: 'white', border: 'none', width: '100%', borderRadius: 8}}>Enviar</button>
    </div>
  
}

const root = createRoot(document.getElementById('root'));
root.render(<App/>)