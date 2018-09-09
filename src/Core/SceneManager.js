/**
 * Scene manager managing game scenes and the game object within them.
 */
class SceneManager {
	constructor (canvasWidth, canvasHeight) {
		this.canvasWidth = canvasWidth;
		this.canvasHeight = canvasHeight;
	}
	
	getCurrentScene () {
		return this.currentScene;
	}
	
	loadScene (scene) {
		this.currentScene = scene;
	}
}
