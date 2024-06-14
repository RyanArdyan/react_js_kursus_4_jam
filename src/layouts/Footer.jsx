// kita buat komponent atau fungsi yang seperti kepingan lego untuk diimpor
function Footer () {
// kita pakai return () agar bisa menggunakan banyak html
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Ryan Software Enginer Website</p>
        </footer>
    );
}

// kita ekspor agar dapat digunakan oleh class lain
export default Footer;

