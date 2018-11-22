/**
 * Parent class from which all scenes inherit.
 */
class Scene {
	/**
	 * Constructor for scene TestScene.
	 * 
	 * @param {Int} canvasWidth  canvas width in pixels
	 * @param {Int} canvasHeight canvas height in pixels
	 */
	constructor (canvasWidth, canvasHeight) {
		this._width = canvasWidth;
		this._height = canvasHeight;
	}
}
