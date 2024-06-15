// ini untuk validasi, jadi misalnya saya ingin props dari props.name itu bertipe string bukannya integer
import PropTypes from 'prop-types';

// buat component atau fungsi yang akan di ekspor dan di import oleh class lain. Anggaplah component seperti kepingan lego yang dapat digunakan kembali untuk membuat sebuah bangunan
// parameter props akan menerima semua attribute dan value nya yang ditulis di parent nya, lebih tepatnya di Component nya
function Student(props) {
    // jika ingin menulis kode javascript maka tulis diatas return ()
    let nama_variable = "";

    // jika ingin membuat function maka tulis diatas return
    return ( 
        // jika ingin menulis bonyak komponent maka tulis <><>
        <>
            <div className="student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                {/* cetak jika props.is_hashira adalah true maka cetak 'hashira' kalau bukan maka cetak 'pemburu iblis' */}
                <p>{(props.is_hashira) ? 'Hashira' : 'Pemburu iblis biasa'}</p>
            </div>
        </>
     );
}

// untuk validasi tipe data kiriman dari props milik parent
Student.propTypes = {
    // name harus bertipe string
    name: PropTypes.string,
    age: PropTypes.number,
    is_hashira: PropTypes.bool
}

// ini digunakan jika parent tidak mengirimkan data props
Student.defaultProps = {
    name: "Guest",
    age: 0,
    is_hashira: false
}

export default Student;