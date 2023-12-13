setBlockSize()
let stage=new Stage("canvas");
let clock=30;
this.time=new Timer(clock);
draw(stage);
let fps=config.FPS;
console.log(fps);
let frame=0;

let flag=true;

let listener=addEventListener("keydown",(e)=>{
	//console.log(e.keyCode);
	switch(e.keyCode){
		case 16://shift
		case 90://Z
		case 87://↑
			stage.enterReverseRotateKey();
		break;
		case 65://←
		case 37://十字キー
		case 100://テンキー
			stage.enterLeftKey();
		break;
		
		case 38://十字キー
		case 104://テンキー
		case 88://X
		case 69://E
			stage.enterRotateKey();
		break;
		case 68://→
		case 39://十字キー
		
		case 102://テンキー
			stage.enterRightKey();
		break;
		case 83://S
		case 40://十字キー
		case 98://テンキー
			stage.enterDownKey();
		break;
	}
	
});
let listener2=addEventListener("keyup",(e)=>{
	//console.log(e.keyCode);
	switch(e.keyCode){

		case 83://↓ S
		case 40://十字キー
		case 98://テンキー
			stage.dontEnterDownKey();
		case 68://→
		case 39://十字キー
		case 102://テンキー
			stage.dontEnterRightKey();
		break;
		case 65://←
		case 37://十字キー
		case 100://テンキー
			stage.dontEnterLeftKey();
	}
	
});
let continuer=setTimeout(loop2,1000/clock);


function loop2(){
	if(stage.move1Frame()){

		let continuer=setTimeout(loop2,1000/clock);
		time.timeCount();
		if(time.timeUp()){
			time.showTimeUp();
			clearTimeout(continuer);	
		};
		
	}else{
		clearTimeout(continuer);
	}

}
