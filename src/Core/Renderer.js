/**
* Renderer controlling processing and output of canvas display.
*/
class Renderer {
	/**
	 * Constructor for renderer.
	 * 
	 * @param {Element} $canvas canvas element
	 */
	function constructor ($canvas) {
		/**
		 * @var {Context} context 2D context for canvas
		 */
		this.context;
		
		this.setContext ($canvas);
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
	function update () {}
	/**
	* Draw the current adventure.
	*/
	function draw () {}
	/**
	* Control the adventure.
	*/
	function loop () {}
}
