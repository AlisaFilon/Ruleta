let btnRandom = document.querySelector('button');
let result =document.querySelector('h1');

let coders = ['Alisa', 'Angie', 'Gaby', 'Rosangely', 'Yeraldine', 'Eliana', 'Inga', 'DanielaR', 'MariaLaura', 'Taiza', 'Nicole', 'AnaLissette', 'AnaGarcía', 'DanielaT', 'Marta', 'Amanda', 'Yasmin', 'Sònia', 'Leo', 'Pepi', 'Claudia', 'Jolga', 'Flo', 'Ranju'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, coders.length-1);
    result.innerText = coders[index];
});