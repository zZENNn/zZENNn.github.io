    var flag = false
    // JavaScript код будем писать здесь
    var canvases = document.getElementsByClassName("canv");
    var ballsForm = document.getElementById('numBalls')
    var button = document.getElementById('ok')
    var form = document.getElementById('form')
    numCanvases = Array.from(canvases).length
    
    var balls = []
    var ballRadius = 10; //radius мяча
    var canvasWidth = 320;
    var canvasHeight = 320
    class Ball{
        constructor(x,y,dx,dy,color){
            this.x = x
            this.y = y
            this.dx = dx
            this.dy = dy
            this.color = color
        }

    }
    form.onsubmit = function(evt){
        Array.from(canvases).forEach(canvas => {
            let ctx = canvas.getContext("2d")
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            balls = []
        })

        evt.preventDefault()
        let numBalls = ballsForm.value;   
        for(let i = 0; i<numBalls;i++){
           let x = Math.random() * ((canvasWidth-ballRadius) - ballRadius) + ballRadius
            let y = Math.random() * ((canvasHeight-ballRadius) - ballRadius) + ballRadius
            let dArray = [-2,0,2]
            // let rand = ~~(Math.random()*dArray.length);
            let colorArray =["green", "red","blue","yellow","black","pink","purple","teal","orange"]
            // let dx = dArray[~~(Math.random()*dArray.length)];
            // let dy = dArray[~~(Math.random()*dArray.length)];
            let dx = Math.random() * ((2) - (-2)) + (-2)
            let dy = Math.random() * ((2) - (-2)) + (-2)
            let color = colorArray[~~(Math.random()*colorArray.length)]
            let ball = new Ball(x,y,dx/canvases.length,dy/canvases.length,color)
            balls.push(ball)
        }
    Array.from(canvases).forEach(canvas => {
        var ctx = canvas.getContext("2d")
        function drawBall(ball){
                
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = ball.color;
            ctx.fill();
            ctx.closePath();
                
            
            }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); //обновление канваса
            for(let i = 0; i <balls.length;i++){
                if(balls[i].y + balls[i].dy < ballRadius) {//нижняя граница
                    balls[i].y = balls[i].y + canvas.height
                } 
                else if(balls[i].y + balls[i].dy > canvas.height-ballRadius) {//верхняя граница
                    balls[i].y = balls[i].y - canvas.height
                }
                if(balls[i].x + balls[i].dx > canvas.width-ballRadius ) {//правая граница
                    balls[i].x = balls[i].x - canvas.width
                } 
                if(balls[i].x + balls[i].dx < 0+ballRadius ) { //левая граница   
                    balls[i].x = balls[i].x + canvas.width                 //
                }                                                //
                drawBall(balls[i]);                       //функция отрисовки мяча
                            //функция отрисовки ракетки
                balls[i].x += balls[i].dx; //перемещение мяча по x 
                balls[i].y += balls[i].dy; //перемещение мяча по y   
            }
            
        }
        
        setInterval(draw,10)
    });
    
    
    }
    
        
    