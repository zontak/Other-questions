(function () {
    var ctx = document.getElementById("mainCanvas").getContext("2d");
    var x=6;
    var y=150;
    var dx=1;
    var dy=1;
    var radius=6;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.stroke();
  
    function drawFrame() {
        // Clear the canvas.
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.beginPath();
        x += dx
        y += dy;

        // If the ball has hit the side, bounce it.
        if ((x + radius > ctx.canvas.width) || (x - radius < 0)) {
            dx = -dx;
        }

        // If the ball has hit the bottom, bounce it.
        if ((y + radius > ctx.canvas.height) || (y - radius < 0)) {
            dy = -dy;
        }

        // Draw 
        ctx.fillStyle = "blue";
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.stroke();

        // Draw the next frame in 5 milliseconds.
        setTimeout(drawFrame, 5);
    }
    drawFrame();
})();