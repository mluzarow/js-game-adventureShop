/**
 * Game component for a simple FPS meter.
 */
class FPSMeter {
	/**
	 * Constructor for game component FPSMeter.
	 * 
	 * @param {Object} position             tuple representing text render position
	 * @param {String} [color="#fff"]       color of the text
	 * @param {String} [fontfamily="Arial"] font family text will use
	 * @param {String} [fontsize="10px"]    font size of the text
	 */
	constructor (position, color = "#fff", fontfamily = "Arial", fontsize = "10px") {
		this._color = color;
		this._position = position;
		this._fontfamily = fontfamily;
		this._fontsize = fontsize;
		
		/**
		 * @var {Number} _fps           the current FPS
		 * @var {Number} _fpsDelta      time (ms) delta between frame measurement
		 * @var {Number} _lastIteration timestamp of the last FPS measurement
		 */
		this._fps = 0;
		this._fpsDelta = 0;
		this._lastIteration = Date.now ();
	}
	
	/**
	 * Updates the logic of the game component.
	 */
	updateLogic () {
		let currentIteration = Date.now ();
		let localDelta = currentIteration - this._lastIteration;
		
		this._fpsDelta += (localDelta - this._fpsDelta) / 20;
		this._lastIteration = currentIteration;
		this._fps = (1000 / this._fpsDelta).toFixed (0);
	}
	
	/**
	 * Updates the data bound to the renderable items.
	 * 
	 * @return {Array} list of renderable items
	 */
	updateRenderables () {
		return [
			new RenderableText (
				this._color,
				`${this._fontsize} ${this._fontfamily}`,
				this._position,
				`FPS: ${this._fps}`
			)
		];
	}
}