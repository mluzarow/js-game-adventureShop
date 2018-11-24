/**
 * Game component for a simple button.
 */
class Button {
	/**
	 * Constructor for game component FPSMeter.
	 * 
	 * @param {Function}     clickEvent                 function run on button click
	 * @param {InputManager} input                      instance of input manager
	 * @param {Object}       origin                     tuple representing button render origin
	 * @param {String}       text                       button text
	 * @param {String}       [backColor="#202020"]      background color of button
	 * @param {String}       [fontfamily="Arial"]       font family text will use
	 * @param {String}       [fontsize="10px"]          font size of the text
	 * @param {String}       [hoverBackColor="#292929"] background color on hover
	 * @param {Object}       [size={x:100,y:40}]        size of button
	 * @param {String}       [textColor="#fff"]         color of the text
	 */
	constructor (
		clickEvent,
		input,
		origin,
		text,
		backColor = "#202020",
		fontfamily = "Arial",
		fontsize = "10px",
		hoverBackColor = "#292929",
		size = {x: 100, y: 40},
		textColor = "#fff"
	) {
		this._clickEvent = clickEvent;
		this._input = input;
		this._origin = origin
		this._text = text;
		this._backColor = backColor;
		this._fontfamily = fontfamily;
		this._fontsize = fontsize;
		this._hoverBackColor = hoverBackColor;
		this._size = size;
		this._textColor = textColor;
		
		this._activeBackColor = backColor;
		this._debouncing = false;
	}
	
	/**
	 * Updates the logic of the game component.
	 */
	updateLogic () {
		let mPos = this._input.getMouse ().getPosition ();
		let mStat = this._input.getMouse ().getStatus ();
		
		if (
			!(
				mPos.x >= this._origin.x &&
				mPos.x <= (this._origin.x + this._size.x) &&
				mPos.y >= this._origin.y &&
				mPos.y <= (this._origin.y + this._size.y)
			)
		) {
			// Not hovering the button
			this._debouncing = false;
			this._activeBackColor = this._backColor;
			return;
		}
		
		this._activeBackColor = this._hoverBackColor;
		
		if (mStat.left === true) {
			// Just clicked down, so wait for a release to trigger
			if (this._debouncing === false) {
				this._debouncing = true;
			}
			
			return;
		}
		
		if (this._debouncing === true) {
			// Activate the button logic
			this._debouncing = false;
			
			this._clickEvent ();
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
				this._activeBackColor,
				this._size,
				this._origin
			),
			new RenderableText (
				this._textColor,
				`${this._fontsize} ${this._fontfamily}`,
				{x: this._origin.x + 20, y: this._origin.y + 20},
				this._text
			)
		];
	}
}