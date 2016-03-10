"use strict";

let graph = [
[4,5],
[2,8],
[10,2],
[1,3],
[8,4],
[0,6],
[3,10]
];

let minGraphDistance = function(graph) {
	let min = Number.POSITIVE_INFINITY,
	    points = "",
	    dist,
	    memo = {};

  for (let i = 0; i < graph.length; i++) {
  	for (let j = 0; j < graph.length; j++) {
      if (i === j) continue;

      let track = i + "" + j,
          trackRev = j + "" + i;
      if (memo[track] || memo[trackRev]) continue;

  		dist = Math.sqrt(Math.pow(graph[i][0] - graph[j][0],2) + 
  			Math.pow(graph[i][1] - graph[j][1],2));
      if (dist < min) min = dist, 
        points = "[" + graph[i] + "], [" + graph[j] + "]";

      memo[track] = true;
      memo[trackRev] = true;
  	}
  }
  
  return "points: " + points + " distance: " + min;
};

minGraphDistance(graph);