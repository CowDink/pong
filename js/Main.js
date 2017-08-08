
let pong_alpha;
let pong_beta;
let ball;

function setup(){
    createCanvas(windowWidth, windowHeight);
    pong_alpha = new Pong("top", "#ff0000");
    pong_beta = new Pong("bottom", "#0000ff");
    ball = new Ball();
    alert("setup complete!");
}

function draw(){
    background("#476675");
    pong_alpha.render();
    pong_beta.render();
    ball.update(pong_alpha);
    ball.update(pong_beta);
    ball.render();
    // Auto interaction
    pong_alpha.interact(ball);
    pong_beta.interact(ball);
}