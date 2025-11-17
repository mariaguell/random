function readParms( args ) {
	const values = { };
	const urlParams = new URLSearchParams( window.location.href );
	args.forEach( arg => {
		const v = urlParams.get( arg.key );
		if ( v == null ) {
			values[arg.key] = Math.random( ) * ( arg.max - arg.min ) + arg.min;
			if ( arg.step == 1 ) values[arg.key] = Math.floor( values[arg.key] );
		}
		else
			values[arg.key] = parseFloat(v);
	});
	return values;
}

function getCurrentArtworkId( ) {
	const url = window.location.href;
	const a = url.split('/');
	const b = a[ a.length - 1 ];
	const c = b.split('.')[0];
	return c;
}

function getCurrentArtworkData( ) {
	const key = getCurrentArtworkId( );
	return artworks[key];
}

function a( key ) {
	return values[key];
}

const artworkData = getCurrentArtworkData();
const values = readParms( artworkData.parms );

// https://gokcetaskan.com/artofcode/high-quality-export

let scaleRatio = 1;
let exportRatio = 4;
let buffer, canvas;
let a3Paper = { width: 4096, height: 4096 }

function setupExport( ) {
	let w = a3Paper.width / exportRatio;
	let h = a3Paper.height / exportRatio;
	buffer = createGraphics( w, h );
	canvas = createCanvas( w, h );
	exportRatio /= pixelDensity();
}

function exportHighResolution() {
	scaleRatio = exportRatio;
	buffer = createGraphics( scaleRatio * width, scaleRatio * height );
	draw();
	let timestamp = new Date().getTime();
	save( buffer, str(timestamp), 'png' );
	scaleRatio = 1;
	buffer = createGraphics(width, height);
	draw();
}

function keyReleased() {
	if (key == 'e' || key == 'E')
		exportHighResolution();
}
