function cariNilai() {
  let input = document.getElementById("inputAngka").value;
  let arrayAngka = input.split(",").map(Number);

  let min = Math.min(...arrayAngka);

  let max = Math.max(...arrayAngka);

  let sum = arrayAngka.reduce((a, b) => a + b, 0);
  let avg = sum / arrayAngka.length;

  // hasil
  document.getElementById("nilaiMin").innerHTML = min;
  document.getElementById("nilaiMax").innerHTML = max;
  document.getElementById("nilaiAvg").innerHTML = avg.toFixed(1);
}
