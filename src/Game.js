/**
 * Game initializer.
 */
class Game {
	/**
	 * Game boot entry point. 
	 */
	initialize () {
		console.log ("init");
		/**
		 * @type {Element} canvas element
		 */
		this.$canvas = document.getElementById ("game");
		
		/**
		 * @type {InputController} game user input controller
		 */
		this.input = new InputController ();
		
		// Probably start the a seperate renderer class which contains the render
		// loop frame locked to whatever. Split logic and render loops? Does that
		// make any sense?
		
		// Start the game loop
		requestAnimationFrame(this.gameLoop.bind(this));
	}
	
	/**
	 * Game loop.
	 */
	gameLoop () {
		this.input.update ();
		
		if (this.input.up === true) {
			console.log ("UP");
		}
		
		if (this.input.down === true) {
			console.log ("DOWN");
		}
		
		// get input
		// process stuff
		// render stuff
		
		requestAnimationFrame(this.gameLoop.bind(this));
	}
}
