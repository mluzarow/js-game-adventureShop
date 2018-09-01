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
		 * @type {Object} canvas context
		 */
		this.context;
		
		this.setContext ($canvas);
	}
	
	/**
	 * Gets the canvas context.
	 * 
	 * @type {Object} canvas context
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
