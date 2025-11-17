import { canvasm ctx, clear } from './engine.js';
import { Duck } from './player.js';

const duck = new Duck();

const platforms = [
    { x: 0, y: 450, w: 900, h: 50 },
    { x: 200, y: 370, w: 150, h: 20 },
    { x: 400, y: 300, w: 150, h: 20 },
    { x: 650, y: 350, w: 140, h: 20 },
];

function drawPlatforms() {
    ctx.fillStyle = '#654321';
    for (let p of platforms) ctx.fillRect(p.x, p.y, p.w, p.h);
    }

function drawHUD() {
    ctx.fillStyle = 'white';
    ctx.font = '18px sans-serif';
    ctx.fillText('Quack World - Setas para mover, espaço para pular', 20, 30);
}

function loop() {
    clear();
 
    duck.update(platforms);
    duck.draw();

    drawPlatforms();
    drawHUD();
    
    requestAnimationFrame(loop);
}

loop();
