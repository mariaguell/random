import { random } from 'lodash';

export function initArtwork(): void {
	const encoded = encodeURIComponent( generate() )
	const img = `url("data:image/svg+xml,${ encoded }")`
	const elements = document.querySelectorAll( '.bg' )
	elements.forEach( element => element.style.backgroundImage = img )
}

type Svg = string
type Icon = string

function generate(): Svg {
	const icons: Icon[] = []
	for ( let i = 0; i < 50; i++ ) icons.push( makeIcon2() )
	return makeSvg( window.innerWidth * .5, window.innerHeight * .5, icons.join() )
}

function makeSvg( width: number, height: number, content: string ): Svg {
	return `<svg xmlns="http://www.w3.org/2000/svg" width="${ width }" height="${ height }">
		<g fill="none" stroke="white">${ content }</g>
	</svg>`
}

function makeIcon2(): Icon {
	const x = random( 0, window.innerWidth )
	const y = random( 0, window.innerHeight )
	const size = random( 0, window.innerWidth ) * .2
	const rotation = random( 0, 360 )
	return makeIcon( x, y, size, rotation )
}

function makeIcon( x: number, y: number, size: number, rotation: number ): Icon {
	return randomFromArray( [
		makeIconCircle( x, y, size ),
		makeIconSquare( x, y, size ),
		makeIconMoon( x, y, size, rotation ),
		// makeIconLeaf( x, y, size, rotation )
	] )
}

function makeIconCircle( x: number, y: number, size: number ): Icon {
	return `<circle cx="${ x }" cy="${ y }" r="${ size }"/>`
}

function makeIconSquare( x: number, y: number, s: number ): Icon {
	return `<path d="m ${ x } ${ y } m -${ s } 0 l ${ s } ${ s } l ${ s } -${ s } l -${ s } -${ s } z" />`
}

function makeIconMoon( x: number, y: number, size: number, r: number ): Icon {
	const a = size * .5
	const b = size / 6
	const c = size / 6 * 5
	const d = size / 6 * 2
	return `<path transform="rotate( ${ r } )" d="m ${ x } ${ y } m 0 -${ a } c -${ b } 0 -${ a } ${ b } -${ a } ${ a } c 0 ${ d } ${ d } ${ a } ${ a } ${ a } c ${ b } 0 ${ a } -${ b } ${ a } -${ a } c -${ d } ${ d } -${ c } 0 -${ a } -${ a }" />`
}

function makeIconLeaf( x: number, y: number, size: number, r: number ): Icon {
	const s = size / 10
	const leaf = `l ${ s } -${ s } l -${ s } ${ s } l 0 -${ s } l -${ s } -${ s } l ${ s } ${ s } l 0 -${ s }`
	return `<path transform="rotate( ${ r } )" d="m ${ x } ${ y - size / 2 } l 0 ${ size } l 0 -${ s * 3 } ${ leaf } ${ leaf } ${ leaf } l ${ s } -${ s } l -${ s } ${ s } l 0 -${ s }" />`
}

function randomFromArray<T>( list: T[] ): T {
	return list[random( 0, list.length - 1 )]!
}
