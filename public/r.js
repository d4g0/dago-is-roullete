//card generator resourses

let card1_img = '1.JPG';
let card1_description = 'Let\'s go to  "La Sierra del Rosario", discover litle mountain the twon Ciro Redondo, his beatyfull sorroundings, and prepare for a chanlengin hik and a love neature exposure. Plus tradional cabing for stay in the heart of the mountains';

let card2_img = '2.jpg';
let card2_description = 'Historic lessons, insides from Cuba dayly basics, and lenguage practice on the BEACH!!!';

let card3_img = '3.jpg';
let card3_description = 'Let\'s play with some cuban flavors and craft a supper tasty meal.';

//////////////////////////////////////////////////


const loading = document.getElementById('loader');
const roullete = document.getElementById('roullete');
window.onload(change());




function change() {
    changeClass(loading, 'loaded');
    console.log('change triger...')
    //triger next()
    run_roullete();
}

function changeClass(element, css_class) {
    element.className = css_class;
    console.log('change done...')
}

function run_roullete() {
    let card;
    let number = Math.random();
    if (number <= 0.3) {
        card = 1;
    }
    if (number <= 0.6 && number > 0.3) {
        card = 2;
    }
    if (number > 0.6) {
        card = 3;
    }
    createCard(card);
    createFooter();
}

function createCard(card) {
    let img;
    let description;
    if (card == 1) {
        img = card1_img;
        description = card1_description;
    }
    if (card == 2) {
        img = card2_img;
        description = card2_description;
    }
    if (card == 3) {
        img = card3_img;
        description = card3_description;
    }

    let card_section = document.createElement('section');

    let card_img = document.createElement('img');
    card_img.src = img;
    card_section.appendChild(card_img);
    let card_description = document.createElement('p');
    card_description.innerText = description;
    card_description.className = 'text';
    card_section.appendChild(card_description);

    roullete.appendChild(card_section);


}

function createFooter() {
    let footer = document.createElement('footer');
    let thanks = document.createElement('p');
    let love = document.createElement('p');
    thanks.innerText = 'THANKS FOR WHATCH THIS';
    thanks.className = 'text';
    love.innerText = 'handcrafted whit love in havana';
    love.className = 'foot';
    footer.appendChild(thanks);
    footer.appendChild(love);
    roullete.appendChild(footer);
}


