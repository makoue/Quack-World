const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 500;

export const keys = {
    left: false,
    right: false,
    jump: false,
};

window.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = true:
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = true;
    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') keys.jump = true;
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowLeft' || e.code === 'KeyA') keys.left = false;
    if (e.code === 'ArrowRight' || e.code === 'KeyD') keys.right = false;
    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') keys.jump = false;
});

export function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export { ctx, canvas };