function attachButtons(){
	//do I need to do this for touch also?

	d3.selectAll('.pan').on('click',function(){
		var dir = d3.select(this).attr('id').replace('pan','');
		moveWWT(dir);
	});
	d3.selectAll('.pan').on('mousedown',function(){
		d3.select(this).classed('buttonDivActive',true);
		var dir = d3.select(this).attr('id').replace('pan','')

		//will this be choppy?
		params.movingInterval = setInterval(function(){
			moveWWT(dir)
		}, params.movingDuration)

	});

	d3.selectAll('.img').on('click',function(){
		var dir = d3.select(this).attr('id').replace('Image','')
		console.log('changing image', dir);
		//need to change the image somehow
	});
	d3.selectAll('.img').on('mousedown',function(){
		d3.select(this).classed('buttonDivActive',true);
	});

	window.onmouseup = function(){
		if (params.movingInterval) clearInterval(params.movingInterval);
		d3.selectAll('.buttonDiv').classed('buttonDivActive',false);
	};


}


function moveWWT(dir){
	var cmd = params.server + '/layerAPI.aspx?cmd=move&move=' + dir
	console.log(cmd);

	var http = new XMLHttpRequest();
	http.open("GET", cmd);//.replace("http:", "https:"));
	http.send();
	http.onreadystatechange = function(){ //this does not fire because the command is blocked...
		console.log('WWT state = ', this.readyState, this.status)
		if (this.readyState == 4){// && this.status == 200){ //I don't think this reaches "success" ==200
			console.log('finished moving WWT')
		}
	}
}