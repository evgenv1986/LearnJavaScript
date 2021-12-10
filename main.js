const player = {
    name:'',
    hp:'',
    img:'',
    weapon:['nunchucks'],
    attack: function() {
        console.log(name + 'fight');
    }
};

const $arenas = document.createElement('div');
$arenas.classList.add('arenas');

function createPlayer(name, weapon, img, hp){
    const 
      player1 = player;
          player1.name = name;
          player1.weapon = weapon;
          player1.img = img;
          player1.hp = hp;
    
    const $player = document.createElement('div');
    $player.classList.add('player');
    //$player.name = name;

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.innerText = player1.hp;
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $img = document.createElement('img');
    $img.src = img;
    $character.appendChild($img);
    
    $arenas.appendChild($player);

    return $arenas;
};
const $player1 = createPlayer(
    'sonya', 
    'weap', 
    'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
    ,99);

const $player2 = createPlayer(
    'luKan', 
    'mistic', 
    'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
    ,144);    

//console.log($player1);
//console.log($player2);
console.log($arenas);
