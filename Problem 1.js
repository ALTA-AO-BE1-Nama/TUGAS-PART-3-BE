// Nama : Fino

function hitungLuasPermukaanTabung(r, T) {
    // nilai pi dapat diambil dari objek
    let pi = Math.PI;

    // menghitung luas
    let luasPermukaan = 2 * pi * r * (r + T);

    return luasPermukaan;
}

console.log(hitungLuasPermukaanTabung(7, 10));
// Output: 752.4258755445022