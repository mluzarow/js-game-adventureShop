class InputController {
	constructor () {
		console.log ('console');
		/**
		 * @type {object} dictionary of key binds. At some point this should be
		 *                moved to some ini file and be customizable by the user.
		 */
		this.keyBinds = {
			"up" : 87, // W
			"down" : 83, // S
			"left" : 65, // A
			"right" : 68, // D
			"space" : 32 // Space
		};
		
		/**
		 * @var {bool} up    up key pressed flag
		 * @var {bool} down  down key pressed flag
		 * @var {bool} left  left key pressed flag
		 * @var {bool} right right key pressed flag
		 * @var {bool} space space key pressed flag
		 */
		this.up = false;
		this.down = false;
		this.left = false;
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
		this.mouseLeftDown = false;
		this.mouseRightDown = false;
		
		this.bindEvents ();
	}
	
	bindEvents () {
		window.addEventListener ("keydown", this.update.bind (this));
	}
	
	resetKeys () {
		this.up    = false;
		this.down  = false;
		this.left  = false;
		this.right = false;
		this.space = false;
	}
	
	update (e) {
		// Reset key state
		this.resetKeys ();
		console.log (e);
		if (e === undefined) { return; }
		
		switch (e.which) {
			case (this.keyBinds["up"]):    this.up    = true; break;
			case (this.keyBinds["down"]):  this.down  = true; break;
			case (this.keyBinds["left"]):  this.left  = true; break;
			case (this.keyBinds["right"]): this.right = true; break;
			case (this.keyBinds["space"]): this.space = true; break;
		}
	}
}
