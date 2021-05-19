let params;
function defineParams(){
	params = new function() {

		this.server;

		//window size (will be reset if resized)
		this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		this.windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		//timing to show instructions and random WWT entries
		this.instructionsTimeoutHandle = null;
		this.instructionsTimeout = 5*60*1000; //five minutes in units of ms

		this.moving = false;
		this.movingInterval = null;
		this.movingDuration = 0.5*1000;//.5 seconds in units of ms
	};
}
defineParams();