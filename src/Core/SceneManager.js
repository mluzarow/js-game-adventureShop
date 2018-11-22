/**
 * Scene manager managing game scenes and the game object within them.
 */
class SceneManager {
	/**
	 * Constructor for the scene manager.
	 * 
	 * @param {Int}          canvasWidth  canvas width in pixels
	 * @param {Int}          canvasHeight canvas height in pixels
	 * @param {InputManager} input        instance of the input manager
	 */
	constructor (canvasWidth, canvasHeight, input) {
		/**
		 * @var {Scene}  _currentScene currently loaded scene
		 * @var {Object} _scenes       dictionary of all scenes in the game as
		 *                             persistant game objects
		 */
		this._currentScene = undefined;
		this._scenes = this._initializeScenes (canvasWidth, canvasHeight, input);
	}
	
	/**
	 * Gets the currently loaded scene.
	 * 
	 * @return {Scene} the currently loaded scene
	 */
	getCurrentScene () {
		return this._currentScene;
	}
	
	/**
	 * Loads a given scene as the current scene.
	 * 
	 * @param {String} scene scene to load
	 */
	setCurrentScene (scene) {
		if (!this._scenes.hasOwnProperty (scene)) {
			throw new Error (`Scene with name ${scene} does not exist.`);
		}
		
		this._currentScene = this._scenes[scene];
	}
	
	/**
	 * Loads all available game scenes into memory.
	 * 
	 * @param {Int}          width  canvas width in pixels
	 * @param {Int}          height canvas height in pixels
	 * @param {InputManager} input  instance of the input manager
	 * 
	 * @return {Object} dictionary of all scenes in the game
	 */
	_initializeScenes (width, height, input) {
		return {
			testScene: new TestScene (width, height, input)
		}
	}
}
