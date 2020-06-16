let xv,
    yv,
    px,
    py,
    gs,
    tc,
    ax,
    ay,
    canv,
    ctx,
    trail = [],
    tail,
    score = 5

window.onload = () => {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keys);
    setInterval(game, 100 / 1)
}
px = py = 10;
gs = tc = 20;
ax = ay = 15
xv = yv = 0;

function game() {
    px += xv;
    py += yv;
    // this is for snake that can't go outside from x and y
    if (px < 0) {
        px = tc - 1
    }
    if (px > tc - 1) {
        px = 0
    }
    if (py < 0) {
        py = tc - 1
    }
    if (py > tc - 1) {
        py = 0
    }

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height)

    ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
    for (var i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
        if (trail[i].x == px && trail[i].y == py) {
            tail = 1;
        }
    }

    trail.push({
        x: px,
        y: py
    });
    while (trail.length > tail) {
        trail.shift();
    }
    if (ax == px && ay == py) {
        tail++;
        score = tail * 5
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }

    document.getElementById("score").innerHTML = score - 5;


    ctx.fillStyle = "red";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2)
}

function keys(event) {
    switch (event.keyCode) {
        case 37:
            xv = -1;
            yv = 0;
            break;
        case 38:
            xv = 0;
            yv = -1;
            break;
        case 39:
            xv = 1;
            yv = 0;
            break;
        case 40:
            xv = 0;
            yv = 1;
            break;

    }
}