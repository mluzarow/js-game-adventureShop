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
		);
		
		this._addComponent (
			'textbox',
			new ScrollableTextBox (
				this._input,
				"Gol D. Roger was known as the 'Pirate King', the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy’s reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece."
			)
		);
	}
	
	/**
	 * Updates the logic of the scene.
	 */
	updateLogic () {
		this._components["fpsmeter"].updateLogic ();
		this._components['button'].updateLogic ();
		this._components['textbox'].updateLogic ();
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
			this._components['textbox'].updateRenderables ()
		);
	}
}
