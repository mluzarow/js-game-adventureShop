/**
 * Data object storing renderable colored rectangle data.
 */
class RenderableColor {
	/**
	 * Constructor for color renderable.
	 * 
	 * @param {String} color  background color
	 * @param {Object} end    end coordinates in the form {x, y}
	 * @param {Object} origin origin coordinates in the form {x, y}
	 */
	constructor (color, end, origin) {
		this.color;
		this.end;
		this.origin;
		
		this.setColor (color);
		this.setEnd (end);
		this.setOrigin (origin);
	}
	
	/**
	 * Gets the color.
	 * 
	 * @return {String} color
	 */
	getColor () {
		return this.color;
	}
	
	/**
	 * Gets the rectangle end coordinates.
	 * 
	 * @return {Object} end coordinates
	 */
	getEnd () {
		return this.end;
	}
	
	/**
	 * Gets the rectangle start coordinates.
	 * 
	 * @return {Object} start coordinates
	 */
	getOrigin () {
		return this.origin;
	}
	
	/**
	 * Gets the type of renderable this is (color).
	 * 
	 * @return {String} renderable type
	 */
	getType () {
		return "color";
	}
	
	/**
	 * Sets the rectangle color.
	 * 
	 * @param {String} color rectangle color
	 */
	setColor (color) {
		this.color = color;
	}
	
	/**
	 * Sets the rectangle end coordinates.
	 * 
	 * @param {Object} end rectangle end coordinates
	 */
	setEnd (end) {
		this.end = end;
	}
	
	/**
	 * Sets the rectangle start coordinates.
	 * 
	 * @param {Object} origin rectangle start coordinates
	 */
	setOrigin (origin) {
		this.origin = origin;
	}
}
