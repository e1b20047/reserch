class Level{
	
	constructor(){
		this.id=null;
		this.level=document.getElementById("level");
		this.levelNumber=this.setLevel();
		this.level.innerHTML="Level:"+this.levelNumber;
		console.log("level:ok")
	}

    levelUp(){
        this.levelNumber++;

        this.level.innerHTML=this.levelNumber;
    }

	newLevel(number){
		this.levelNumber=number
		this.level.innerHTML=this.levelNumber
	}
    setLevel(){

            return 1;
	}
	getLevel(){
		return this.levelNumber;
	}
}
