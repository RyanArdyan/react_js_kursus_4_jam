// import NamaAlias dari './NamaComponent';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Card from './Card';

// buat Component atau fungsi agar bisa aku ekspor dan aku bisa anggap sebagai kepingan lego yang akan digunakan untuk membuat bangunan
function Tahap2() {
    // jika ingin menulis kode javascript maka tulis diatas return
    let nama_variable = "Hello World";
    // tulis beberapa element HTML menggunakan return ()
    return (
        // jika perlu mengimpor banyak komponen maka gunakan <><>
        <>
            {/* import isi Header menggunakan seperti tag html, contoh <Header /> */}
            <Header/>
            {/* sebuah komponent dapat dipanggil berulang karena dia adalah function */}
            <Card/>
            <Card/>
            <Card/>
            <Footer/>
        </>
    )
}

// ekspor komponen yang sudah dibuat agar bisa digunakan oleh class lain
// ekspor bawaan Tahap2
export default Tahap2;