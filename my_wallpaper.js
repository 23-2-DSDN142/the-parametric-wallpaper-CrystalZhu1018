//your parameter variables go here!
//let rect_width  = 20;
//let rect_height = 20;
let onepatternmode = false;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 255, 255); //white colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
var x = 0;
var y = 200;
var n = 200;//left point height
var o = 200;//right point height
var z = 100;//middle points of first one
var a = 100;//middle points of second one 
var b = 100;//middle points of third one
var c = 100;//middle points of fourth one
var d = 100;//middle points of fifth one

var e = 0;
var f = 200;
var l = 0;//left point height
var m = 0;//right point height
var g = 100;//middle points of first one
var h = 100;//middle points of second one
var i = 100; //middle points of third one
var j = 100;//middle points of fourth one
var k = 100;//middle points of fifth one

if(onepatternmode){

background(0, 0, 0);
let BRIGHTPINK = color(255, 3, 154);
let MILDPINK = color(252, 41, 169);
let MEDIUMPINK = color(255, 87, 188);
let PINK = color(255, 125, 203);
let LIGHTPINK = color(255, 161, 217);

fill(BRIGHTPINK);//noFill
noStroke();
beginShape();
vertex(z, 0);//top point
vertex(x, n);//left point
vertex(z, 20);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(MILDPINK);
beginShape();
vertex(a, 40);//top point
vertex(x, n);//left point
vertex(a, 60);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(MEDIUMPINK);
beginShape();
vertex(b, 80);//top point
vertex(x, n);//left point
vertex(b, 100);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(PINK);
beginShape();
vertex(c, 120);//top point
vertex(x, n);//left point
vertex(c, 140);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(LIGHTPINK);
beginShape();
vertex(d, 160);//top point
vertex(x, n);//left point
vertex(d, 180);//middle point
vertex(y, o);//right point
endShape(CLOSE);

}else{
fill(51);//noFill
noStroke();
beginShape();
vertex(z, 0);//top point
vertex(x, n);//left point
vertex(z, 20);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill('red');
beginShape();
vertex(a, 40);//top point
vertex(x, n);//left point
vertex(a, 60);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(51); 
beginShape();
vertex(b, 80);//top point
vertex(x, n);//left point
vertex(b, 100);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill('red');
beginShape();
vertex(c, 120);//top point
vertex(x, n);//left point
vertex(c, 140);//middle point
vertex(y, o);//right point
endShape(CLOSE);

fill(51); 
beginShape();
vertex(d, 160);//top point
vertex(x, n);//left point
vertex(d, 180);//middle point
vertex(y, o);//right point
endShape(CLOSE);

  fill('red');
  noStroke();
  beginShape();
  vertex(e, l);//left point
  vertex(g, 180);//middle point
  vertex(f, m);//right point
  vertex(g, 200);//top point
  endShape(CLOSE);
  
  fill(51); 
  beginShape();
  vertex(e, l);//left point
  vertex(h, 140);//middle point
  vertex(f, m);//right point
  vertex(h, 160);//top point
  endShape(CLOSE);

  fill('red');
  beginShape();
  vertex(e, l);//left point
  vertex(i, 100);//middle point
  vertex(f, m);//right point
  vertex(i, 120);//top point
  endShape(CLOSE);
  
  fill(51); 
  beginShape();
  vertex(e, l);//left point
  vertex(j, 60);//middle point
  vertex(f, m);//right point
  vertex(j, 80);//top point
  endShape(CLOSE);
  
  fill('red');
  beginShape();
  vertex(e, l);//left point
  vertex(k, 20);//middle point
  vertex(f, m);//right point
  vertex(k, 40);//top point
  endShape(CLOSE);
}

}