// Funció per filtrar les files de la taula
function filtrarTaula() {
    // Agafa el valor de l'input i el transforma a minúscules
    var input = document.getElementById("myInput");
    var filtre = input.value.toLowerCase();
    var taula = document.getElementById("myTable");
    var files = taula.getElementsByTagName("tr");
  
    // Recorre totes les files (excepte la capçalera) per comprovar si coincideixen amb el filtre
    for (var i = 1; i < files.length; i++) {
      var fila = files[i];
      var textFila = fila.textContent || fila.innerText;
  
      if (textFila.toLowerCase().indexOf(filtre) > -1) {
        fila.style.display = ""; // Mostra la fila
      } else {
        fila.style.display = "none"; // Amaga la fila
      }
    }
  }
  