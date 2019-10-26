class Arc
{
  constructor(startAngle,color)
  {
    this.x;
    this.y;
    this.startAngle = startAngle;
    this.endAngle = startAngle+120;
    this.direction = this.startAngle+60+180;
    this.color = "hsl("+color+",100%,50%)";
  }

  update()
  {
    this.x = Math.cos(this.direction/180*Math.PI)*(Math.sin(cycle/180*Math.PI)+1)*114.5;
    this.y = Math.sin(this.direction/180*Math.PI)*(Math.sin(cycle/180*Math.PI)+1)*114.5;
  }

  draw()
  {
    c.beginPath();
    c.arc(canvas.width/2+this.x,canvas.height/2+this.y,200,this.startAngle/180*Math.PI,this.endAngle/180*Math.PI);
    c.strokeStyle = this.color;
    c.stroke();
  }
}
