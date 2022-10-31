//move 함수 정의 및 관련 초기값
let xpos, ypos;
let vx;
let ax;
let dt = 0.1;

function initial(_vx = 0, _ax = 80, _x = 200, _y = 400, _denomi_x = 8, _denomi_y = 2){
  xpos = _x/_denomi_x;
  ypos = _y/_denomi_y;
  ax = _ax;
  vx = _vx;  
}

function move(_rad) {
  vx += ax*dt;
  xpos += vx*dt;
  ellipse(xpos, ypos, _rad, _rad);
}