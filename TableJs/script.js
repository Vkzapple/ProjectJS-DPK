   // Fungsi untuk menyimpan data baru
        function simpanData() {
            // Mengambil nilai dari form
            const namaBuah = document.getElementById('namaBuah').value;
            const berat = document.getElementById('berat').value;
            
            // Validasi input
            if (!namaBuah || !berat) {
                alert('Mohon isi semua field!');
                return;
            }

            // Mengambil referensi tabel
            const tabel = document.getElementById('tabelBuah').getElementsByTagName('tbody')[0];
            
            // Membuat baris baru
            const barisBaru = tabel.insertRow();
            
            // Menambahkan sel-sel
            const selNo = barisBaru.insertCell(0);
            const selNama = barisBaru.insertCell(1);
            const selBerat = barisBaru.insertCell(2);
            const selAction = barisBaru.insertCell(3);
            
            // Mengisi nomor urut
            selNo.textContent = tabel.rows.length;
            
            // Mengisi data
            selNama.textContent = namaBuah;
            selBerat.textContent = berat + 'kg';
            
            // Memberi warna merah jika berat > 5kg
            if (parseFloat(berat) > 5) {
                selBerat.className = 'red-bg';
            }
            
            // Menambahkan tombol hapus
            selAction.innerHTML = '<button onclick="hapusBaris(this)">Hapus</button>';
            
            // Mengosongkan form
            document.getElementById('namaBuah').value = '';
            document.getElementById('berat').value = '';
        }

        // Fungsi untuk menghapus baris
        function hapusBaris(button) {
            const baris = button.parentNode.parentNode;
            baris.parentNode.removeChild(baris);
            
            // Memperbarui penomoran
            const tabel = document.getElementById('tabelBuah').getElementsByTagName('tbody')[0];
            for (let i = 0; i < tabel.rows.length; i++) {
                tabel.rows[i].cells[0].textContent = i + 1;
            }
        }