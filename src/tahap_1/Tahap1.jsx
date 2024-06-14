// import komponent lain dengan cara import NamaAlias dari './NamaComponent';
import Header from '../layouts/Header';
import Food from './Food';
import Footer from '../layouts/Footer';

// buat sebuah komponent atau fungsi yang akan di ekspor. Anggaplah seperti kepingan lego yang dapat digunakan untuk membuat bangunan penuh.
function Tahap1() {
    // jika ingin mengetik kode javascript maka ketik diatas return ()
    let nama = "Hello World";
    // kembalikkan element html yang banyak menggunakan return ()
    return (
        // jika mengimpor banyak komponen maka gunakan <><>
        <>
            {/* // panggil alias seperti menulis tag html dan ada penutup contoh <Header/> */}
            <Header/>
            <Food/>
            <Food/>
            <Footer/> 
        </>
    );
}

// ekspor komponent yang sudah dibuat agar bisa digunakan di class lain
// ekspor bawaan Tahap1
export default Tahap1;
