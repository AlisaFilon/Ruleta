const coders = ['Alisa', 'Angie', 'Gaby', 'Rosangely', 'Yeraldín', 'Eliana', 'Inga', 'DanielaR', 'MariaLaura', 'Taiza',
    'Nicole', 'AnaLissette', 'AnaGarcía', 'DanielaT', 'Marta', 'Amanda', 'Yasmin', 'Sònia', 'Leo', 'Pepi', 'Claudia',
    'Olga', 'Flo', 'Ranju'];

function randomCoder() {
    let elegida = Math.floor(Math.random() * coders.length);
    let eliminada = coders.splice(elegida,1);
    document.getElementById("select").innerHTML = eliminada;
}
function refreshPage(){
    location.reload();
}
let button = document.getElementById("generate");

button.addEventListener("click", randomCoder);





