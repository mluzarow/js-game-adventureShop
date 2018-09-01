/**
 * Mouse input manager dealing with mouse events.
 */
class InputMouse {
	/**
	 * Constructor of mouse input manager.
	 * 
	 * @param {Element} $canvas canvas element
	 */
	constructor ($canvas) {
		/**
		 * @type {Element} canvas element reference
		 */
		this.$canvas;
		
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
		
		this.setCanvas ($canvas);
	}
	
	/**
	 * Binds event handlers for mouse events.
	 */
	bindEvents () {
		window.addEventListener (
			"mousemove",
			this.updatePosition.bind (this)
		);
		
		window.addEventListener (
			"mousedown",
			this.updateButtonDown.bind (this)
		);
		
		window.addEventListener (
			"mouseup",
			this.updateButtonUp.bind (this)
		);
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
	 * Gets mouse button on / off status.
	 * 
	 * @return {Object} dictionary containing the status of both the left and
	 *                  right mouse button
	 */
	getStatus () {
		return {
			left:  this.buttonLeft,
			right: this.buttonRight
		}
	}
	
	/**
	 * Gets the mouse position relative to the canvas, bound by the canvas.
	 * 
	 * @return {Object} dictionary of relative coordinates of mouse inside the
	 *                  bounds of the canvas
	 */
	getPosition () {
		let canvasRect = this.getCanvas ().getBoundingClientRect ();
		
		// Get relative position
		let relX = this.positionX - canvasRect.left;
		let relY = this.positionY - canvasRect.top;
		
		// Clamp so it cant be negative
		relX = relX < 0 ? 0 : relX;
		relY = relY < 0 ? 0 : relY;
		
		// Clamp so it cant be more` than the canvas bounds
		relX = relX > canvasRect.width ? canvasRect.width : relX;
		relY = relY > canvasRect.height ? canvasRect.height : relY;
		
		return {
			x : relX,
			y : relY
		};
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
	 * Event handler for the mouse button down event. Alters button states to
	 * active when button press is detected.
	 * 
	 * @param {Event} e mousedown event
	 */
	updateButtonDown (e) {
		switch (e.button) {
			case 0: this.buttonLeft  = true; break;
			case 2: this.buttonRight = true; break;
		}
	}
	
	/**
	 * Event handler for the mouse button up event. Alters button states to
	 * active when button press is detected.
	 * 
	 * @param {Event} e mouseup event
	 */
	updateButtonUp(e) {
		switch (e.button) {
			case 0: this.buttonLeft  = false; break;
			case 2: this.buttonRight = false; break;
		}
	}
	
	/**
	 * Evemt handler for the mouse move event. Updates raw mouse coordinates
	 * on page.
	 * 
	 * @param  {Event} e mousemove event
	 */
	updatePosition (e) {
		this.positionX = e.clientX;
		this.positionY = e.clientY;
	}
}