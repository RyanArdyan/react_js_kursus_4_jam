import React from 'react'
import ReactDOM from 'react-dom/client'
// import App.jsx sebagai file js utama yang memuat tampilan utama
import App from './App.jsx'
// import index.css sebagai file css utama
import './index.css'

// ReaksiDOM.buatAkar(dokument.dapatkanElementDenganId('root')) dari index.html .berikan()
ReactDOM.createRoot(document.getElementById('root')).render(
  // reaksi Reaksi.ModeKetat
  <React.StrictMode>
  {/* aplikasi */}
    <App />
  </React.StrictMode>,
)
