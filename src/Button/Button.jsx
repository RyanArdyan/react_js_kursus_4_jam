import styles from './Button.module.css';

// buat sebuah komponent atau fungsi yang dapat di export dan di import oleh class lain. anggaplah komponent seperti kepingan lego yang bisa digunakan untuk membuat berbagai bangunan
function Button() {
    // jika ingin membuat kode javascript maka tulis diatas return
    let nama_variable = "Hello World";

    // jika ingin membuat html maka gunakan return ()
    return (
        // jika ingin mengimpor banyak component maka gunakan <><>
        <>
        {/* styles berarti panggil css spesifik nya, button berarti panggil .button css nya.  */}
        {/* nama dari class nya akan unik. berikut adalah nama class nya: _button_4dh12_3 */}
            <button type="button" className={styles.button}>Click Me</button>
        </>
    );
}

// ekspor komponent yang sudah dibuat agar bisa di import oleh class lain. 
// ekspor bawaan Button;
export default Button;