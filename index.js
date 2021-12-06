
clicked = function( e ) {

	let anId = e.currentTarget.getAttribute( "id" );

	$( "#" + anId ).toggleClass( "filter-on" );
	$( "#" + anId ).toggleClass( "filter-off" );

	$( "#grid" ).toggleClass( anId + "-hide" );
	
	window.m.layout();


}


document.addEventListener("DOMContentLoaded", function(event) { 

	//return;

	let aWidth = 440;
	let aWindowWidth = window.innerWidth;

	if ( aWindowWidth <= 500 ) {
		$( "img" ).attr( "width", aWindowWidth - 10 )
		$( ".grid-item .img" ).css( "height", aWindowWidth * 0.66667 );
		$( ".grid-item" ).css( "width", aWindowWidth - 10 )

		aWidth = aWindowWidth - 10;

	}

	window.m = new Masonry( '.grid', {
		columnWidth: aWidth
	  });

	  $( "button" ).on( "click", clicked );

} );

