/**
 * Input controller for gathering raw user input in an easily accessable way.
 */
class InputController {
	/**
	 * Constructor for input controller.
	 */
	constructor ($canvas) {
		// Set up the canvas element reference
		this.setCanvasReference ($canvas);
		
		/**
		 * @type {object} dictionary of key binds. At some point this should be
		 *                moved to some ini file and be customizable by the user.
		 */
		this.keyBinds = {
			"up"    : 87, // W
			"down"  : 83, // S
			"left"  : 65, // A
			"right" : 68, // D
			"space" : 32  // Space
		};
		
		/**
		 * @var {bool} up    up key pressed flag
		 * @var {bool} down  down key pressed flag
		 * @var {bool} left  left key pressed flag
		 * @var {bool} right right key pressed flag
		 * @var {bool} space space key pressed flag
		 */
		this.up    = false;
		this.down  = false;
		this.left  = false;
		this.right = false;
		this.space = false;
		
		/**
		 * @type {object} current mouse position in the form of a 2d vector with
		 *                properties x and y.
		 */
		this.currentMousePosition;
		
		/**
		 * @var {bool} mouseLeftDown  left mouse button held down flag
		 * @var {bool} mouseRightDown right mouse button held down flag
		 */
		this.mouseLeftDown  = false;
		this.mouseRightDown = false;
		
		this.$canvas = $canvas;
		
		// Bind JS event handlers
		this.bindEvents ();
	}
	
	/**
	 * Binds event handlers for key events.
	 */
	bindEvents () {
		window.addEventListener ("keydown", this.updateKeyDown.bind (this));
		window.addEventListener ("keyup", this.updateKeyUp.bind (this));
	}
	
	/**
	 * Gets the canvas element reference.
	 * 
	 * @return {Element} canvas element reference
	 */
	getCanvas () {
		return this.$canvas;
	}
	
	/**
	 * Resets all key states to off.
	 */
	resetKeys () {
		this.up    = false;
		this.down  = false;
		this.left  = false;
		this.right = false;
		this.space = false;
	}
	
	/**
	 * Sets the canvas element reference.
	 * 
	 * @param {Element} $canvas canvas element
	 */
	setCanvas ($canvas) {
		this.$canvas = $canvas;
	}
	
	/**
	 * Event handler for the keydown event. Uses keybinds to alter key states
	 * to active when a key is detected.
	 * 
	 * @param {Event} e keydown event
	 */
	updateKeyDown (e) {
		switch (e.which) {
			case (this.keyBinds["up"]):    this.up    = true; break;
			case (this.keyBinds["down"]):  this.down  = true; break;
			case (this.keyBinds["left"]):  this.left  = true; break;
			case (this.keyBinds["right"]): this.right = true; break;
			case (this.keyBinds["space"]): this.space = true; break;
		}
	}
	
	/**
	 * Event handler for the keyup event. Uses keybinds to alter key states to
	 * inactive when a key is detected.
	 * 
	 * @param {Event} e keyup event
	 */
	updateKeyUp (e) {
		switch (e.which) {
			case (this.keyBinds["up"]):    this.up    = false; break;
			case (this.keyBinds["down"]):  this.down  = false; break;
			case (this.keyBinds["left"]):  this.left  = false; break;
			case (this.keyBinds["right"]): this.right = false; break;
			case (this.keyBinds["space"]): this.space = false; break;
		}
	}
}
