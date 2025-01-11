function cekBilanganPrima(angka) {
  if (angka < 2) return false;

  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) return false;
  }

  return true;
}

function generatePrima() {
  let awal = parseInt(document.getElementById("angkaPertama").value);
  let akhir = parseInt(document.getElementById("angkaTerakhir").value);

  let bilanganPrima = [];

  for (let i = awal + 1; i < akhir; i++) {
    if (cekBilanganPrima(i)) {
      bilanganPrima.push(i);
    }
  }

  // Tabel Hasil
  let tabel = "<table>";
  tabel +=
    "<tr><td><b>Bilangan Prima Antara " +
    awal +
    " dan " +
    akhir +
    "</b></td></tr>";

  // Tabel Bilangan Prima
  bilanganPrima.forEach((angka) => {
    tabel += "<tr><td>" + angka + "</td></tr>";
  });

  tabel += "</table>";

  // Hasil
  document.getElementById("hasil").innerHTML = tabel;
}
