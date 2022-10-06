//==========================================================================================
//variables

let myWidth, myHeight;
let writer;
// let timeInput = [];
// let dateTime = '22'; //2022

let color = [];
let color2 = [];
// let buttonLocate = [];


//initial_setup
function initial_setup(_H) { 
	frameRate(20);
	myWidth = windowWidth*0.5;
	myHeight = windowHeight*0.8;
	createCanvas(myWidth, myHeight);  //화면 크기
	
	background(100);  //배경 색(위치를 어디에 둘지 고민해 보기)
	ellipseMode(RADIUS);  //반지름을 기준으로 타원그리기
	
	// set relative particle radius
	rad = myWidth*0.014;  
	if (rad > 14) {
		rad = 14;
	} else if (rad < 7) {
		rad = 7;
	}
	
	t = 0;
	// particle1_initial info
	x_0 = myWidth*0.15; y_0 = myHeight*0.08;  // set x, y initial value
	x = x_0; y = y_0;  // input x, y initial value
	H = _H*0.001;  // Hubble's constant (for your own Universe)
	vy_0 = H * y;	 // set vy initial value
	vy = vy_0;  // input vy initial value
	ay = 0; //0.5;	 //y방향 초기 가속도
		
	// particle2_initial info
	x2_0 = myWidth*0.3; y2_0 = y_0;  // set x2, y2 initial value
	x2 = x2_0; y2 = y2_0;  // input x2, y2 initial value
 	ay2 = 0.5;	 //y방향 초기 가속도
	vy2_0 = vy_0;	 // set vy initial value
	vy2 = vy2_0;  // input vy initial value
		
	redShift();
	ellipse(x, y, rad, rad);
	fill(255,255,255);
	ellipse(x2, y2, rad, rad);
	
	console.log('t, vy, vy2'); 
	console.log(round(t, 2) + ',' + round(vy, 2) + ',' + round(vy2, 2));
		
	//create mousePressed_Button
	buttonLocate[0] = myWidth*0.85;
	buttonLocate[1] = myHeight*0.9;
	rect(buttonLocate[0], buttonLocate[1], 90, 30);
	fill(0);
	text('Data_', buttonLocate[0]+myWidth*0.02, buttonLocate[1]+myHeight*0.01, 70, 80);
}


function consoleData() {
	console.log(round(t, 2) + ',' + round(vy, 2) + ',' + round(vy2, 2));
}

function setupCSV() {
	// set current time
	timeInput[0] = month();
	timeInput[1] = day();
	timeInput[2] = hour();
	timeInput[3] = minute();
	timeInput[4] = second(); // not used
		
	for (let i = 0; i < 4; i++) {
    if (timeInput[i] < 10) {
      timeInput[i] = '0' + timeInput[i]; 
    } 
		if (i == 2) {
      dateTime += '_'
    }
		dateTime += timeInput[i]
  }
	
	writer = createWriter('Data_' + dateTime + '.csv');
	writer.print('t, vy, vy2');
	writer.print(round(t,2) + ',' + round(vy,2) + ',' + round(vy2,2));
}

function saveData() {
	writer.print(round(t,2) + ',' + round(vy,2) + ',' + round(vy2,2));
}


function redShift() {
	color[0] = 50 + 5*vy;
	color[2] = 50 - 5*vy;
	if (color[0] >= 255) {
		color[0] = 255;
	}
	if (color[2] >= 0) {
		color[2] = 0;
	}
	fill(color[0],0,color[2]);
}

/*
for (let i = 0; i < 4; i++) {
	if (time[i] < 10) {
		  time[i] = "0" + time[i]; 
		} else {
			time[i] = "" + time[i];
		}
	}
	*/


function mousePressed() { //buttonLocate[0], buttonLocate[1]
  if (mouseX > buttonLocate[0] && mouseX < myWidth*0.9 + 90 && 
			mouseY > buttonLocate[1] && mouseY < buttonLocate[1] + 30) {
    writer.print(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,' + dateTime);
		writer.close();
    writer.clear();
		

  }
}


// stop when pressed any keyboard
function keyPressed() {	
	if (keyCode === DOWN_ARROW) {
		writer.print(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,' + dateTime);
    writer.close();
    writer.clear();
  } else if (keyCode === 32) { // Stop, when a spacebar is pressed.
    noLoop();
  }	
}

