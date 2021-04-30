const coders = ['Alisa', 'Angie', 'Gaby', 'Rosangely', 'Yeraldine', 'Eliana', 'Inga', 'DanielaR', 'MariaLaura', 'Taiza',
    'Nicole', 'AnaLissette', 'AnaGarcía', 'DanielaT', 'Marta', 'Amanda', 'Yasmis', 'Sònia', 'Leo', 'Pepi', 'Claudia',
    'Jolga', 'Flo', 'Ranju'];

function randomCoder() {
    let elegida = coders[Math.floor(Math.random() * coders.length)];
    document.getElementById("select").innerHTML = elegida;
}

let button = document.getElementById("generate");

button.addEventListener("click", randomCoder);


