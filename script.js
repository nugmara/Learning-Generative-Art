const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log(ctx)

const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient.addColorStop(0, "#363636");
gradient.addColorStop(0.5, "#e7133f");
gradient.addColorStop(1, "#ff83a5")
ctx.fillStyle = gradient;

let atoms = [];

canvas.addEventListener("click", (e) => {
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y))     
0    }
})

class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 8 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill()
    }
}

const animate = () => {
    // update

    // draw
    atoms.forEach((atom) => {
        atom.draw()
        atom.update()
    })
    requestAnimationFrame(animate)
}
animate()



