/**
 * Data object storing renderable texture data.
 */
class RenderableTexture {
	/**
	 * Constructor for texture renderable.
	 * 
	 * @param {Image} image   texture
	 * @param {Object} end    end coordinates
	 * @param {Object} origin start coordinates
	 */
	constructor (image, end, origin) {
		this.image;
		this.end;
		this.origin;
		
		this.setImage (image);
		this.setEnd (end);
		this.setOrigin (origin);
	}
	
	/**
	 * Gets the image.
	 * 
	 * @return {Image} image to be used
	 */
	getImage () {
		return this.image;
	}
	
	/**
	 * Gets the texture end coordinates.
	 * 
	 * @return {Object} end coordinates
	 */
	getEnd () {
		return this.end;
	}
	
	/**
	 * Gets the texture start coordinates.
	 * 
	 * @return {Object} start coordinates
	 */
	getOrigin () {
		return this.origin;
	}
	
	/**
	 * Gets the type of renderable this is (texture).
	 * 
	 * @return {String} renderable type
	 */
	getType () {
		return "texture";
	}
	
	/**
	 * Sets the image.
	 * 
	 * @param {Image} image image to be used
	 */
	setImage (color) {
		this.image = image;
	}
	
	/**
	 * Sets texture end coordinates.
	 * 
	 * @param {Object} end end coordinates
	 */
	setEnd (end) {
		this.end = end;
	}
	
	/**
	 * Sets texture start coordinates.
	 * 
	 * @param {Object} origin start coordinates
	 */
	setOrigin (origin) {
		this.origin = origin;
	}
}
