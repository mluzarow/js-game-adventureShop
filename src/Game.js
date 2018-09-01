/**
 * Game initializer.
 */
class Game {
	/**
	 * Game boot entry point. 
	 */
	initialize () {
		/**
		 * @type {Element} canvas element
		 */
		this.$canvas = document.getElementById ("game");
		
		/**
		 * @type {InputController} game user input controller
		 */
		this.input = new InputController (this.$canvas);
		
		// Probably start the a seperate renderer class which contains the render
		// loop frame locked to whatever. Split logic and render loops? Does that
		// make any sense?
		
		// Start the game loop
		requestAnimationFrame (this.gameLoop.bind (this));
	}
	
	/**
	 * Game loop.
	 */
	gameLoop () {
		if (this.input.up)    console.debug ("UP");
		if (this.input.down)  console.debug ("DOWN");
		if (this.input.left)  console.debug ("LEFT");
		if (this.input.right) console.debug ("RIGHT");
		
		// get input
		// process stuff
		// render stuff
		
		requestAnimationFrame (this.gameLoop.bind (this));
	}
}
