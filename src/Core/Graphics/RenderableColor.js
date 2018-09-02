class RenderableColor {
	constructor (color, end, origin) {
		this.color;
		this.end;
		this.origin;
		
		this.setColor (color);
		this.setEnd (end);
		this.setOrigin (origin);
	}
	
	getColor () {
		return this.color;
	}
	
	getEnd () {
		return this.end;
	}
	
	getOrigin () {
		return this.origin;
	}
	
	getType () {
		return "color";
	}
	
	setColor (color) {
		this.color = color;
	}
	
	setEnd (end) {
		this.end = end;
	}
	
	setOrigin (origin) {
		this.origin = origin;
	}
}