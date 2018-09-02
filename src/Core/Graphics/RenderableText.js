class RenderableText {
	constructor (color, font, origin) {
		this.color;
		this.font;
		this.origin;
		
		this.setColor (color);
		this.setFont (font);
		this.setOrigin (origin);
	}
	
	getColor () {
		return this.color;
	}
	
	getFont () {
		return this.font;
	}
	
	getOrigin () {
		return this.origin;
	}
	
	getType () {
		return "text";
	}
	
	setColor (color) {
		this.color = color;
	}
	
	setFont (font) {
		this.font = font;
	}
	
	setOrigin (origin) {
		this.origin = origin;
	}
}