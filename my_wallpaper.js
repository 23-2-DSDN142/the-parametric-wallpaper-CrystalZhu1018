//parameter variables
let onepatternmode = false;
//normal one
var n = 100;//left point height
var o = 100;//right point height
var z = 60;//first middle points x
let p1 = 0;//first middle points y
let p2 = p1+20;//first middle points y
var a = 10;//second middle points x
let q1 = p1+10;//second middle points y
let q2 = p1+60;//second middle points y
var b = 10;//third middle points x
let r1 = p1+20;//third middle points y
let r2 = p1+90;//third middle points y
var c = 10;//fourth middle points x
let s1 = p1+50;//fourth middle points y
let s2 = p1+160;//fourth middle points y
var d = 10;//fifth middle points x
let t1 = p1+190;//fifth middle points y
let t2 = p1+200;//fifth middle points y
//inverted one
var l = 200;//left point height
var m = 150;//right point height
var g = 100;//first middle points x
let u1 = 180;//first middle points y
let u2 = 200;//first middle points y
var h = 100;//second middle points x
let v1 = 140;//second middle points y
let v2 = 160;//second middle points y
var i = 100; //third middle points x
let w1 = 100;//third middle points y
let w2 = 120;//third middle points y
var j = 100;//fourth middle points x
let x1 = 60;//fourth middle points y
let x2 = 80;//fourth middle points y
var k = 100;//fifth middle points x
let y1 = 20;//fifth middle points y
let y2 = 40;//fifth middle points y
//variables that do not change
var x = 0;
var y = 200;
var e = 0;
var f = 200;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); 

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
function wallpaper_background() {
  background(0,0,0); //black colour
  background(255, 255, 255); //white colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

if(onepatternmode) {
let BRIGHTPINK = color(255, 3, 154);
let MILDPINK = color(252, 41, 169);
let MEDIUMPINK = color(255, 87, 188);
let PINK = color(255, 125, 203);
let LIGHTPINK = color(255, 161, 217);
 
fill(BRIGHTPINK);//noFill
noStroke();
beginShape();
vertex(z, p1);//top point
vertex(x, n);//left point
vertex(z, p2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(MILDPINK);
beginShape();
vertex(a, q1);//top point
vertex(x, n);//left point
vertex(a, q2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(MEDIUMPINK);
beginShape();
vertex(b, r1);//top point
vertex(x, n);//left point
vertex(b, r2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(PINK);
beginShape();
vertex(c, s1);//top point
vertex(x, n);//left point
vertex(c, s2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(LIGHTPINK);
beginShape();
vertex(d, t1);//top point
vertex(x, n);//left point
vertex(d, t2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

}else{
fill(0, 0, 0);//noFill
noStroke();
beginShape();
vertex(z, p1);//top point
vertex(x, n);//left point
vertex(z, p2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(255, 0, 0, 180);
beginShape();
vertex(a, q1);//top point
vertex(x, n);//left point
vertex(a, q2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(0, 0, 0); 
beginShape();
vertex(b, r1);//top point
vertex(x, n);//left point
vertex(b, r2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(255, 0, 0, 140);
beginShape();
vertex(c, s1);//top point
vertex(x, n);//left point
vertex(c, s2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(0, 0, 0); 
beginShape();
vertex(d, t1);//top point
vertex(x, n);//left point
vertex(d, t2);//middle point
vertex(y, o);//right point
endShape(CLOSE);

  fill(255, 0, 0, 120);
  noStroke();
  beginShape();
  vertex(e, l);//left point
  vertex(g, u1);//middle point
  vertex(f, m);//right point
  vertex(g, u2);//top point
  endShape(CLOSE);
  
  fill(0, 0, 0); 
  beginShape();
  vertex(e, l);//left point
  vertex(h, v1);//middle point
  vertex(f, m);//right point
  vertex(h, v2);//top point
  endShape(CLOSE);

  fill(255, 0, 0, 140);
  beginShape();
  vertex(e, l);//left point
  vertex(i, w1);//middle point
  vertex(f, m);//right point
  vertex(i, w2);//top point
  endShape(CLOSE);
  
  fill(0, 0, 0); 
  beginShape();
  vertex(e, l);//left point
  vertex(j, x1);//middle point
  vertex(f, m);//right point
  vertex(j, x2);//top point
  endShape(CLOSE);
  
  fill(255, 0, 0, 160);
  beginShape();
  vertex(e, l);//left point
  vertex(k, y1);//middle point
  vertex(f, m);//right point
  vertex(k, y2);//top point
  endShape(CLOSE);
}

}
//}