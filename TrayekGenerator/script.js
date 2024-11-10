function buatTrayek() {
  let teksArea = document.getElementById("masukan").value;
  let trayekArray = teksArea.split(",");
  let hasilHTML = "<table>";

  // Tambah header table
  hasilHTML += '<tr><td class="header">Trayek</td></tr>';

  // Proses setiap trayek
  for (let trayek of trayekArray) {
    if (trayek.trim().length > 0) {
      let kotaArray = trayek.trim().split(" ");
      if (kotaArray.length >= 2) {
        let kotaAwal = kotaArray[0];
        let kotaAkhir = kotaArray[kotaArray.length - 1];
        hasilHTML += `<tr><td>${kotaAwal} - ${kotaAkhir}</td></tr>`;
      }
    }
  }

  hasilHTML += "</table>";
  document.getElementById("hasilTrayek").innerHTML = hasilHTML;
}
