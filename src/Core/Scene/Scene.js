class Scene {
	constructor () {
		this.gameObjects = {};
	}
	
	createGameObject (name, object) {
		this.gameObjects[name] = object;
	}
	
	
}
