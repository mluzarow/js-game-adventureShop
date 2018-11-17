/**
 * Scene manager managing game scenes and the game object within them.
 */
class SceneManager {
	/**
	 * Constructor for the scene manager.
	 * 
	 * @param {Int} canvasWidth  canvas width in pixels
	 * @param {Int} canvasHeight canvas height in pixels
	 */
	constructor (canvasWidth, canvasHeight) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
		
		/**
		 * @type {Scene} the currently loaded scene
		 */
		this.currentScene = undefined;
	}
	
	/**
	 * Gets the currently loaded scene.
	 * 
	 * @return {Scene} the currently loaded scene
	 */
	getCurrentScene () {
		return this.currentScene;
	}
	
	/**
	 * Loads a given scene as the current scene.
	 * 
	 * @param {Scene} scene scene to load
	 */
	loadScene (scene) {
		this.currentScene = scene;
	}
}
