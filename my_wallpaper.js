//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


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
var z = 80;//middle points of first one
var a = 120;//middle points of second one
var b = 50;//middle points of third one
var c = 160;//middle points of fourth one
var d = 20;//middle points of fifth one

fill(51);//noFill
noStroke();
beginShape();
vertex(z, 0);//top point
vertex(x, y);//left point
vertex(z, 20);//middle point
vertex(y, y);//right point
endShape(CLOSE);

vertex(a, 40);//top point
vertex(x, y);//left point
vertex(a, 60);//middle point
vertex(y, y);//right point
endShape(CLOSE);

vertex(b, 80);//top point
vertex(x, y);//left point
vertex(b, 100);//middle point
vertex(y, y);//right point
endShape(CLOSE);

vertex(c, 120);//top point
vertex(x, y);//left point
vertex(c, 140);//middle point
vertex(y, y);//right point
endShape(CLOSE);

vertex(d, 160);//top point
vertex(x, y);//left point
vertex(d, 180);//middle point
vertex(y, y);//right point
endShape(CLOSE);
}