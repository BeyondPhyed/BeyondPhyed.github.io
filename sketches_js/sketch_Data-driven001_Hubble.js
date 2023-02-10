//필요한 변수들 설정 및 선언 
let rad;  //입자 반지름
let x, y, vx, vy, ax, ay, t, H;  //그 밖의 필요한 변수들
let x2, y2, vx2, vy2, ax2, ay2;
let x_0, y_0, vx_0, vy_0, x2_0, y2_0, vx2_0, vy2_0;  //initial values 
let dateTime = '22'; //2022
let timeInput = [];
let buttonLocate = [];

//초기 셋팅 부분
function setup() {
	initial_setup(60);  //input Hubble's constant.
	graph_setup(0.55, 0.5); //setting for graph origin. should be < 1 each.
	setupCSV();
}

//반복적 작동 부분
function draw() {
	t += 1/60;
	
	redShift();
    run_();
  
	graph();
	consoleData();
	saveData();
}



function run_() {
    vy = H*y; 
	y += vy;
	
	vy2 += ay2;
	y2 += vy2;
	
	strokeWeight(1);
	ellipse(x, y, rad, rad);
	fill(255,255,255);
	ellipse(x2, y2, rad, rad);
	fill(0);  
}
