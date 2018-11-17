/**
 * Parent class from which all scenes inherit.
 */
class Scene {
	constructor (x, y) {
		this.width = x;
		this.height = y;
		this.gameObjects = {};
		
		this.renderables = [];
	}
	
	createGameObject (name, object) {
		this.gameObjects[name] = object;
	}
	
	/**
	 * Gets a list of renderable items ready to be drawn.
	 * 
	 * @return {Array} list of renderable items
	 */
	getRenderables () {
		return this.renderables;
	}
}
