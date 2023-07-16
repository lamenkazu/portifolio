import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {window.alert("Esse portfólio ainda não está completo!\nEle está sendo produzido nesse momento, porém fique a vontade para verificar seu estado atual :D\n 95% Completo")}
    <App />
  </React.StrictMode>,
)
