import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  /*Este apartado esta como se genera la aplicacion con create-react-app pero se cambio con la importacion del react-router-dom y su
  libreria browser router que es la que permite realizar los enlaces entre las diferentes paginas que tiene la app */
  <BrowserRouter>
  
      <App />

  </BrowserRouter>
    
);


reportWebVitals();
