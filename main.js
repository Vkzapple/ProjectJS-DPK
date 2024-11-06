// ditambah
// var a, b, c;
// a = 18
// b = 2
// c = a + b;
// alert(c)
//     console.log(c)

// dikali
//     var a, b, c;
// a = 18
// b = 2
// c = a *  b;
// alert(c)
//     console.log(c)

    // dibagi
    //  var a, b, c;
    //  a =  10
    //  b = 2
    //  c = a / b;
    //  alert(c)
    //  console.log(c)


    //  aritmatika
    // / = dibagi
    // + = ditambah
    // * = dikali 
    // - = dikurang

    //    // Fungsi untuk menyimpan data baru
    //     function simpanData() {
    //         // Mengambil nilai dari form
    //         const namaBuah = document.getElementById('namaBuah').value;
    //         const berat = document.getElementById('berat').value;
            
    //         // Validasi input
    //         if (!namaBuah || !berat) {
    //             alert('Mohon isi semua field!');
    //             return;
    //         }

    //         // Mengambil referensi tabel
    //         const tabel = document.getElementById('tabelBuah').getElementsByTagName('tbody')[0];
            
    //         // Membuat baris baru
    //         const barisBaru = tabel.insertRow();
            
    //         // Menambahkan sel-sel
    //         const selNo = barisBaru.insertCell(0);
    //         const selNama = barisBaru.insertCell(1);
    //         const selBerat = barisBaru.insertCell(2);
    //         const selAction = barisBaru.insertCell(3);
            
    //         // Mengisi nomor urut
    //         selNo.textContent = tabel.rows.length;
            
    //         // Mengisi data
    //         selNama.textContent = namaBuah;
    //         selBerat.textContent = berat + 'kg';
            
    //         // Memberi warna merah jika berat > 5kg
    //         if (parseFloat(berat) > 5) {
    //             selBerat.className = 'red-bg';
    //         }
            
    //         // Menambahkan tombol hapus
    //         selAction.innerHTML = '<button onclick="hapusBaris(this)">Hapus</button>';
            
    //         // Mengosongkan form
    //         document.getElementById('namaBuah').value = '';
    //         document.getElementById('berat').value = '';
    //     }

    //     // Fungsi untuk menghapus baris
    //     function hapusBaris(button) {
    //         const baris = button.parentNode.parentNode;
    //         baris.parentNode.removeChild(baris);
            
    //         // Memperbarui penomoran
    //         const tabel = document.getElementById('tabelBuah').getElementsByTagName('tbody')[0];
    //         for (let i = 0; i < tabel.rows.length; i++) {
    //             tabel.rows[i].cells[0].textContent = i + 1;
    //         }
    //     }

        // Ambil semua elemen yang diperlukan
        var inputTeks = document.getElementById('teks');
        var inputJumlah = document.getElementById('jumlah');
        var daftarItem = document.getElementById('daftarItem');
        var radioTeks = document.getElementsByName('warnaTeks');
        var radioHover = document.getElementsByName('warnaHover');

        // Fungsi untuk mendapatkan nilai radio yang dipilih
        function ambilWarnaRadio(nama) {
            var radio = document.getElementsByName(nama);
            for (var i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                    return radio[i].value;
                }
            }
            return null;
        }

        // Fungsi untuk mengupdate daftar
        function updateDaftar() {
            // Ambil nilai input
            var teks = inputTeks.value;
            var jumlah = parseInt(inputJumlah.value);
            var jumlahSekarang = daftarItem.childElementCount;
            var warnaTeks = ambilWarnaRadio('warnaTeks');
            var warnaHover = ambilWarnaRadio('warnaHover');

            if (jumlah === 0) {
                daftarItem.innerHTML = '';
                return;
            }

            if (jumlahSekarang < jumlah) {
                for (var i = jumlahSekarang; i < jumlah; i++) {
                    var item = document.createElement('li');
                    item.textContent = teks;
                    
                    // Atur warna teks
                    if (warnaTeks) {
                        item.style.color = warnaTeks;
                    }

                    if (warnaHover) {
                        item.onmouseover = function() {
                            this.style.backgroundColor = warnaHover;
                        }
                        item.onmouseout = function() {
                            this.style.backgroundColor = '';
                        }
                    }

                    daftarItem.appendChild(item);
                }
            }
            // Hapus item jika kelebihan
            else if (jumlahSekarang > jumlah) {
                for (var i = jumlahSekarang; i > jumlah; i--) {
                    daftarItem.removeChild(daftarItem.lastChild);
                }
            }

            // Update teks dan warna untuk semua item
            var semuaItem = daftarItem.getElementsByTagName('li');
            for (var i = 0; i < semuaItem.length; i++) {
                semuaItem[i].textContent = teks;
                if (warnaTeks) {
                    semuaItem[i].style.color = warnaTeks;
                }
                
                // Update event hover
                semuaItem[i].onmouseover = function() {
                    this.style.backgroundColor = warnaHover;
                }
                semuaItem[i].onmouseout = function() {
                    this.style.backgroundColor = '';
                }
            }
        }

        // Tambahkan event listener
        inputTeks.oninput = updateDaftar;
        inputJumlah.oninput = updateDaftar;
        
        // Event listener untuk radio button
        for (var i = 0; i < radioTeks.length; i++) {
            radioTeks[i].onclick = updateDaftar;
        }
        for (var i = 0; i < radioHover.length; i++) {
            radioHover[i].onclick = updateDaftar;
        }