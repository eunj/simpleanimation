var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});
var Rbt;
var Bbt;
var uidrum;
var lsoil;
var dust = [];
var trowel;
var chorogi;
var hello;
var bgm;



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

	game.load.spritesheet('dust','assets/dust.png',259,341);
	game.load.spritesheet('trowel','assets/trowel.png',548,711);

	game.load.spritesheet('chorogi','assets/chorogi.png',263,441);

	game.load.audio('hello', 'assets/sound02.mp3');
	game.load.audio('bgm', 'assets/04 Yuki no Eki.mp3');
	


}

function create() {

	hello = game.add.audio('hello');
	bgm = game.add.audio('bgm');
	bgm.play();



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

	dust[0] = game.add.sprite(120,680, 'dust');
	dust[0].animations.add('movedust');

	dust[1] = game.add.sprite(300,680, 'dust');
	dust[1].animations.add('movedust');

	dust[2] = game.add.sprite(200,680, 'dust');
	dust[2].animations.add('movedust');



	trowel = game.add.sprite(130,690, 'trowel');
	trowel.animations.add('movetrowel');

	trowel.mo = game.add.tween(trowel)
		.to({ x: 130, y: 680 }, 2000, Phaser.Easing.Linear.None)
		.to({ x: 430, y: 600 }, 2000, Phaser.Easing.Linear.None)
		.loop()
	.start();
	
}

function RbtClick() {	

dust[0].animations.play('movedust', 8, false);
dust[1].animations.play('movedust', 5, false);
dust[2].animations.play('movedust', 10, false);

trowel.animations.play('movetrowel', 7, false);
hello.play();

}


function BbtClick() {	
	
chorogi = game.add.sprite(100,600, 'chorogi');
chorogi.animations.add('movechorogi');
chorogi.animations.play('movechorogi', 10, false);


}