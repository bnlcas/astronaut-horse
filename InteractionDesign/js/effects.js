var scrollDist = 0.0;
const period = 200;

let hue = 275 + 50 * (0.5 + 0.5*Math.sin(scrollDist/period));
let color = "hsl(" + hue.toString() + ",9%,8%)";
document.body.style.background = color;

function Render() {
    scrollDist = window.pageYOffset;

    let hue = 275 + 50 * (0.5 + 0.5*Math.sin(scrollDist/period));
    let color = "hsl(" + hue.toString() + ",9%,8%)";
    document.body.style.background = color;
    window.requestAnimationFrame(Render);
}

window.onload = Render;