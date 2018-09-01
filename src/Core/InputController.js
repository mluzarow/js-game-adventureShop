/**
 * Input controller for gathering raw user input in an easily accessable way.
 */
class InputController {
	/**
	 * Constructor for input controller.
	 */
	constructor ($canvas) {
		/**
		 * @var {InputKeyboard} keyboard keyboard input manager
		 * @var {InputMosue}    mouse    mouse input manager
		 */
		this.keyboard = new InputKeyboard ();
		this.mouse = new InputMouse ($canvas);
		
		// Bind JS event handlers
		this.bindEvents ();
	}
	
	/**
	 * Binds event handlers for key events.
	 */
	bindEvents () {
		this.keyboard.bindEvents ();
		this.mouse.bindEvents ();
	}
	
	/**
	 * Gets the keyboard object.
	 * 
	 * @return {InputKeyboard} keyboard object
	 */
	getKeyboard () {
		return this.keyboard;
	}
	
	/**
	 * Gets the mouse object.
	 * 
	 * @return {InputMouse} mouse object
	 */
	getMouse () {
		return this.mouse;
	}
}
