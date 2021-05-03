const coders = ['Alisa', 'Angie', 'Gaby', 'Rosangely', 'Yeraldine', 'Eliana', 'Inga', 'DanielaR', 'MariaLaura', 'Taiza',
    'Nicole', 'AnaLissette', 'AnaGarcía', 'DanielaT', 'Marta', 'Amanda', 'Yasmin', 'Sònia', 'Leo', 'Pepi', 'Claudia',
    'Jolga', 'Flo', 'Ranju'];

function randomCoder() {
    let elegida = Math.floor(Math.random() * coders.length);
    const norepetir = coders [ randomCoder];
    let eliminada = coders.splice(elegida,1);
    document.getElementById("select").innerHTML = eliminada;
}
function refreshPage(){
    window.location.reload();
}
let button = document.getElementById("generate");

button.addEventListener("click", randomCoder);




