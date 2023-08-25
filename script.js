const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


canvas.addEventListener("mousemove", (e) => {
    ctx.beginPath()
    ctx.rect(e.x, e.y, 10, 10)
    ctx.stroke()
    console.log(e)
})
