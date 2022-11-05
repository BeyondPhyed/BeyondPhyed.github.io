//==========================================================================================
//graph_1.02

//graph values
let Zero = []; // coordinate origin

let gph = []; // x, y for graph 
let gph2 = []; // x, y for graph2 
let x_ratio, y_ratio; // x, y ratio for graph
let x2_ratio, y2_ratio ; // x2, y2 ratio for graph

let pgph = []; // previous x, y for graph line
let pgph2 = []; // previous x, y for graph line

let myTextsize;


function graph_setup(_graph_x, _graph_y) {
	// set origin value
	Zero[0] = myWidth*(_graph_x);
  Zero[1] = myHeight*(_graph_y);
	gph[0] = 0; gph[1] = 0;
	gph2[0] = 0; gph2[1] = 0;
  pgph[0] = 0; pgph[1] = - y_0;
	pgph2[0] = 0; pgph2[1] = - y_0;
	x_ratio = myWidth*0.25; y_ratio = myHeight*0.0002;
	
	// set relative text size
	myTextsize = myWidth*0.1*(1 - _graph_x);  //print('TextSize =' + myTextsize);
	if (myTextsize > 25) {
		myTextsize = 25;
	} else if (myTextsize < 15) {
		myTextsize = 15;
	}
	
	// x, y coordinates;
	strokeWeight(2);
	line(Zero[0], Zero[1]*1.5, Zero[0], myTextsize);  // y-coordiante
	line(Zero[0] - myTextsize, Zero[1], myWidth - myTextsize, Zero[1]);  // x-coordiante
		
	// axis texts
	textSize(myTextsize); //textStyle(BOLD);
	fill(0);
	text('t', myWidth - myTextsize*1.5, Zero[1] + myTextsize);
	text('r', Zero[0] - myTextsize, myTextsize*1.5);
	text('0', Zero[0] - myTextsize, Zero[1] + myTextsize);
		
	textSize(myTextsize*0.7);
	text('r0', Zero[0] - 1.5*myTextsize, y_ratio * pgph[1] + Zero[1]);
	line(Zero[0] - 0.5*myTextsize, y_ratio * pgph[1] + Zero[1], Zero[0] + 0.5* myTextsize, y_ratio * pgph[1] + Zero[1]);  // x-coordiante
}


function graph(_y1 = y, _y2 = y2) {
	// set coordinate origin
		
	gph[0] = t; // x-value, t
	gph[1] = - _y1; // Hubble's law y = r(t)
	gph2[0] = t; 
	gph2[1] = - _y2; // y2 = a * t^2
	
	
	// Hubble's law graph line
	strokeWeight(3); stroke(255, 0, 0); // setting for graph line
	line(x_ratio * pgph[0] + Zero[0], y_ratio * pgph[1] + Zero[1], x_ratio * gph[0] + Zero[0],  y_ratio * gph[1] + Zero[1]); 
	
	// y = x^2. to compare
	strokeWeight(3); stroke(0, 0, 0); // setting for graph line
	line(x_ratio * pgph2[0] + Zero[0],  y_ratio * pgph2[1] + Zero[1], x_ratio * gph2[0] + Zero[0],  y_ratio * gph2[1] + Zero[1]);
		
	strokeWeight(1); stroke(0); // restore stroke setting
	
	checkInversion();
	
	// save previous values
	pgph[0] = gph[0];
	pgph[1] = gph[1];
	pgph2[0] = gph2[0];
	pgph2[1] = gph2[1];
}

let checkTime = 0;
function checkInversion() {
	if (y >= y2 && checkTime == 0) {
		textSize(myTextsize*0.6);
		text('t=' + round(t,2), x_ratio * gph[0] + Zero[0] + myTextsize*0.2, Zero[1] + myTextsize);
		line(x_ratio * gph[0] + Zero[0], Zero[1]*1.5, x_ratio * gph[0] + Zero[0], myTextsize);  // mark on the graph
		
		line(myWidth*0.12, y, myWidth*0.33, y);  // mark on the background
		checkTime = 1;
	}
}


