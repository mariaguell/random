export function initArtwork() {
	const encoded = encodeURIComponent( generate() )
	const img = `url("data:image/svg+xml,${ encoded }")`
	const element = document.getElementById( 'wall' )
	if ( element ) element.style.backgroundImage = img
}

function generate(): string {
	return `
	<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
	  <circle cx="200" cy="200" r="150" fill="orange" />
	</svg>`
}
