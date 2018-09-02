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
		
		/**
		 * @var {Int} height height of canvas
		 * @var {Int} width  width of canvas
		 */
		this.height;
		this.width;
		
		this.setContext ($canvas);
		
		// Start the frame-locked loop
		setInterval (this.draw.bind (this), 1000 / maxFPS);
	}
	
	/**
	* Draw the current adventure.
	*/
	draw () {
		this.getContext ().fillStyle = 'green';
		this.getContext ().fillRect(
			0,
			0,
			this.getWidth (),
			this.getHeight ()
		);
	}
	
	/**
	 * Gets the canvas context.
	 * 
	 * @var {Context} context 2D context for canvas
	 */
	getContext () {
		return this.context;
	}
	
	/**
	 * Gets the canvas height.
	 * 
	 * @return {Int} canvas height
	 */
	getHeight () {
		return this.getContext ().canvas.height;
	}
	
	/**
	 * Gets the canvas width.
	 * 
	 * @return {Int} canvas width
	 */
	getWidth () {
		return this.getContext ().canvas.width;
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
