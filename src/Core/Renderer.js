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
	constructor ($canvas, maxFPS, loopRef) {
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
		
		/**
		 * @type {Array} queue of renderables to be rendered next frame
		 */
		this.queue = [];
		
		this.setContext ($canvas);
		
		// Start the frame-locked loop
		setInterval (loopRef, 1000 / maxFPS);
	}
	
	/**
	 * Appends a new renderable to the end of the queue for next frame.
	 * 
	 *  @param {Renderable} item a renderable item
	 */
	appendQueue (item) {
		this.queue.push (item);
	}
	
	/**
	 * Clears the current frames renderable queue.
	 */
	clearQueue () {
		this.queue = [];
	}
	
	/**
	* Draw the current adventure.
	*/
	draw () {
		let queue = this.getQueue ();
		
		for (let i = 0; i < queue.length; i++) {
			this.drawItem (queue[i]);
		}
		
		this.clearQueue ();
	}
	
	/**
	 * Decides what type of renderable to item is and calls the correct method.
	 * 
	 * @param {Renderable} item a renderable item
	 */
	drawItem (item) {
		switch (item.getType ()) {
			case "texture": this.drawItemTexture (item); break;
			case "text" : this.drawItemText (item); break;
			case "color" : this.drawItemColor (item); break;
		}
	}
	
	drawItemColor (item) {
		this.getContext ().fillStyle = item.getColor ();
		
		this.getContext ().fillRect (
			item.getOrigin ().x,
			item.getOrigin ().y,
			item.getEnd ().x,
			item.getEnd ().y
		);
	}
	
	drawItemText (item) {
		this.getContext ().fillStyle = item.getColor ();
		this.getContext ().font = item.getFont ();
		this.getContext ().fillText (
			item.getText (),
			item.getOrigin ().x,
			item.getOrigin ().y
		);
	}
	
	drawItemTexture (item) {
		this.getContext ().drawImage (
			item.getImage (),
			item.getOrigin ().x,
			item.getOrigin ().y,
			item.getEnd ().x,
			item.getEnd ().y
		)
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
	 * Gets the frame's render queue.
	 * 
	 * @return {Array} renderable queue
	 */
	getQueue () {
		return this.queue;
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
