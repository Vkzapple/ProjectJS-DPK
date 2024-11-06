   // Fungsi menyimpan data baru
        function simpanData() {
            const namaBuah = document.getElementById('namaBuah').value;
            const berat = document.getElementById('berat').value;
            
            if (!namaBuah || !berat) {
                alert('Mohon isi semua field!');
                return;
            }

            const tabel = document.getElementById('tabelBuah').getElementsByTagName('tbody')[0];
            

            const barisBaru = tabel.insertRow();
            
            const selNo = barisBaru.insertCell(0);
            const selNama = barisBaru.insertCell(1);
            const selBerat = barisBaru.insertCell(2);
            const selAction = barisBaru.insertCell(3);
            

            selNo.textContent = tabel.rows.length;

            selNama.textContent = namaBuah;
            selBerat.textContent = berat + 'kg';
            
            if (parseFloat(berat) > 5) {
                selBerat.className = 'red-bg';
            }
            
            selAction.innerHTML = '<button onclick="hapusBaris(this)">Hapus</button>';
            
            document.getElementById('namaBuah').value = '';
            document.getElementById('berat').value = '';
        }


        function hapusBaris(button) {
            const baris = button.parentNode.parentNode;
            baris.parentNode.removeChild(baris);
            
            const tabel = document.getElementById('tabelBuah').getElementsByTagName('tbody')[0];
            for (let i = 0; i < tabel.rows.length; i++) {
                tabel.rows[i].cells[0].textContent = i + 1;
            }
        }