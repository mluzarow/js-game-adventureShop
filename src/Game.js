/**
 * Game initializer.
 */
class Game {
	/**
	 * Game boot entry point. 
	 */
	initialize () {
		/**
		 * @type {Number} maximum frames per second to cap rendering at
		 */
		this.FSP_MAX = 60;
		
		/**
		 * @type {Element} canvas element
		 */
		this.$canvas = document.getElementById ("game");
		
		/**
		 * @type {InputController} game user input controller
		 */
		this.input = new InputController (this.$canvas);
		
		/**
		 * @type {Renderer} game renderer for output graphics through canvas
		 */
		this.renderer = new Renderer (
			this.$canvas,
			this.FSP_MAX,
			this.frameLockedLoop.bind (this)
		);
		
		/**
		 * @type {SceneManager} game scene manager managing game objects
		 */
		this.scenes = new SceneManager (
			this.renderer.getWidth (),
			this.renderer.getHeight ()
		);
		
		// Load the testing scene
		this.scenes.loadScene (new TestScene (
			this.renderer.getWidth (),
			this.renderer.getHeight ()
		));
		
		// Start the game loop
		requestAnimationFrame (this.gameLoop.bind (this));
	}
	
	/**
	 * Game loop locked to a predetermined max update frequency.
	 */
	frameLockedLoop () {
		this.scenes.getCurrentScene ().updateRenderables ();
		
		this.renderer.draw (
			this.scenes.getCurrentScene ().getRenderables ()
		);
	}
	
	/**
	 * Game loop.
	 */
	gameLoop () {
		// let kStat = this.input.getKeyboard ().getStatus ();
		// if (kStat.up)    console.debug ("UP");
		// if (kStat.down)  console.debug ("DOWN");
		// if (kStat.left)  console.debug ("LEFT");
		// if (kStat.right) console.debug ("RIGHT");
		// 
		// let mStat = this.input.getMouse ().getStatus ();
		// if (mStat.left) console.debug ("LEFT MOUSE");
		// if (mStat.right) console.debug ("RIGHT MOUSE");
		// 
		// let mPos = this.input.getMouse ().getPosition ();
		// console.debug ("Mouse Position x: %d y: %d", mPos.x, mPos.y);
		
		// Terrible FPS meter with janky properties
		// @TODO remove this later one
		
		
		// get input
		// process stuff
		// render stuff
		
		this.scenes.getCurrentScene ().updateLogic ();
		
		requestAnimationFrame (this.gameLoop.bind (this));
	}
}
