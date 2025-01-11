// Array data buah
let dataBuah = [];

// menambah data
function tambahBuah() {
  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const gambar = document.getElementById("gambar").value;

  if (!nama || !jumlah || !gambar) {
    alert("Semua field harus diisi!");
    return;
  }

  // objek buah baru
  const buah = {
    id: dataBuah.length + 1,
    nama: nama,
    berat: jumlah,
    gambar: gambar,
  };

  // Menambahin buah ke array
  dataBuah.push(buah);

  // Reset form
  document.getElementById("nama").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("gambar").value = "";

  // Update tabel
  tampilkanData();
}

//menampilkan data
function tampilkanData() {
  const tabel = document.getElementById("tabelBuah");
  let isi = "";

  dataBuah.forEach((buah, index) => {
    isi += `
                    <tr>
                        <td>${buah.id}</td>
                        <td><input type="text" value="${buah.nama}" id="nama-${buah.id}"></td>
                        <td><input type="text" value="${buah.berat}" id="berat-${buah.id}"></td>
                        <td><input type="text" value="${buah.gambar}" id="gambar-${buah.id}"></td>
                        <td>
                            <button class="hapus" onclick="hapusBuah(${index})">Hapus</button>
                            <button onclick="simpanBuah(${buah.id})">Save</button>
                        </td>
                    </tr>
                `;
  });

  tabel.innerHTML = isi;
}

// menghapus data
function hapusBuah(index) {
  if (confirm("Yakin ingin menghapus data ini?")) {
    dataBuah.splice(index, 1);
    tampilkanData();
  }
}

// edit
function simpanBuah(id) {
  const index = dataBuah.findIndex((buah) => buah.id === id);

  dataBuah[index] = {
    id: id,
    nama: document.getElementById(`nama-${id}`).value,
    berat: document.getElementById(`berat-${id}`).value,
    gambar: document.getElementById(`gambar-${id}`).value,
  };

  alert("Data berhasil disimpan!");
  tampilkanData();
}
