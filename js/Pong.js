function Pong(pos, color){
    this.width = 100;
    this.height = 15;
    this.x = width / 2;
    this.y = 0 + this.height / 2;
    this.pos = pos;
    this.color = color;
    this.AIspeed = 10;

    if(this.pos == "bottom"){
        this.y = height - this.height / 2 - 1;
    }

    this.render = function(){
        rectMode(CENTER);
        fill(this.color);
        rect(this.x, this.y, this.width, this.height)
    }

    this.update = function(){
    
    }

    this.interact = function(b){
    	if(this.x - this.width / 2 < 1) this.x = (this.width / 2) + 2;
        if(this.x + this.width / 2 > width - 1) this.x = width - (this.width / 2) - 2;
        
        if(this.pos == "top" && b.y < height / 2 - 20 && b.speedY < 0){
        	if(this.x < b.x && this.x != b.x){
            	this.x += this.AIspeed;
            }
            if(this.x > b.x && this.x != b.x){
                this.x -= this.AIspeed;
            }
        }
        if(this.pos == "bottom" && b.y > height / 2 + 20 && b.speedY > 0){
            if(this.x < b.x && this.x != b.x){
            	this.x += this.AIspeed;
            }
            if(this.x > b.x && this.x != b.x){
                this.x -= this.AIspeed;
            }
        }
    }
    
    this.playerInteract = function(){
    	this.x = mouseX;
    }
}
