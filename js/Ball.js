function Ball(){
    this.x = width/2;
    this.y = height/2;
    this.width = 20;
    this.height = 20;
    this.speedX = 1;
    this.speedY = 3;
    this.gameOver = false;
    this.maxSpeedXP = 6;
    this.maxSpeedXM = -6;
    this.color = "#00ff00";

    this.render = function(){
        ellipseMode(CENTER);
        fill(this.color)
        ellipse(this.x, this.y, this.width, this.height);
    }

    this.update = function(pong){
        this.y += this.speedY;
        this.x += this.speedX;
        if(pong.pos == "top"){
            if((this.y - (this.height / 2)) < pong.y + (pong.height / 2)){
            	if(this.x <= (pong.x + pong.width / 2) + 3 && this.x >= (pong.x - pong.width / 2 - 3)){
                	this.speedY =  +5;
                	//this.speedX += pong.AIspeed / 3;
                }
            }
        }
        if(pong.pos == "bottom"){
            if((this.y + (this.height / 2)) > pong.y - (pong.height / 2)){ 
				if(this.x <= (pong.x + pong.width / 2 + 3) && this.x >= (pong.x - pong.width / 2 - 3)){
                	this.speedY = -5;
                	//this.speedX += pong.AIspeed / 3;
            	}
            }
        }
        if(this.x + (this.width / 2) > width){
            this.speedX = -(this.speedX) - random(-.8, 1);
            if(this.speedX < this.maxSpeedXM){
                this.speedX = random(-3, -2);
            }
        }
        if(this.x - (this.width / 2) < 0){
            this.speedX = -(this.speedX) + random(-.8, 1);
            if(this.speedX > this.maxSpeedXP){
                this.speedX = random(2, 3);
            }
        }
        if(this.y < 0 || this.y > height){
        	this.x = width/2;
    		this.y = height/2;
    		this.width = 20;
    		this.height = 20;
    		this.speedX = 1;
    		this.speedY = 3;
        	this.gameOver = true;
        }
    }
}
