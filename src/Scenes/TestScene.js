class TestScene extends Scene {
	constructor () {
		super ();
		
		this.fps = 0;
		this.fpsDelta = 0;
		this.lastIteration = Date.now ();
	}
	
	update () {
		let currentIteration = Date.now ();
		let localDelta = currentIteration - this.lastIteration;
		this.fpsDelta += (localDelta - this.fpsDelta) / 20;
		this.lastIteration = currentIteration;
		this.fps = (1000 / this.fpsDelta).toFixed (0);
	}
	
	getRenderables () {
		let background = new RenderableColor (
			"blue",
			{x: this.renderer.getWidth (), y: this.renderer.getHeight ()},
			{x: 0, y: 0}
		);
		
		let fpsCounter = new RenderableText (
			"red",
			"20px Arial",
			{x: this.renderer.getWidth () - 100, y: 100},
			"FPS: " + this.fps
		);
		
		return [
			background,
			fpsCounter
		];
	}
}