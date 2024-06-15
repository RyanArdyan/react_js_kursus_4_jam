// import link digunakan untuk perpindahan halaman
import { Link } from "react-router-dom";

// JADI KITA AKAN EKSPOR COMPONENT ATAU FUNGSI INI AGAR BISA DIIMPORT OLEH CLASS LAIN, anggaplah ini seperti lego yang akan disusun menjadi satu bangunan
function Header() {
    // jadi jika ingin membuat banyak element HTML maka bisa gunakan return ()
    return (
        // gunakan <><> jika ingin mengimport banyak component
        <>
            <header>
                <h1>My Website</h1>
                <nav>
                    <ul>
                    {/* element link digunakan untuk mengganti element a. element a akan melakukan reload pada browser, sedangkan Link tidak akan melakukan reload */}
                    {/* to digunakan untuk menggantikan attribute href */}
                        <li><Link to="/">Tahap 1 - Perkenalan Project</Link></li>
                        <li><Link to="/tahap2">Tahap 2 - Mengenal className, mengimport gambar dan CSS</Link></li>
                        <li><Link to="/tahap3">Tahap 3 - Mengenal .moduls.css untuk menggunakan css spesifik di suatu konten dan mengenal external css yang disimpan di index.css</Link></li>
                        <li><Link to="/tahap4">Tahap 4 - Mengenal props dan validasi data kiriman pada props menggunakan proptypes</Link></li>
                    </ul>
                </nav>
            </header>
        </>
           
        
    )
}

// kita ekspor agar ini seperti kepingan lego yang akan digunakan di dalam bagian Import class
export default Header;