// import alias React dari react
import React from 'react';
// Agar bisa jika aku click menu Home maka akan pindah ke halaman Home
// import RuteBrowser, NavigasiLink dari 'reaksi-rute-dom';
import { BrowserRouter, NavLink } from 'react-router-dom';
// import NamaAlias dari './PerkenalanReact.jsx'
import PerkenalanReact from './PerkenalanReact';

// JADI KITA AKAN EKSPOR COMPONENT ATAU FUNGSI INI AGAR BISA DIIMPORT OLEH CLASS LAIN, anggaplah ini seperti lego yang akan disusun menjadi satu bangunan
function Header() {
    // jadi jika ingin membuat banyak element HTML maka bisa gunakan return ()
    return (
        <BrowserRouter>
            <header>
                <h1>My Website</h1>
                <nav>
                    <ul>
                        <li><a href="/">Perkenalan Project</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div className="app-content">
                    {/* tampilkan komponent halaman berdasarkan url */}
                    <Routes>
                        <Route path="/" element={<PerkenalanReact/>} />
                    </Routes>
                </div>
            </header>
        </BrowserRouter>
        
    )
}

// kita ekspor agar ini seperti kepingan lego yang akan digunakan di dalam bagian Import class
export default Header;