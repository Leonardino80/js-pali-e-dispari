// - Capire se la parola inserita dall’utente è palindroma o no (e quindi output di conseguenza)
// chiedo la parola
var parola = prompt('dammi una parola, controlliamo se è palindroma');
// creo una stringa vuota per la parola inversa
var parola_inversa = '';
// ciclo per riempire la stringa della parola inversa
for (var i = parola.length -1; i >= 0; i--) {
parola_inversa += parola[i];
}
// controllo se la parola è palindroma oppure no
if (parola_inversa==parola) {
  alert('la parola è palindroma')
} else {
  alert('la parola NON è palindroma')
}
