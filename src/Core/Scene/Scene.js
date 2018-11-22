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
		
		/**
		 * @type {Object} disctionary of game components for this scene
		 */
		this._components = {};
	}
	
	_addComponent (name, object) {
		this._components[name] = object;
	}
}
