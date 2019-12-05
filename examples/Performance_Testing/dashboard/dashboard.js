window.onload=onLoad;

function onLoad() {

	parseJson("table");
	parseJson("table2");

}

function drawGraph(name1, scoreArray, nameArray, passes, fails){

	var ctx = document.getElementById('myChart').getContext('2d');
	var chart = new Chart(ctx, {
	    type: 'line',
	    data: {
	        labels: nameArray,
	        datasets: [{
	            label: name1,
	            borderColor: 'rgb(1, 1, 1)',
	            lineTension: 0,
	            fill: false,
	            data: scoreArray
	        }]
	    },
	    options: {
	    	    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 50
            }
        }]
    }
	    }
	});

}

function drawPie(passes, fails){

	var ctx = document.getElementById('myChart2').getContext('2d');
	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
    	data: {
    		labels: ["Pass", "Fail"], 
    		datasets: [{
    			backgroundColor: ["#27b500", "#c90202"], 
    			data: [passes, fails]
        	}]
    	},
	    options: {}
	});

}

function parseJson(table){
	
	var array = getJson(table)

	var passes = 0

	var fails = 0

	var name1 = "google.com"

	var scoreArray = []

	var nameArray = []

	for (var i = array.length - 1; i >= 0; i--) {

		if(array[i].passFail == "passed"){
			passes++
		}
		if(array[i].passFail == "failed"){
			fails++
		}
		if(array[i].score){
			scoreArray[i] = array[i].score*100
			nameArray[i] = array[i].timestamp
		}
	}

	if(table == "table"){
		drawGraph(name1, scoreArray, nameArray, passes, fails)
	}
	if(table == "table2"){
		drawPie(passes, fails)
	}
}

function getJson(table) {
	var json = (function() {
	        var json = null;
	        $.ajax({
	            'async': false,
	            'global': false,
	            'url': "./data.json",
	            'dataType': "json",
	            'success': function (data) {
	                json = data;
	            }
	        });
	        return json;
	    })();

	return json[table]
}

function readJson(){
    var obj = {
       table: []
    };

    obj.table.push({id: 1, square:2});

    var json = JSON.stringify(obj);

    var fs = require('fs');
    fs.writeFileSync('./dashboard/data.json', json, 'utf8');
}