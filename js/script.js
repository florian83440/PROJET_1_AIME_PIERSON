var canvas, ctx, w, h;


window.onload = function init() {
    canvas = document.querySelector("#gameCanvas");

    w = canvas.width;
    h = canvas.height;

    ctx = canvas.getContext('2d');

    window.addEventListener('keypress', (event) => {
        //113 => Q, 100 => D
        drawSpaceship(10, 10)

    let ctx = document.querySelector('#gameCanvas').getContext('2d');

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);

  });

};

function drawSpaceship(x, y) {
    
    ctx.save();

    ctx.strokeRect(375, 700, 50, 70);
    ctx.translate(x, y);

    context.restore();
}
