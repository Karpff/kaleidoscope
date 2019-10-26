var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

var arcs = [];
var cycle = 270;
var timeout = 100;

c.lineWidth = 6;
c.globalCompositeOperation = "exclusion";
c.globalAlpha = 1;

for(let i=0;i<18;i++)
{
  arcs.push(new Arc(i*(360/18),i*(360/18)*3));
}

function animate()
{
  if(timeout>=0)timeout--;
  else
  {
    cycle+=1.5;
    if(cycle%180==90)timeout=100;
  }
  c.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<arcs.length;i++)
  {
    arcs[i].update();
    arcs[i].draw();
  }
  window.requestAnimationFrame(animate);
}
animate();
