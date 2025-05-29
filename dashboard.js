import { db, ref, push } from './firebase-config.js';

window.salvaFoglio = function() {
  const testo = document.getElementById("foglioInput").value;
  const nuovaNota = push(ref(db, 'fogliDiBordo'));
  nuovaNota.set({
    testo: testo,
    timestamp: new Date().toISOString()
  });
  document.getElementById("savedBoard").innerText = testo;
  document.getElementById("foglioInput").value = "";
};