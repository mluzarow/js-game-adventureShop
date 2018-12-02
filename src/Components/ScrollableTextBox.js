/**
 * Game component for a scrollable text box.
 */
class ScrollableTextBox {
	/**
	 * Constructor for game component ScrollableTextBox.
	 * 
	 * @param {InputManager} input      instance of input manager
	 * @param {String}       text       text that will be printed via the text box
	 * @param {Int}          printSpeed number of frames between each charater printed
	 */
	constructor (input, text, printSpeed = 2) {
		this._input = input;
		this._text = text;
		this._printSpeed = printSpeed;
		
		// Constants im too lazy to make dynamic
		this._boxColor = "#000";
		this._boxOrigin = {x: 10, y: 100};
		this._boxSize = {x: 500, y: 200};
		this._fontColor = "#fff";
		this._fontfamily = "Arial";
		this._fontsize = "10px";
		
		/**
		 * @var {int} _horizontalPadding   pixel distance from left and right
		 *                                 side of dialog box
		 * @var {int} _verticalPadding     pixel distance from top and bottom of
		 *                                 dialog box
		 * @var {int} _verticalTextPadding pixel distance between lines
		 */
		this._horizontalPadding = 30;
		this._verticalPadding = 30;
		this._verticalTextPadding = 10;
		
		let letterHeight = 10;
		let realHeight = this._boxSize.y - this._verticalPadding * 2;
		this._lineHeight = letterHeight + this._verticalTextPadding;
		this._maxLines = parseInt (realHeight / this._lineHeight);
		
		// Chunk the text
		this._chunkedText = this._processRawText (text);
		
		this._activeChar = 0;
		this._activeLine = 0;
		this._activeBlock = 0;
		this._activeText = [];
		
		for (let i = 0; i < this._maxLines; i++) {
			this._activeText.push ('');
		}
		
		// Create the button
		this._moreButton = new Button (
			function () {
				this._flagShowContinueBtn = false;
				this._flagContinue = true;
			}.bind (this),
			this._input,
			{
				x: this._boxOrigin.x + this._boxSize.x - 100,
				y: this._boxOrigin.y + this._boxSize.y - 40
			},
			">>"
		)
		
		this._flagComplete = false;
		this._flagShowContinueBtn = false;
		this._flagContinue = false;
	}
	
	/**
	 * Updates the logic of the game component.
	 */
	updateLogic () {
		if (this._flagComplete === true) {
			return;
		}
		
		if (this._flagShowContinueBtn === true) {
			this._moreButton.updateLogic ();
		}
		
		if (--this._activeTimer < 0) {
			this._activeTimer = 0;
		}
		
		if (this._activeTimer > 0) {
			return;
		}
		
		if (
			this._activeText[this._activeLine].length >= this._chunkedText[this._activeBlock][this._activeLine].length
		) {
			if (this._activeLine + 1 >= this._chunkedText[this._activeBlock].length) {
				if (this._activeBlock + 1 >= this._chunkedText.length) {
					this._flagComplete = true;
					return;
				}
				
				if (this._flagContinue === false) {
					this._flagShowContinueBtn = true;
					return;
				}
				
				this._flagContinue = false;
				
				this._activeChar = 0;
				this._activeLine = 0;
				this._activeBlock++;
				
				for (let i = 0; i < this._activeText.length; i++) {
					this._activeText[i] = '';
				}
			} else {
				this._activeLine++;
				this._activeChar = 0;
			}
		}
		
		this._activeTimer = this._printSpeed;
		
		this._activeText[this._activeLine] += this._chunkedText[this._activeBlock][this._activeLine][this._activeChar++];
	}
	
	/**
	 * Updates the data bound to the renderable items.
	 * 
	 * @return {Array} list of renderable items
	 */
	updateRenderables () {
		return [].concat (
			new RenderableColor (
				this._boxColor,
				this._boxSize,
				this._boxOrigin
			),
			this._generateTextRenderables ()
		);
	}
	
	_generateTextRenderables () {
		let renderables = [];
		
		for (let i = 0; i < this._activeText.length; i++) {
			renderables.push (
				new RenderableText (
					this._fontColor,
					`${this._fontsize} ${this._fontfamily}`,
					{
						x: this._boxOrigin.x + this._horizontalPadding,
						y: this._boxOrigin.y + this._verticalPadding + i * this._lineHeight
					},
					this._activeText[i]
				)
			);
		}
		
		if (this._flagShowContinueBtn === true) {
			renderables = renderables.concat (this._moreButton.updateRenderables ());
		}
		
		return renderables;
	}
	
	/**
	 * Splits up text according to the dimensions of the text container. Text is
	 * split into lines wherein every line contains the maximum number of whole
	 * words at the given font style that will fit horizontally in the container.
	 * If there is not more vertical space, the lines that fit into a single
	 * container vertically are placed into a seperate array.
	 * 
	 * @param {String} rawText single string containing the entire section of
	 *                         text
	 * 
	 * @return {Array} processed dialog lines split into groups based on vertical
	 *                 space allowance and then further again into groups defined
	 *                 by allowable horizontal space
	 */
	_processRawText (rawText) {
		let virtualContext = document.createElement ("canvas").getContext ("2d");
		virtualContext.font = `${this._fontsize} ${this._fontfamily}`;
		
		let realWidth = this._boxSize.x - this._horizontalPadding * 2;
		
		let textWords = rawText.split (' ');
		let testLine = "";
		let renderTextItem = [];
		let renderText = [];
		
		for (let i = 0; i < textWords.length; i++) {
			let currentLine = `${testLine} ${textWords[i]}`;
			let lineLength = virtualContext.measureText (currentLine).width;
			
			if (lineLength >= realWidth) {
				// Characters beyond boundary; wrap text to new line
				if (renderTextItem.length >= this._maxLines) {
					// Ran out of lines; add to new textbox
					renderText.push (renderTextItem);
					renderTextItem = [];
				}
				
				renderTextItem.push (testLine);
				testLine = textWords[i];
			} else {
				// Add 1 character
				testLine = currentLine;
			}
		}
		
		// Check for any leftovers
		if (testLine.length > 0) {
			if (renderTextItem.length >= this._maxLines) {
				renderText.push (renderTextItem);
			}
			
			renderTextItem.push (testLine);
			renderText.push (renderTextItem);
		}
		
		return renderText;
	}
}
