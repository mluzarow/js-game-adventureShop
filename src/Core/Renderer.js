/**
* Renderer controlling processing and output of canvas display.
*/
class Renderer {
	/**
	 * Constructor for renderer.
	 * 
	 * @param {Element} $canvas canvas element
	 * @param {Int}     maxFPS  FPS cap for rendering. This also controls
	 *                          frequency at which the rendering method is
	 *                          called.
	 */
	constructor ($canvas, maxFPS) {
		/**
		 * @var {Context} context 2D context for canvas
		 */
		this.context;
		
		this.setContext ($canvas);
		
		// Start the frame-locked loop
		setInterval (this.draw.bind (this), 1000 / maxFPS);
	}
	
	/**
	* Draw the current adventure.
	*/
	draw () {}
	
	/**
	 * Gets the canvas context.
	 * 
	 * @var {Context} context 2D context for canvas
	 */
	getContext () {
		return this.context;
	}
	
	/**
	 * Sets the canvas context using the element reference.
	 * 
	 * @param {Element} $canvas canvas element
	 */
	setContext ($canvas) {
		this.context = $canvas.getContext ("2d");
	}
	
	/**
	* Update the adventure.
	*/
	update () {}
	/**
	* Control the adventure.
	*/
	loop () {}
}
