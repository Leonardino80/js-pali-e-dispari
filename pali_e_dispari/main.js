// - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// (Quindi classico gioco pari o dispari dove utente sceglie a priori se uscirà pari o dipsari e poi dichiara un numero (tra 1 e 5) .
// Il computer genera random altro numero sullo stesso range, così sapremo chi ha vinto.

// - L’utente sceglie pari
var pari = confirm('scegli pari? premi ok. Per scegliere dispari premi Cancel')
// e un numero da 1 a 5.
var n_giocatore = prompt('scegli un numero da 1 a 5')
// validazione della scelta del giocatore
if (parseInt(n_giocatore,10) > 5) {
  alert('devi scegliere un numero tra 1 e 5!');
} else {
  // Il computer genera random altro numero sullo stesso range,
  var n_computer = Math.ceil(Math.random() * 5);
  alert ('il risultato del computer è' + n_computer);
  var somma = parseInt(n_computer,10) + parseInt(n_giocatore,10);
// così sapremo chi ha vinto.
  if (somma % 2 === 0 && pari) {
    alert('hai vinto!');
  // } else if { somma % 2 != 0 && pari=false)
  //   alert('hai vinto!');
  } else {
  alert('hai perso!');
  }
}
