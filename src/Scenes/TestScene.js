class TestScene extends Scene {
	constructor (x, y) {
		super (x, y);
		
		this.fps = 0;
		this.fpsDelta = 0;
		this.lastIteration = Date.now ();
	}
	
	/**
	 * Updates the logic of the scene.
	 */
	updateLogic () {
		let currentIteration = Date.now ();
		let localDelta = currentIteration - this.lastIteration;
		this.fpsDelta += (localDelta - this.fpsDelta) / 20;
		this.lastIteration = currentIteration;
		this.fps = (1000 / this.fpsDelta).toFixed (0);
	}
	
	/**
	 * Updates the data bound to the renderable items.
	 */
	updateRenderables () {
		let background = new RenderableColor (
			"blue",
			{x: this.width, y: this.height},
			{x: 0, y: 0}
		);
		
		let fpsCounter = new RenderableText (
			"red",
			"20px Arial",
			{x: this.width - 100, y: 100},
			"FPS: " + this.fps
		);
		
		this.renderables = [
			background,
			fpsCounter
		];
	}
}
