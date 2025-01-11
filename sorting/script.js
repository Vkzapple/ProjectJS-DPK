function sortAngka() {
  let angkaStr = document.getElementById("angkaInput").value;

  let arrayAngka = angkaStr.split(",").map((item) => parseInt(item.trim()));

  let isAscending =
    document.querySelector('input[name="urutan"]:checked').value === "asc";

  arrayAngka.sort(function (a, b) {
    return isAscending ? a - b : b - a;
  });

  let tabel = "<table>";
  tabel += "<tr><td><strong>Angka</strong></td></tr>";

  arrayAngka.forEach(function (angka) {
    tabel += "<tr><td>" + angka + "</td></tr>";
  });

  tabel += "</table>";

  //hasil
  document.getElementById("hasilTabel").innerHTML = tabel;
}
