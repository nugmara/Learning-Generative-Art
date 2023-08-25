const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath()
ctx.rect(50, 50, 100, 100)
ctx.stroke()
