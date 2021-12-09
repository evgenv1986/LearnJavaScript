const player = {
    name:'--',
    hp:'',
    img:'',
    weapon:['nunchucks'],
    attack: function() {
        console.log(name + 'fight');
    }
};
//console.log(player1);

const $player = player.name = 'sdsad';
console.log($player);

const progressbar = {
    life: '',
    name: ''
};


function createPlayer(name){
    const $div = document.createElement('div');
    const $player = player.name = name;
    $div.classList.add($player);
    
    const $progressbar = document.createElement('div');
    const $prgBar = 'progressbar' ;
    $progressbar.classList.add($prgBar);
    
    const $lifeDiv = document.createElement('div');
    const $life = progressbar.name = 'life';
    $lifeDiv.classList.add($life);    
    $progressbar.appendChild($lifeDiv);
    $div.appendChild($progressbar);

    const $nameDiv = document.createElement('div');
    const $name = 'name';
    $nameDiv.innerText = 'scorpion';
    $nameDiv.classList.add($name);
    $progressbar.appendChild($nameDiv);


    const $characterDiv = document.createElement('div');
    const $character = 'character';
    $characterDiv.classList.add($character);
    $div.appendChild($characterDiv);

    const $img = document.createElement('img');
    $img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";
    $characterDiv.appendChild($img);


    return $div;

};
const $pl = createPlayer('player1');
console.log($pl);
