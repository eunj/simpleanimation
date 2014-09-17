var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var Rbt;
var Bbt;
var uidrum;
var lsoil;
var trowel;
var dust;

function preload() {
	game.load.image('back', 'assets/back.jpg');
	game.load.image('drum', 'assets/drum.png');
	game.load.image('uihm', 'assets/uihm.png');
	game.load.image('onRbt', 'assets/onRbt.png');

	game.load.spritesheet('Rbt','assets/Rbt.png');
	game.load.spritesheet('Bbt','assets/Bbt.png');
	game.load.spritesheet('uidrum','assets/uidrum.png',95,65);
	game.load.spritesheet('lsoil','assets/lsoil.png',500,247);
	game.load.spritesheet('rsoil','assets/rsoil.png',534,435);

	game.load.spritesheet('trowel','assets/trowel.png',548,711);

	game.load.spritesheet('dust','assets/dust.png',259,341);



}

function create() {
	game.add.sprite(0,0, 'back');
	game.add.sprite(0,0, 'drum');
	game.add.sprite(1722,30, 'uihm');

	Rbt = game.add.sprite(865,106, 'Rbt');
	Rbt.inputEnabled = true;
	Rbt.events.onInputDown.add(RbtClick, this);

	Bbt = game.add.sprite(980,106, 'Bbt');
	Bbt.inputEnabled = true;
	Bbt.events.onInputDown.add(BbtClick, this);

	uidrum = game.add.sprite(1585,30, 'uidrum');
	uidrum.animations.add('move');
	uidrum.animations.play('move',8,true);

	lsoil = game.add.sprite(0,830, 'lsoil');
	lsoil.animations.add('movesoil');
	lsoil.animations.play('movesoil',5,true);

	rsoil = game.add.sprite(1404,700, 'rsoil');

	trowel = game.add.sprite(120,680, 'trowel');
	trowel.animations.add('movetrowel');
	
}

function RbtClick() {	

trowel.animations.play('movetrowel', 8, false);


dust = game.add.sprite(120,680, 'dust');
dust.animations.add('movedust');
dust.animations.play('movedust', 8, false);
}


function BbtClick() {	

}