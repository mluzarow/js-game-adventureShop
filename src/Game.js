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
		let kStat = this.input.getKeyboard ().getStatus ();
		if (kStat.up)    console.debug ("UP");
		if (kStat.down)  console.debug ("DOWN");
		if (kStat.left)  console.debug ("LEFT");
		if (kStat.right) console.debug ("RIGHT");
		
		let mStat = this.input.getMouse ().getStatus ();
		if (mStat.left) console.debug ("LEFT MOUSE");
		if (mStat.right) console.debug ("RIGHT MOUSE");
		
		let mPos = this.input.getMouse ().getPosition ();
		console.debug ("Mouse Position x: %d y: %d", mPos.x, mPos.y);
		
		// get input
		// process stuff
		// render stuff
		
		requestAnimationFrame (this.gameLoop.bind (this));
	}
}
