/**
 * A Scene for testing variable game elements.
 */
class TestScene extends Scene {
	/**
	 * Constructor for scene TestScene.
	 * 
	 * @param {Int}          canvasWidth  canvas width in pixels
	 * @param {Int}          canvasHeight canvas height in pixels
	 * @param {InputManager} input        instance of the input manager
	 */
	constructor (canvasWidth, canvasHeight, input) {
		super (canvasWidth, canvasHeight, input);
		
		this._addComponent (
			"fpsmeter",
			new FPSMeter (
				{x: this._width - 100, y: 100},
				"red",
				"Arial",
				"20px"
			)
		);
		
		this._addComponent (
			'button',
			new Button (
				function () { console.log ("clicked!"); },
				this._input,
				{x: 40, y: 40},
				"BUTTON!"
			)
		)
		
		this.exampleText = "This is some example text that will be written.";
		this.textState = "";
		this.textBuff = 3;
	}
	
	/**
	 * Updates the logic of the scene.
	 */
	updateLogic () {
		this._components["fpsmeter"].updateLogic ();
		this._components['button'].updateLogic ();
		
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
		return [].concat (
			new RenderableColor (
				"#7e7e7e",
				{x: this._width, y: this._height},
				{x: 0, y: 0}
			),
			this._components["fpsmeter"].updateRenderables (),
			this._components['button'].updateRenderables (),
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
		);
	}
}
