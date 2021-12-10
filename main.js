const player = {
    name:'',
    hp:'',
    img:'',
    weapon:['nunchucks'],
    attack: function() {
        console.log(name + 'fight');
    }
};

function createPlayer(name, weapon, img){
    const 
      player1 = player;
          player1.name = name;
          player1.weapon = weapon;
          player1.img = img;
    
    const $player = document.createElement('div');
    $player.classList.add('player1');
    //$player.name = name;

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $life = document.createElement('div');
    $life.classList.add('life');
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

    //$player.appendChild($name);
    //$player.appendChild(player1);

    //const $progressbar = document.createElement('div');
    /*
    $div.appendChild($progressbar);
    
    const $lifeDiv = document.createElement('div');
    const $life = progressbar.name = 'life';
    $lifeDiv.classList.add($life);    
    $progressbar.appendChild($lifeDiv);

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
*/

    return $player;

};
const $player1 = createPlayer('sonya', 'weap', 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif');
console.log($player1);
