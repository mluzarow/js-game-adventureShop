/**
 * Data object storing renderable text data.
 */
class RenderableText {
	/**
	 * Constructor for text renderable.
	 * 
	 * @param {String} color  text color
	 * @param {String} font   font preset
	 * @param {Object} origin text anchor point in the form {x, y}
	 * @param {String} text   text to be shown
	 */
	constructor (color, font, origin, text) {
		this.color;
		this.font;
		this.origin;
		this.text;
		
		this.setColor (color);
		this.setFont (font);
		this.setOrigin (origin);
		this.setText (text);
	}
	
	/**
	 * Gets the text color.
	 * 
	 * @return {String} text color
	 */
	getColor () {
		return this.color;
	}
	
	/**
	 * Gets the font preset.
	 * 
	 * @return {String} font preset
	 */
	getFont () {
		return this.font;
	}
	
	/**
	 * Gets the text origin point (anchor).
	 * 
	 * @return {Object} text anchor
	 */
	getOrigin () {
		return this.origin;
	}
	
	/**
	 * Gets the text to be rendered.
	 * 
	 * @return {String} text to be shown
	 */
	getText () {
		return this.text;
	}
	
	/**
	 * Gets the type of renderable this is (text).
	 * 
	 * @return {String} renderable type
	 */
	getType () {
		return "text";
	}
	
	/**
	 * Sets text color.
	 * 
	 * @param {String} color text color
	 */
	setColor (color) {
		this.color = color;
	}
	
	/**
	 * Sets font setting.
	 * 
	 * @param {String} font font setting
	 */
	setFont (font) {
		this.font = font;
	}
	
	/**
	 * Sets text origin point.
	 * 
	 * @param {Object} origin text origin point
	 */
	setOrigin (origin) {
		this.origin = origin;
	}
	
	/**
	 * Sets the text to be rendered.
	 * 
	 * @param {String} text text to be shown
	 */
	setText (text) {
		this.text = text;
	}
}
