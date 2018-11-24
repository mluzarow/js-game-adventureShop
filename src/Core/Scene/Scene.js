/**
 * Parent class from which all scenes inherit.
 */
class Scene {
	/**
	 * Constructor for scene TestScene.
	 * 
	 * @param {Int}          canvasWidth  canvas width in pixels
	 * @param {Int}          canvasHeight canvas height in pixels
	 * @param {InputManager} input        instance of the input manager
	 */
	constructor (canvasWidth, canvasHeight, input) {
		this._width = canvasWidth;
		this._height = canvasHeight;
		this._input = input;
		
		/**
		 * @type {Object} disctionary of game components for this scene
		 */
		this._components = {};
	}
	
	/**
	 * Adds a component to list of scene game components.
	 * 
	 * @param {String} name   name of component
	 * @param {Object} object component class
	 */
	_addComponent (name, object) {
		this._components[name] = object;
	}
}
