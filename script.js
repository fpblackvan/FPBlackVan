function toggleSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === "ncc" && pass === "1234") {
    alert("Accesso effettuato!");
    toggleSection('dashboard');
  } else {
    alert("Credenziali errate");
  }
}

document.getElementById("formPrenotazione").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = this.elements[0].value;
  const partenza = this.elements[1].value;
  const destinazione = this.elements[2].value;
  const dataOra = this.elements[3].value;

  const div = document.createElement("div");
  div.textContent = `📅 ${dataOra} | ${nome}: da ${partenza} a ${destinazione}`;
  document.getElementById("prenotazioniList").appendChild(div);
  this.reset();
});

function salvaFoglio() {
  const testo = document.getElementById("foglioDiBordo").value;
  const box = document.createElement("div");
  box.textContent = "📝 Salvato: " + testo;
  document.getElementById("foglioSalvato").appendChild(box);
  document.getElementById("foglioDiBordo").value = "";
}