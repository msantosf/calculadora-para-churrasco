function getAnswers() {

    cleanResults();

    var adults = document.getElementsByTagName('input')[0];
    var children = document.getElementsByTagName('input')[1];
    var hours = document.getElementsByTagName('input')[2];

    if (adults.value <= 0 || children.value < 0 || hours.value <= 0) {
        if (alert('Oooops! Valores incorretos para cálculos! Verifique e tente novamente!')) { }
        else {
            window.location.reload();
            return false;
        }
    }

    var results = calculate(adults.value, children.value, hours.value);

}

function calculate(adults, children, hours) {

    let steak, beer, soda;
    if (hours <= 6) {
        steak = (adults * 0.4 + ((children / 2) * 0.4)).toFixed(1);
        beer = adults * (4 * 0.350);
        soda = children * 0.5;
    } else {
        steak = (adults * 0.8 + ((children / 2) * 0.8)).toFixed();
        beer = adults * 2;
        soda = children * 1.5;
    }

    showResults(steak, beer, soda, hours);

}

function showResults(steak, beer, soda, hours) {

    let results = document.getElementById('resultado');

    let h2 = document.createElement('h2');
    h2.innerText = 'Resultados:';

    let ul = document.createElement('ul');
    let liSteak = document.createElement('li');
    let liBeer = document.createElement('li');
    let liSoda = document.createElement('li');

    liSteak.innerHTML = '<i class="fas fa-drumstick-bite"></i> ' + steak + 'Kg de Carne';
    liBeer.innerHTML = '<i class="fas fa-beer"></i> ' + beer + 'L de Cerveja';
    liSoda.innerHTML = '<i class="fas fa-glass-cheers"></i> ' + soda + 'L de Refrigerante';

    ul.append(liSteak, liBeer, liSoda);

    let infoH3 = document.createElement('h3');
    infoH3.innerText = 'Sobre o cálculo:';
    let info = document.createElement('p');
    info.innerHTML = 'Quando a duração é menor que 6h: <br> 0,400g de carne por adulto (2 crianças equivalem a 1 adulto) <br> 4 latas de cerveja por adulto <br> 0,5L de refrigerante por criança <br><br> Quando a duração é maior que 6h: <br> 0,800g de carne por adulto (2 crianças equivalem a 1 adulto) <br> 2L de cerveja por adulto <br> 1,5L de refrigerante por criança';

    results.append(h2, ul, infoH3, info);
}

function cleanResults() {

    if (document.getElementsByTagName('i').length > 0) {
        let result = document.getElementById('resultado');
        for (let count = 3 ; count >= 0 ; count --){
            result.children[count].remove();
        }

    }
}