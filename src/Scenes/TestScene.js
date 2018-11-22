/**
 * A Scene for testing variable game elements.
 */
class TestScene extends Scene {
	/**
	 * Constructor for scene TestScene.
	 * 
	 * @param {Int} canvasWidth  canvas width in pixels
	 * @param {Int} canvasHeight canvas height in pixels
	 */
	constructor (canvasWidth, canvasHeight) {
		super (canvasWidth, canvasHeight);
		
		this.fps = 0;
		this.fpsDelta = 0;
		this.lastIteration = Date.now ();
		
		this.exampleText = "This is some example text that will be written.";
		this.textState = "";
		this.textBuff = 3;
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
		
		if (
			this.textBuff < 1 &&
			this.textState.length < this.exampleText.length
		) {
			this.textBuff = 3;
			
			this.textState += this.exampleText[this.textState.length];
		}
		
		if (--this.textBuff < 0) {
			this.textBuff = 0;
		}
	}
	
	/**
	 * Updates the data bound to the renderable items.
	 * 
	 * @return {Array} list of renderable items
	 */
	updateRenderables () {
		return [
			new RenderableColor (
				"#7e7e7e",
				{x: this._width, y: this._height},
				{x: 0, y: 0}
			),
			new RenderableText (
				"red",
				"20px Arial",
				{x: this._width - 100, y: 100},
				"FPS: " + this.fps
			),
			new RenderableColor (
				'#000',
				{x: this._width - 200, y: this._height - 550},
				{x: 100, y: 500}
			),
			new RenderableText (
				'#fff',
				"14px Arial",
				{x: 120, y: 520},
				this.textState
			)
		];
	}
}
