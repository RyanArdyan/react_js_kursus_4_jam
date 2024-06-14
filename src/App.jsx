// Agar bisa jika aku click menu Home maka akan pindah ke halaman Home
// import RuteBrowser sebagai Router, Routes, rute dari 'reaksi-rute-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import setiap isi menu nya contohnya Komponen Tahap1
import Tahap1 from './tahap_1/Tahap1.jsx';
import Tahap2 from './tahap_2/Tahap2.jsx';
import Tahap3 from './tahap_3/Tahap3.jsx';

// ini adalah file utama React JS atau javascript utama, jadi kita bisa anggap ini sebagai file Home
function App() {
   return (
    // jika ingin mengimpor banyak komponen maka gunakan <><>
      <>
        {/* // ruter */}
        <Router>
        {/* rutes */}
          <Routes>
          {/* rute jalur="/", / berarti halaman Home, element digunakan untuk memanggil isi komponent nya */}
          {/* tanda kurung kurawal digunakan untuk mencetak kode js di dalam html */}
            <Route path="/" element={<Tahap1/>} />
            <Route path="/tahap2" element={<Tahap2/>} />
            <Route path="/tahap3" element={<Tahap3/>} />
          </Routes>
        </Router>
      </>
   )
}

// kita ekspor komponen App kita ke main.jsx
export default App
