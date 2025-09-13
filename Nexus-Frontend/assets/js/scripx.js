
window.addEventListener("DOMContentLoaded", () => {
  const diaSelect = document.getElementById("dia");
  const mesSelect = document.getElementById("mes");
  const anoSelect = document.getElementById("ano");

  for (let d = 1; d <= 31; d++) {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    diaSelect.appendChild(opt);
  }

  const meses = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
  ];
  meses.forEach((m, i) => {
    const opt = document.createElement("option");
    opt.value = i + 1;
    opt.textContent = m;
    mesSelect.appendChild(opt);
  });

  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1900; y--) {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    anoSelect.appendChild(opt);
  }
});