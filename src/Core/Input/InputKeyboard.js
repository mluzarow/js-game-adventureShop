/**
 * Keyboard input manager dealing with keyboard events and binds.
 */
class InputKeyboard {
	/**
	 * Constructor for keyboard manager.
	 */
	constructor () {
		/**
		 * @type {object} dictionary of key binds. At some point this should be
		 *                moved to some cookie and be customizable by the user.
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
	}
	
	/**
	 * Binds event handlers for key events.
	 */
	bindEvents () {
		window.addEventListener (
			"keydown",
			this.updateKeyDown.bind (this)
		);
		
		window.addEventListener (
			"keyup",
			this.updateKeyUp.bind (this)
		);
	}
	
	/**
	 * Gets the keyboard buttons status.
	 * 
	 * @return {Object} dictionary of keyboard button statuses.
	 */
	getStatus () {
		return {
			up: this.up,
			down: this.down,
			left: this.left,
			right: this.right,
			space: this.space
		}
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
