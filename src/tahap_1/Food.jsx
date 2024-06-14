// kita buat komponent atau fungsi yang akan kita ekspor, kita bisa anggap component sebagai kepingan logo untuk membuat sebuah bangunan lengkap
function Food() {
    // jika ingin mengetik kode javascript maka lakukan diatas return ()
    const food1 = "Orange";
    const food2 = "Banana";

    // kita kembalikkan menggunakan return () agar bisa membuat banyak element html
    return (
        <ul>
            <li>Apple</li>
            {/* jika ingin mencetak sebuah value dari variable maka gunakan kurung kurawal */}
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

// kita ekspor komponent kita agar kita bisa import
// ekspor bawaan komponen Food
export default Food;