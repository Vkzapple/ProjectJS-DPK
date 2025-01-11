// Array data buah & halaman
let dataBuah = [];
let halamanSaatIni = 1;
const dataPerHalaman = 5;

// menambah data
function tambahBuah() {
  const nama = document.getElementById("nama").value;
  const jumlah = document.getElementById("jumlah").value;
  const gambar = document.getElementById("gambar").value;

  if (!nama || !jumlah || !gambar) {
    alert("Semua field harus diisi!");
    return;
  }

  // Membuat objek buah baru
  const buah = {
    id: dataBuah.length + 1,
    nama: nama,
    berat: jumlah,
    gambar: gambar,
  };

  // Menambah ke array
  dataBuah.push(buah);

  // Reset form
  document.getElementById("nama").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("gambar").value = "";

  tampilkanData();
}

// menampilkan data dengan paging
function tampilkanData() {
  const tabel = document.getElementById("tabelBuah");
  const mulaiDari = (halamanSaatIni - 1) * dataPerHalaman;
  const sampai = mulaiDari + dataPerHalaman;
  let isi = "";

  // Slice array sesuai halaman yang aktif
  const dataDiHalaman = dataBuah.slice(mulaiDari, sampai);

  dataDiHalaman.forEach((buah, index) => {
    isi += `
                    <tr>
                        <td>${mulaiDari + index + 1}</td>
                        <td><input type="text" value="${buah.nama}" id="nama-${
      buah.id
    }"></td>
                        <td><input type="text" value="${
                          buah.berat
                        }" id="berat-${buah.id}"></td>
                        <td><input type="text" value="${
                          buah.gambar
                        }" id="gambar-${buah.id}"></td>
                        <td>
                            <button class="hapus" onclick="hapusBuah(${
                              mulaiDari + index
                            })">Hapus</button>
                            <button onclick="simpanBuah(${
                              buah.id
                            })">Save</button>
                        </td>
                    </tr>
                `;
  });

  tabel.innerHTML = isi;
  updateTombolPaging();
  updateInfoHalaman();
}

// untuk update tombol paging
function updateTombolPaging() {
  const totalHalaman = Math.ceil(dataBuah.length / dataPerHalaman);
  document.getElementById("btnPrev").disabled = halamanSaatIni === 1;
  document.getElementById("btnNext").disabled =
    halamanSaatIni === totalHalaman || totalHalaman === 0;
}

//untuk update informasi halaman
function updateInfoHalaman() {
  const totalHalaman = Math.ceil(dataBuah.length / dataPerHalaman);
  const infoHalaman = document.getElementById("infoHalaman");
  infoHalaman.textContent = `Halaman ${halamanSaatIni} dari ${
    totalHalaman || 1
  } (Total data: ${dataBuah.length})`;
}

// untuk ke halaman sebelumnya
function halamanSebelumnya() {
  if (halamanSaatIni > 1) {
    halamanSaatIni--;
    tampilkanData();
  }
}

//untuk ke halaman selanjutnya
function halamanSelanjutnya() {
  const totalHalaman = Math.ceil(dataBuah.length / dataPerHalaman);
  if (halamanSaatIni < totalHalaman) {
    halamanSaatIni++;
    tampilkanData();
  }
}

// menghapus data
function hapusBuah(index) {
  if (confirm("Yakin ingin menghapus data ini?")) {
    dataBuah.splice(index, 1);
    // Jika halaman saat ini kosong setelah penghapusan, mundur satu halaman
    const totalHalaman = Math.ceil(dataBuah.length / dataPerHalaman);
    if (halamanSaatIni > totalHalaman && totalHalaman > 0) {
      halamanSaatIni--;
    }
    tampilkanData();
  }
}

// (edit)
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

tampilkanData();
