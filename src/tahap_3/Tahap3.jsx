// import komponen sebagai nama_alias dari './Header';
// ./ wajib ditulis
// ../ berarti keluar dari folder saat ini
import Header from "./../layouts/Header";
import Footer from "./../layouts/Footer";
import Button from "./../Button/Button";

// buat komponent atau fungsi agar bisa di ekspor dan import oleh class lain. anggaplah komponent seperti lego yang digunakan untuk membuat sebuah bangunan berbeda
function Tahap3() {
    // jika ingin menulis kode js maka tulis diatas return
    let nama_variable = "Hello World";

    // jika inign menulis html atau tampilan maka gunakan return ()
    return (
        // jika ingin menggunakan lebih dari satu komponent maka gunakan <><>
        <>
        {/* panggil komponent yang sudah di import menggunakan gaya element html */}
            <Header/>
            <Button/>
            <Footer/>
        </>
    )
}

// ekspor component agar dapat diimport oleh class lain 
// ekspor bawaan Tahap3
export default Tahap3;