        var inputTeks = document.getElementById('teks');
        var inputJumlah = document.getElementById('jumlah');
        var daftarItem = document.getElementById('daftarItem');
        var radioTeks = document.getElementsByName('warnaTeks');
        var radioHover = document.getElementsByName('warnaHover');

        function ambilWarnaRadio(nama) {
            var radio = document.getElementsByName(nama);
            for (var i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                    return radio[i].value;
                }
            }
            return null;
        }

        function updateDaftar() {
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
            else if (jumlahSekarang > jumlah) {
                for (var i = jumlahSekarang; i > jumlah; i--) {
                    daftarItem.removeChild(daftarItem.lastChild);
                }
            }

            var semuaItem = daftarItem.getElementsByTagName('li');
            for (var i = 0; i < semuaItem.length; i++) {
                semuaItem[i].textContent = teks;
                if (warnaTeks) {
                    semuaItem[i].style.color = warnaTeks;
                }
                
                semuaItem[i].onmouseover = function() {
                    this.style.backgroundColor = warnaHover;
                }
                semuaItem[i].onmouseout = function() {
                    this.style.backgroundColor = '';
                }
            }
        }

        inputTeks.oninput = updateDaftar;
        inputJumlah.oninput = updateDaftar;
        
        for (var i = 0; i < radioTeks.length; i++) {
            radioTeks[i].onclick = updateDaftar;
        }
        for (var i = 0; i < radioHover.length; i++) {
            radioHover[i].onclick = updateDaftar;
        }