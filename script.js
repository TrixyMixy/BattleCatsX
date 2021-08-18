const screenWidth=1600;
const screenHeight=900;
const game = new PIXI.Application({width:screenWidth,height:screenHeight});
document.body.appendChild(game.view);

//Controls
var keys={
  //Top Row
  Qkey: {isDown:false},
  Wkey: {isDown:false},
  Ekey: {isDown:false},
  Rkey: {isDown:false},
  Tkey: {isDown:false},
  //Bottom Row
  Akey: {isDown:false},
  Skey: {isDown:false},
  Dkey: {isDown:false},
  Fkey: {isDown:false},
  Gkey: {isDown:false}
}
document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logKeyUp);

function logKey(e) {
  switch(e.which){
    case 81: // Q
      keys.Qkey.isDown=true;
      break;
    case 87: // W
      keys.Wkey.isDown=true;
      break;
    case 69: // E
      keys.Ekey.isDown=true;
      break;
    case 82: // R
      keys.Rkey.isDown=true;
      break;
    case 84: // T
      keys.Tkey.isDown=true;
      break;
    case 65: // A
      keys.Akey.isDown=true;
      break;
    case 83: // S
      keys.Skey.isDown=true;
      break;
    case 68: // D
      keys.Dkey.isDown=true;
      break;
    case 70: // F
      keys.Fkey.isDown=true;
      break;
    case 71: // G
      keys.Gkey.isDown=true;
      break;
  }
}
function logKeyUp(e) {
  switch(e.which){
    case 81: // Q
      keys.Qkey.isDown=false;
      break;
    case 87: // W
      keys.Wkey.isDown=false;
      break;
    case 69: // E
      keys.Ekey.isDown=false;
      break;
    case 82: // R
      keys.Rkey.isDown=false;
      break;
    case 84: // T
      keys.Tkey.isDown=false;
      break;
    case 65: // A
      keys.Akey.isDown=false;
      break;
    case 83: // S
      keys.Skey.isDown=false;
      break;
    case 68: // D
      keys.Dkey.isDown=false;
      break;
    case 70: // F
      keys.Fkey.isDown=false;
      break;
    case 71: // G
      keys.Gkey.isDown=false;
      break;
  }
}
// Variables
var gState;
var entityIDTable={};
var bgIDTable={};

class Background {
  constructor(id,img){
    this.id=id;
    this.img=img;
    if(!bgIDTable[this.id])bgIDTable[this.id]=this;
  }
}

class Entity {
  constructor(id,name,img,props){
    /*props.speed;
    props.health;
    props.damage;
    props.range;
    props.kbs;
    props.trait;
    props.effect; // Object that holds status effects, passives, etc.
    */
    this.id=id;
    this.name=name;
    this.img=img;
    this.props=props;
    if(!entityIDTable[this.id])entityIDTable[this.id]=this;
  }
}

class Unit extends Entity {
  constructor(id,name,image,props){
    super(id,name,image,props);
    
  }
}

class Enemy extends Entity {
  constructor(id,name,image,props){
    super(id,name,image,props);
    
  }
}

var bg001=new Background(0,"img/bg/bg001.jpg");

function preload () { //load in images 
  var imageList=[];
  //for(entity in entityIDTable)imageList.push(entityIDTable[entity].img);
  for(bg in bgIDTable)imageList.push(bgIDTable[bg].img);
  PIXI.Loader.shared.add([...imageList]).load(init);
}
preload(); // Proper loading function will come later

function init(){
  gState=play;
  bgImage=new PIXI.Sprite(
    PIXI.Loader.shared.resources["img/bg/bg001.jpg"].texture
  );
  bgImage.position.set((screenWidth/2)-(bgImage.width/2),(screenHeight/2)-(bgImage.height/2));
  game.stage.addChild(bgImage);
  game.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  gState(delta);
}

function play(delta){

}