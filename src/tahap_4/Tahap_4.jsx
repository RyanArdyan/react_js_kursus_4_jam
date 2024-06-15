// awal import header dan footer
// import nama_alias dari './...jsx'
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Student from "./Student";
// akhir import header dan footer

// buat component atau function yang akan di ekspor agar bisa di impor oleh class lain. anggaplah component seperti kepingan lego yang dapat digunakan kembali untuk membuat sebuah bangunan berbeda.
function Tahap4() {
    // jika ingin menulis kode javascript maka tulis diatas return
    let nama_variable = "Hello World";

    // jika ingin menulis html maka gunakan return 
    return (
        // jika ingin memanggil banyak component maka gunakan <>
        <>
            {/* jika ingin mengimpor isi component maka tulis seperti gaya element html versi react js */}
            <Header/>
            {/* jadi component Tahap4 kan adalah parent dari Component Student */}
            {/* jadi aku bisa melakukan props atau mengirim name="Muichiro Tokito" ke anaknya yaitu component Student melalui parameter props pada component Student */}
            {/* jika bukan string yang dikirim maka gunakna {} */}
            <Student name="Muichiro Tokito" age={14} is_hashira={true} />
            <Student name="Kyojuro Rengoku" age={20} is_hashira={true}  /> 
            <Student name="Kamado Tanjiro" age={15} is_hashira={false}  /> 
            <Student/>
            <Footer/>
        </>
    )
}

// ekspor component yang sudah dibuat agar bisa di import oleh class lain
// ekspor bawaan fungsi 
export default Tahap4;