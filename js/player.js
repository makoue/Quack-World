import { ctx, canvas, Keys } from './engine.js';

export class Duck {
    constructor() {
        this.x = 100;
        this.y = 300;
        this.w = 32;
        this.h = 32;
        this.vx = 0;
        this.vy = 0;
        this.onGround = false;

        this.GRAVITY = 0.6;
        this.SPEED = 4;
        this.JUMP = 13;
    }


    update(platforms) {
        this.vx = 0;
        if (Keys.left) this.vx = -this.SPEED;
        if (Keys.right) this.vx = this.SPEED;

        if (Keys.jump && this.onGround) {
            this.vy = -this.JUMP;
            this.onGround = false;
        }

        this.vy += this.GRAVITY;

        this.x += this.vx;
        this.y += this.vy;

        this.onGround = false;
        for (let p of platforms) {
            if (this.collide(p)) {
                if (this.vy > 0) {
                    this.y = p.y - this.h;
                    this.vy = 0;
                    this.onGround = true;
            }
        }
    }
}

collide(p) {
    return !(
        this.x + this.w < p.x ||
        this.x > p.x + p.w ||
        this.y + this.h < p.y ||
        this.y > p.y + p.h
    );
}

draw() {
    ctx.fillStyle = '#ffd93b';
    ctx.fillRect(this.x, this.y, this.w, this.h);

    ctx.fillStyle = '#ff8c00';
    ctx.fillRect(this.x + this.w - 8, this.y + 10, 8, 6);

    ctx.fillStyle = '#black';
    ctx.fillRect(this.x + 6, this.y + 6, 4, 4);
    }
}  
