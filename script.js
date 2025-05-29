document.getElementById("formPrenotazione").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = this.elements[0].value;
  const partenza = this.elements[1].value;
  const destinazione = this.elements[2].value;
  const dataOra = this.elements[3].value;

  const div = document.createElement("div");
  div.textContent = `Prenotazione: ${nome} da ${partenza} a ${destinazione} alle ${dataOra}`;
  document.getElementById("prenotazioniList").appendChild(div);
  this.reset();
});