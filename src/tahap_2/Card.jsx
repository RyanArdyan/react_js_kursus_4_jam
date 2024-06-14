// berbeda dengan html, css dan javascript biasa, React JS harus mengimport gambar sebagai alias
import logo_react_js from './../assets/logo_react_js.jpg';

// buat sebuah komponent atau fungsi agar dapat diekspor dan di impor oleh class lain. anggaplah component seperti sebuah lego untuk membuat berbagai bangunan atau bentuk
function Card() {
    // jika ingin membuat variable maka tulis disini
    let nama_variable = "Hello World";

    // jika ingin membuat tampilan maka gunakan return ()
    return (
        // jika ingin mengmpor banyak component maka gunakan <><>
        <>
         {/* di react kita tidak bisa menulis attribute class, melainkan kita akan mengubahnya menjadi className="" */}
         <div className="card">
            {/* ./ wajib ditulis */}
                <img className="card-image" src={logo_react_js} alt="React JS Image" />
                <h2 className="card-title">Ardyan</h2>
                <p className="card-text">Beban keluarga + aib keluarga + pemalas + menyedihkan + lusuh + gila + stress + jelek + tidak ada teman.</p>
            </div>   
        </>
    )
}

// ekspor komponent yg sudah dibuat agar bisa diimport oleh class lain
export default Card;




