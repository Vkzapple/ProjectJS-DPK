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

            // Jika jumlah 0, kosongkan daftar
            if (jumlah === 0) {
                daftarItem.innerHTML = '';
                return;
            }

            // Tambah item jika kurang
            if (jumlahSekarang < jumlah) {
                for (var i = jumlahSekarang; i < jumlah; i++) {
                    var item = document.createElement('li');
                    item.textContent = teks;
                    
                    // Atur warna teks
                    if (warnaTeks) {
                        item.style.color = warnaTeks;
                    }

                    // Atur warna hover
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