class RenderableTexture {
	constructor (image, end, origin) {
		this.image;
		this.end;
		this.origin;
		
		this.setImage (image);
		this.setEnd (end);
		this.setOrigin (origin);
	}
	
	getImage () {
		return this.image;
	}
	
	getEnd () {
		return this.end;
	}
	
	getOrigin () {
		return this.origin;
	}
	
	getType () {
		return "texture";
	}
	
	setImage (color) {
		this.image = image;
	}
	
	setEnd (font) {
		this.end = end;
	}
	
	setOrigin (origin) {
		this.origin = origin;
	}
}