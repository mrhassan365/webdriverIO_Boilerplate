//var data = require('./data.json');

var path = require ("path")

module.exports = {
  	writeScore: function writeScore(Score){

	    var timeStamp = getTimeStamp()
	    
 		var obj = readFile()

        while(obj.table.length >= 30){
        	obj.table.shift();
        }

        obj.table.push({
        
            timestamp: timeStamp,
            score: Score

        });

  		writeFile(obj)
	},
  	writePassFail: function writePassFail(passFail){
  		var obj = readFile()

  		obj.table2.push({passFail: passFail});

  		writeFile(obj)
	},
	purgeScores: function purgeScores(purgePassFail, purgePerformance){

  		var obj = readFile()

		if(purgePassFail == true){
        	obj.table2.length = 0
        }
  	if(purgePerformance == true){
    	obj.table.length = 0
    }

  		writeFile(obj)	            
	}
};

function readFile(){
	var fs = require('fs');
    
    var data = fs.readFileSync(path.join(__dirname, '../dashboard/data.json'), 'utf8', function readFileCallback(err, data){});

    var obj = JSON.parse(data)

	return obj
}

function writeFile(obj){
    var fs = require('fs');

    var json = JSON.stringify(obj); //convert it back to json
    
    fs.writeFileSync(path.join(__dirname, '../dashboard/data.json'), json, 'utf8', function writeFileCallback(err, data){}); // write it back 	
}

function getTimeStamp(){
	var currentdate = new Date(); 
    var timeStamp =    currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();

    return timeStamp
}

function consoleLog(argument){
    console.log(argument)
}