function mostra(sezione) {
  const pagine = document.querySelectorAll('.pagina');
  pagine.forEach(p => p.style.display = 'none');
  document.getElementById(sezione).style.display = 'block';
}
document.getElementById('formPrenotazione').addEventListener('submit', function(e) {
  e.preventDefault();
  const cliente = document.getElementById('cliente').value;
  const partenza = document.getElementById('partenza').value;
  const destinazione = document.getElementById('destinazione').value;
  const data = document.getElementById('data').value;
  const ora = document.getElementById('ora').value;
  const targa = document.getElementById('targa').value;
  const voce = document.createElement('li');
  voce.textContent = `${data} ${ora} - ${cliente} (${partenza} → ${destinazione}) - Targa: ${targa}`;
  voce.onclick = () => {
    document.getElementById('foglioDettaglio').textContent = voce.textContent;
    mostra('foglio');
  };
  document.getElementById('listaPrenotazioni').appendChild(voce);
  this.reset();
});
